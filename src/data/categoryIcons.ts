/**
 * Category Icons
 * 每個分類對應的 SVG path（24x24 viewBox，stroke-based）
 * 新增分類時在此加入對應 icon
 */

export interface CategoryIcon {
  paths: string[];
  viewBox?: string;
}

const icons: Record<string, CategoryIcon> = {
  dev: {
    paths: [
      'M8 9l3 3-3 3',
      'M13 15h3',
      'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z',
    ],
  },
  Life: {
    paths: [
      'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    ],
  },
  MYCTF: {
    paths: [
      'M12 3L4 7v5c0 4.418 3.582 8.569 8 9.93C16.418 20.569 20 16.418 20 12V7l-8-4z',
    ],
  },
  Network: {
    paths: [
      'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z',
      'M2 12h20',
      'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    ],
  },
};

/** 找不到對應分類時的預設 icon */
const fallback: CategoryIcon = {
  paths: [
    'M3 7a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707.293L10.414 6.4A1 1 0 0 0 11.121 6.7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z',
  ],
};

export function getCategoryIcon(category: string): CategoryIcon {
  return icons[category] ?? fallback;
}
