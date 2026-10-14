import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

// Exposes `minutesRead` on the post's remarkPluginFrontmatter.
// CJK text has no spaces, so count characters at ~400 chars/min instead of words.
export function remarkReadingTime() {
  return function (tree, { data }) {
    const text = toString(tree);
    const cjk = (text.match(/[㐀-鿿豈-﫿]/g) ?? []).length;
    const rest = text.replace(/[㐀-鿿豈-﫿]/g, " ");
    const minutes = cjk / 400 + getReadingTime(rest).minutes;
    data.astro.frontmatter.minutesRead = Math.max(1, Math.round(minutes));
  };
}
