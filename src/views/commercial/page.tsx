import { getPageData } from "@/lib/data/pageLoader";
import PageRenderer from "@/components/sections/PageRenderer";

export default function Commercial() {
  const data = getPageData("commercial");
  if (!data) return null;

  return (
    <>
      <PageRenderer sections={data.sections} />
    </>
  );
}
