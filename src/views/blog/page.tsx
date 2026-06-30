import { getPageData } from "@/lib/data/pageLoader";
import PageRenderer from "@/components/sections/PageRenderer";

export default function Blog() {
  const data = getPageData("blog");
  if (!data) return null;

  return (
    <div className="animate-fade-in">
      <PageRenderer sections={data.sections} />
    </div>
  );
}
