import { Input as BaseInput } from "@base-ui/react/input";
import { type ComponentProps } from "react";

type InputProps = ComponentProps<typeof BaseInput>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <BaseInput
      className={`w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:border-purple-500 ${className}`}
      {...props}
    />
  );
}
