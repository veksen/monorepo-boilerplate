import { cn } from "./utils.js";

type GradientProps = {
  small?: boolean;
  conic?: boolean;
  className?: string;
};

export function Gradient({ conic, className, small }: GradientProps) {
  return (
    <span
      className={cn(
        "absolute mix-blend-normal will-change-[filter] rounded-[100%]",
        conic &&
          "bg-gradient-to-r bg-red-1000 from-10% via-purple-1000 via-30% to-blue-1000 to-100%",
        small ? "blur-[32px]" : "blur-[75px]",
        className,
      )}
    />
  );
}
