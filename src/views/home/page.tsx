import { getPageData } from "@/lib/data/pageLoader";
import PageRenderer from "@/components/sections/PageRenderer";

export default function HomePage() {
  const data = getPageData("home");
  if (!data) return null;

  return (
    <main>
      <PageRenderer sections={data.sections} />
    </main>
  );
}
