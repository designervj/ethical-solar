import { getPageData } from "@/lib/data/pageLoader";
import PageRenderer from "@/components/sections/PageRenderer";

export default function ContactUs() {
  const data = getPageData("contact-us");
  if (!data) return null;

  return (
    <>
      <PageRenderer sections={data.sections} />
    </>
  );
}
