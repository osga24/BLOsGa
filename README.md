# BLOsGa

> OsGa 的個人部落格 — https://blog.osga.dev

延續 [osga.dev](https://osga.dev) 的米白 / 墨黑 / 灰綠配色與 JetBrains Mono 字體，
版面參考 [yual.in](https://yual.in) 的左側欄 + 文章列表，以及 [Openblog](https://github.com/danielcgilibert/blog-template) 的極簡文章頁。

![og-image](public/og-image.png)

## 技術

- Astro 6 · 純 CSS（無 Tailwind）· `astro-icon`（lucide / simple-icons）
- Pagefind 站內搜尋、RSS、Sitemap
- Shiki 雙主題程式碼高亮、閱讀時間、目錄 scroll-spy、程式碼複製、圖片燈箱

## 開發

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # astro check + build + pagefind
```

## 寫文章

在 `src/content/posts/<slug>/index.md` 新增文章，圖片放同一個資料夾：

```yaml
---
title: 文章標題
pubDate: 2026-10-14
description: 一句話摘要
heroImage: hero.png
tags: [tag1, tag2]
category: Life
draft: false
---
```

提示框：`<div class="info|note|tip|success|warning|danger">…</div>`

## 結構

```
src/
├── components/   Sidebar、PostList、TableOfContents、ArticleEnhance…
├── layouts/      BaseLayout（左側欄 + 主欄）
├── pages/        /、/page/N/、/posts/[slug]/、/tags/、/category/、/search/
├── styles/       global.css（設計 token）、prose.css（文章排版）
└── consts.ts     站名、導覽、社群連結
```
