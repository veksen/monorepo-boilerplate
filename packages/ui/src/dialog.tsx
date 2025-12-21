import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { type ComponentProps } from "react";

type TriggerProps = ComponentProps<typeof BaseDialog.Trigger>;
type BackdropProps = ComponentProps<typeof BaseDialog.Backdrop>;
type PopupProps = ComponentProps<typeof BaseDialog.Popup>;
type TitleProps = ComponentProps<typeof BaseDialog.Title>;
type DescriptionProps = ComponentProps<typeof BaseDialog.Description>;
type CloseProps = ComponentProps<typeof BaseDialog.Close>;

function Trigger({ className = "", ...props }: TriggerProps) {
  return (
    <BaseDialog.Trigger
      className={`rounded-lg border border-transparent px-5 py-4 text-base font-medium bg-neutral-800 cursor-pointer transition-colors hover:border-purple-500 ${className}`}
      {...props}
    />
  );
}

function Backdrop({ className = "", ...props }: BackdropProps) {
  return (
    <BaseDialog.Backdrop
      className={`fixed inset-0 bg-black/50 ${className}`}
      {...props}
    />
  );
}

function Popup({ className = "", ...props }: PopupProps) {
  return (
    <BaseDialog.Popup
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 p-6 rounded-lg shadow-xl min-w-80 ${className}`}
      {...props}
    />
  );
}

function Title({ className = "", ...props }: TitleProps) {
  return (
    <BaseDialog.Title
      className={`text-xl font-semibold mb-4 ${className}`}
      {...props}
    />
  );
}

function Description({ className = "", ...props }: DescriptionProps) {
  return (
    <BaseDialog.Description
      className={`text-neutral-400 mb-4 ${className}`}
      {...props}
    />
  );
}

function Close({ className = "", ...props }: CloseProps) {
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
