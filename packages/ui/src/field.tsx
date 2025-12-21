import { Field as BaseField } from "@base-ui/react/field";
import { type ComponentProps } from "react";
import { cn } from "./utils.js";

type RootProps = ComponentProps<typeof BaseField.Root>;
type LabelProps = ComponentProps<typeof BaseField.Label>;
type ErrorProps = ComponentProps<typeof BaseField.Error>;
type DescriptionProps = ComponentProps<typeof BaseField.Description>;

function Root({ className = "", ...props }: RootProps) {
  return <BaseField.Root className={cn("mb-4", className)} {...props} />;
}

function Label({ className = "", ...props }: LabelProps) {
  return (
    <BaseField.Label
      className={cn("block text-sm mb-1", className)}
      {...props}
    />
  );
}

function Error({ className = "", ...props }: ErrorProps) {
  return (
    <BaseField.Error
      className={cn("text-red-500 text-sm mt-1", className)}
      {...props}
    />
  );
}

function Description({ className = "", ...props }: DescriptionProps) {
  return (
    <BaseField.Description
      className={cn("text-neutral-400 text-sm mt-1", className)}
      {...props}
    />
  );
}

export const Field = {
  Root,
  Label,
  Control: BaseField.Control,
  Error,
  Description,
};
