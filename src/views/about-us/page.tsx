import { getPageData } from "@/lib/data/pageLoader";
import PageRenderer from "@/components/sections/PageRenderer";

export default function AboutUs() {
  const data = getPageData("about-us");
  if (!data) return null;

  return (
    <div className="animate-fade-in">
      <PageRenderer sections={data.sections} />
    </div>
  );
}
