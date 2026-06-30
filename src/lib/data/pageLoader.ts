export type LocalizedString = string | Record<string, string>;

export interface PageBlock {
  id: string;
  type: string;
  layout?: string;
  adminTitle?: string;
  props?: Record<string, any>;
  content?: PageBlock[];
}

export interface PageData {
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  sections: PageBlock[];
}

import homePageJson from "./pages/homePage.json";
import aboutUsPageJson from "./pages/aboutUsPage.json";
import blogPageJson from "./pages/blogPage.json";
import commercialPageJson from "./pages/commercialPage.json";
import residentialPageJson from "./pages/residentialPage.json";
import contactUsPageJson from "./pages/contactUsPage.json";
// Add other page imports as we create them

export const pageRegistry: Record<string, PageData> = {
  home: homePageJson as PageData,
  "about-us": aboutUsPageJson as PageData,
  blog: blogPageJson as PageData,
  commercial: commercialPageJson as PageData,
  residential: residentialPageJson as PageData,
  "contact-us": contactUsPageJson as PageData,
};

export function getPageData(slug: string): PageData | null {
  return pageRegistry[slug] ?? null;
}
