import { getPageData } from "@/lib/data/pageLoader";
import PageRenderer from "@/components/sections/PageRenderer";

export default function Residential() {
  const data = getPageData("residential");
  if (!data) return null;

  return (
    <>
      <PageRenderer sections={data.sections} />
    </>
  );
}
