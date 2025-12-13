import { Field as BaseField } from "@base-ui/react/field";
import { type ComponentProps } from "react";

function Root({
  className = "",
  ...props
}: ComponentProps<typeof BaseField.Root>) {
  return <BaseField.Root className={`mb-4 ${className}`} {...props} />;
}

function Label({
  className = "",
  ...props
}: ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label className={`block text-sm mb-1 ${className}`} {...props} />
  );
}

function Error({
  className = "",
  ...props
}: ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error
      className={`text-red-500 text-sm mt-1 ${className}`}
      {...props}
    />
  );
}

function Description({
  className = "",
  ...props
}: ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      className={`text-neutral-400 text-sm mt-1 ${className}`}
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
