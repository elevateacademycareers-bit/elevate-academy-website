import { Landmark, ShieldCheck, TrendingUp, type LucideProps } from "lucide-react";

const map = { Landmark, ShieldCheck, TrendingUp };
export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden {...props} />;
}
