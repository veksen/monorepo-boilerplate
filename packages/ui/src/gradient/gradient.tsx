import { cn } from "../utils.js";

type GradientProps = {
  small?: boolean;
  conic?: boolean;
  className?: string;
};

export function Gradient({ conic, className, small }: GradientProps) {
  return (
    <span
      className={cn(
        "absolute rounded-[100%] mix-blend-normal will-change-[filter]",
        conic &&
          "bg-red-1000 via-purple-1000 to-blue-1000 bg-gradient-to-r from-10% via-30% to-100%",
        small ? "blur-[32px]" : "blur-[75px]",
        className,
      )}
    />
  );
}
