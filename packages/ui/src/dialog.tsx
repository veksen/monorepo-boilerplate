import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { type ComponentProps } from "react";

function Trigger({
  className = "",
  ...props
}: ComponentProps<typeof BaseDialog.Trigger>) {
  return (
    <BaseDialog.Trigger
      className={`rounded-lg border border-transparent px-5 py-4 text-base font-medium bg-neutral-800 cursor-pointer transition-colors hover:border-purple-500 ${className}`}
      {...props}
    />
  );
}

function Backdrop({
  className = "",
  ...props
}: ComponentProps<typeof BaseDialog.Backdrop>) {
  return (
    <BaseDialog.Backdrop
      className={`fixed inset-0 bg-black/50 ${className}`}
      {...props}
    />
  );
}

function Popup({
  className = "",
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Popup
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 p-6 rounded-lg shadow-xl min-w-80 ${className}`}
      {...props}
    />
  );
}

function Title({
  className = "",
  ...props
}: ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={`text-xl font-semibold mb-4 ${className}`}
      {...props}
    />
  );
}

function Description({
  className = "",
  ...props
}: ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      className={`text-neutral-400 mb-4 ${className}`}
      {...props}
    />
  );
}

function Close({
  className = "",
  ...props
}: ComponentProps<typeof BaseDialog.Close>) {
  return (
    <BaseDialog.Close
      className={`rounded-lg px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors ${className}`}
      {...props}
    />
  );
}

export const Dialog = {
  Root: BaseDialog.Root,
  Trigger,
  Portal: BaseDialog.Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
};
