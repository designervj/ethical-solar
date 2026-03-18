"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/redux/store';
import { createForm } from '@/lib/redux/slices/formSlice/formThunk';
import { FormInterface } from '@/lib/redux/slices/formSlice/formType';
import { toast } from 'sonner';

export const ResidentialHeroForm: React.FC = () => {
  const [form, setForm] = useState<FormInterface>({
    firstName: '',
    type: 'residential',
    lastName: '',
    phone: '',
    email: '',
    postCode: '',
    averageBill: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>()

  const resetForm=()=>{
  setForm({
          firstName: '',
          type: 'residential',
          lastName: '',
          phone: '',
          email: '',
          postCode: '',
          averageBill: '',
        });
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await dispatch(createForm(form)).unwrap();
      if (response.success) {
        toast.success( 'Form submitted successfully');
      resetForm()
      } else {
        toast.error(response.message || 'Failed to submit form');
      }
    } catch (error: any) {
      toast.error(error || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
      <div className="text-white mb-6">
        <h3 className="text-2xl font-serif">Get a Free Assessment</h3>
        <p className="text-sm text-gray-300">Custom design and savings estimate.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900"
          />
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900"
          />
        </div>
        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          type="tel"
          placeholder="Phone"
          className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900"
        />
        <input
          value={form.postCode}
          onChange={(e) => setForm({ ...form, postCode: e.target.value })}
          type="text"
          placeholder="Post Code"
          className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900"
        />

        <div className="relative">
          <select className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 text-gray-500 appearance-none"
            value={form.averageBill}
            onChange={(e) => setForm({ ...form, averageBill: e.target.value })}
          >
            <option>Average Electric Bill</option>
            <option>$100 - $150</option>
            <option>$150 - $250</option>
            <option>$250+</option>
          </select>
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>

        <div className="pt-2">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/30" onClick={handleSubmit}>
            {isLoading ? 'Submitting...' : 'Get a solar assessment'}
          </Button>
        </div>
      </form>
    </div>
  );
};
