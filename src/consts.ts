export const SITE_TITLE = "BLOsGa";
export const SITE_AUTHOR = "OsGa";
export const SITE_DESCRIPTION = "OsGa 的部落格 — 紀錄技術、資安與生活";
export const SITE_INTRO = "紀錄技術、資安與生活。\n偶爾出題，常常踩坑。";

export const POSTS_PER_PAGE = 10;

export const NAV_LINKS = [
  { href: "/", label: "Posts" },
  { href: "/category/", label: "Category" },
  { href: "/tags/", label: "Tags" },
  { href: "/search/", label: "Search" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://osga.dev", icon: "lucide:globe", label: "Website" },
  { href: "https://github.com/osga24", icon: "simple-icons:github", label: "GitHub" },
  { href: "/rss.xml", icon: "lucide:rss", label: "RSS" },
] as const;
