export type SubCategory = {
  title: string;
  description: string;
  href?: string;
};

export type MegaSection = {
  title: string;
  href: string;
  subcategories: SubCategory[];
};
