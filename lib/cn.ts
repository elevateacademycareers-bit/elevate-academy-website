import { twMerge } from "tailwind-merge";

/** Joins class names and resolves conflicting Tailwind utilities (last wins). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
