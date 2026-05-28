// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "BLOsGa";
export const SITE_TITLE = "BLOsGa";
export const SITE_DESCRIPTION = "OsGa 的部落格 — 紀錄技術、資安與生活";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = `${SITE_TITLE} - All Tags`;
export const Tags_DESCRIPTION = `${SITE_TITLE} - 所有標籤與各標籤的文章數量`;

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `'${tag}' 標籤的所有文章 - ${SITE_TITLE}`,
    description: `探索所有關於 ${tag} 的文章。`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `'${category}' 分類的所有文章 - ${SITE_TITLE}`,
    description: `瀏覽 ${category} 分類下的所有文章。`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/", title: "Home" },
  { href: "/tags/", title: "Tags" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/", title: "Home" },
  { href: "/tags/", title: "Tags" },
  { href: "/rss.xml", title: "RSS" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "icon-[tabler--rss]", label: "RSS" },
  {
    href: "https://osga.dev",
    icon: "icon-[tabler--world]",
    label: "Website",
  },
  {
    href: "https://github.com/osga24",
    icon: "icon-[tabler--brand-github]",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - 站內搜尋`;
export const SEARCH_PAGE_DESCRIPTION = `搜尋 ${SITE_TITLE} 的所有內容`;
