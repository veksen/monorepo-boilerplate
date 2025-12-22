import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "cva";
import { type ComponentProps } from "react";
import { cn } from "../utils.js";

const buttonVariants = cva({
  base: "rounded-lg border font-medium cursor-pointer transition-colors",
  variants: {
    variant: {
      primary: "bg-purple-600 border-purple-600 text-white hover:bg-purple-700",
      secondary:
        "bg-neutral-800 border-neutral-700 text-white hover:border-purple-500",
      ghost:
        "bg-transparent border-transparent text-neutral-400 hover:text-white",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-5 text-base",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "md",
  },
});

type ButtonProps = ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className = "",
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
