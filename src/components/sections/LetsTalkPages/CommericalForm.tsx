import { createForm } from '@/lib/redux/slices/formSlice/formThunk';
import { FormInterface } from '@/lib/redux/slices/formSlice/fromType';
import { AppDispatch } from '@/lib/redux/store';
import React, { useId, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

const CommericalForm = () => {
    const [form, setForm] = useState<FormInterface>({
        type: "commercial",
        firstName: "",
        email: "",
        postCode: "",
        message: "",
        electric_bill: []
    })

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const id = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState("No file chosen");

    const accept = undefined; // e.g. "application/pdf,image/*"
    const multiple = false;
    const label = "Upload your electric bill (optional)";

    const handlePick = () => inputRef.current?.click();


    const resetForm = () => {
        setForm({
            type: "commercial",
            firstName: "",
            email: "",
            postCode: "",
            message: "",
            electric_bill: []
        })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (!files || files.length === 0) {
            setFileName("No file chosen");
            return;
        }

        if (multiple) {
            setFileName(`${files.length} file(s) selected`);
        } else {
            setFileName(files[0].name);
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.firstName || !form.email || !form.postCode || !form.message) {
            toast.error("Please fill all the required fields");
            return;
        }

        setIsLoading(true);
        try {
            const response = await dispatch(createForm(form)).unwrap();
            if (response.success) {
                toast.success("Form submitted successfully");
                resetForm()
            } else {
                toast.error("Failed to submit form");
            }
        } catch (error) {
            toast.error("An error occurred while submitting the form");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="px-0 py-8  md:p-10 bg-white md:w-2/3 ">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* First + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <label className="space-y-2">
                            <span className="text-[16px] font-semibold text-[#0F0F3D]">
                                First Name*
                            </span>
                            <input
                                type="text"
                                placeholder='Jhon'
                                value={form.firstName}
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                            />
                        </label>

                        <label className="space-y-2 block">
                            <span className="text-[16px] font-semibold text-[#0F0F3D]">
                                Email*
                            </span>
                            <input
                                type="email"
                                placeholder='Jhon@example.com'
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                            />
                        </label>
                    </div>

                    {/* Zip */}
                    <label className="space-y-2 block">
                        <span className="text-[16px] font-semibold text-[#0F0F3D]">
                            Postcode
                        </span>
                        <input
                            type="text"
                            value={form.postCode}
                            onChange={(e) => setForm({ ...form, postCode: e.target.value })}
                            className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                        />
                    </label>

                    {/* Message */}
                    <div className="space-y-2">
                        <span className="text-[16px] font-semibold text-[#0F0F3D]">
                            Message
                        </span>
                        <textarea
                            rows={5}
                            placeholder="Write your questions here..."
                            className="
                      w-full rounded-md border border-black/10
                      p-3 text-sm outline-none
                      focus:ring-2 focus:ring-black/5 focus:border-black/30
                    "
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                    </div>

                    {/* Upload (same UI as your image) */}
                    <div className="w-full rounded-xl bg-slate-900 px-6 py-5" style={{ marginTop: "10px" }}>
                        <label
                            htmlFor={id}
                            className="block text-white md:text-md text-sm font-medium mb-4"
                        >
                            {label}
                        </label>

                        <div className="flex items-center gap-6">
                            <input
                                id={id}
                                ref={inputRef}
                                type="file"
                                accept={accept}
                                multiple={multiple}
                                onChange={handleChange}
                                className="hidden"
                            />

                            <button
                                type="button"
                                onClick={handlePick}
                                className="inline-flex items-center justify-center md:px-8 px-4 py-2 rounded-full border border-white text-white font-medium md:text-md text-sm hover:bg-white/10 active:scale-[0.99] transition"
                            >
                                Choose file
                            </button>

                            <span className="text-white md:text-md text-sm font-medium">
                                {fileName}
                            </span>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="
                    inline-flex items-center gap-2 bg-[#3ccb7f] hover:bg-[#23499b] text-white  px-5 py-3 rounded-full
                    text-sm font-medium shadow-sm
                    hover:brightness-95 transition
                  "
                    >
                        {isLoading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <><img
                            src="./assets/Image/mail2-icon.svg"
                            alt="send"
                            className="w-5 h-5"
                        />
                            Send Message</>}
                    </button>
                </form>
            </div>
        </>
    )
}

export default CommericalForm