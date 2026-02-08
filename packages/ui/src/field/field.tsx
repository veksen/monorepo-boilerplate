import { type ComponentProps } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { cn } from "../utils.js";

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
      className={cn("mb-1 block text-sm", className)}
      {...props}
    />
  );
}

function Error({ className = "", ...props }: ErrorProps) {
  return (
    <BaseField.Error
      className={cn("mt-1 text-sm text-red-500", className)}
      {...props}
    />
  );
}

function Description({ className = "", ...props }: DescriptionProps) {
  return (
    <BaseField.Description
      className={cn("mt-1 text-sm text-neutral-400", className)}
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
