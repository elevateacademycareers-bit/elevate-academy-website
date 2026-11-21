import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

export type MediaItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  sample?: boolean;
};

const EXT = /\.(webp|avif|jpe?g|png)$/i;

/**
 * Reads every image in /public/images/<folder> at build time, so new
 * photos can be added by dropping files into the folder — no code change.
 * Optional captions live in /public/images/<folder>/captions.json as
 * { "file-name.webp": { "alt": "...", "caption": "..." } }.
 * Files are sorted by name; prefix with 01-, 02- … to control order.
 */
export function getMedia(folder: "gallery" | "posters"): MediaItem[] {
  const dir = path.join(process.cwd(), "public", "images", folder);
  if (!fs.existsSync(dir)) return [];
  let meta: Record<string, Partial<Pick<MediaItem, "alt" | "caption" | "sample">>> = {};
  const metaFile = path.join(dir, "captions.json");
  if (fs.existsSync(metaFile)) {
    try {
      meta = JSON.parse(fs.readFileSync(metaFile, "utf8"));
    } catch {
      meta = {};
    }
  }
  return fs
    .readdirSync(dir)
    .filter((f) => EXT.test(f))
    .sort()
    .map((file) => {
      const buf = fs.readFileSync(path.join(dir, file));
      const { width = 1600, height = 1000 } = imageSize(buf);
      const fallback = file
        .replace(EXT, "")
        .replace(/^\d+[-_]?/, "")
        .replace(/[-_]+/g, " ")
        .trim();
      return {
        src: `/images/${folder}/${file}`,
        width,
        height,
        alt: meta[file]?.alt ?? (fallback || `${folder} image`),
        caption: meta[file]?.caption,
        sample: meta[file]?.sample,
      };
    });
}
