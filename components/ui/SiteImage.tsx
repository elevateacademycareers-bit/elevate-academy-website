import Image, { type ImageProps } from "next/image";

export function SiteImage({ src, ...props }: ImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const isLocal = typeof src === "string" && src.startsWith("/") && !src.startsWith("//");
  return <Image src={isLocal ? basePath + src : src} {...props} />;
}
