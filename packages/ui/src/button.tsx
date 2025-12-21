import { Button as BaseButton } from "@base-ui/react/button";
import { type ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof BaseButton>;

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <BaseButton
      className={`rounded-lg border border-transparent px-5 py-4 text-base font-medium bg-neutral-900 cursor-pointer transition-colors hover:border-purple-500 ${className}`}
      {...props}
    />
  );
}
