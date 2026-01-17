import { Input as BaseInput } from "@base-ui/react/input";
import { type ComponentProps } from "react";
import { cn } from "../utils.js";

type InputProps = ComponentProps<typeof BaseInput>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <BaseInput
      className={cn(
        "w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 focus:border-purple-500 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
