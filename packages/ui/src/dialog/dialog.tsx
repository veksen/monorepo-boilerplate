import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { type ComponentProps } from "react";
import { cn } from "../utils.js";

type TriggerProps = ComponentProps<typeof BaseDialog.Trigger>;
type BackdropProps = ComponentProps<typeof BaseDialog.Backdrop>;
type PopupProps = ComponentProps<typeof BaseDialog.Popup>;
type TitleProps = ComponentProps<typeof BaseDialog.Title>;
type DescriptionProps = ComponentProps<typeof BaseDialog.Description>;
type CloseProps = ComponentProps<typeof BaseDialog.Close>;

function Trigger({ className = "", ...props }: TriggerProps) {
  return (
    <BaseDialog.Trigger
      className={cn(
        "cursor-pointer rounded-lg border border-transparent bg-neutral-800 px-5 py-4 text-base font-medium transition-colors hover:border-purple-500",
        className,
      )}
      {...props}
    />
  );
}

function Backdrop({ className = "", ...props }: BackdropProps) {
  return (
    <BaseDialog.Backdrop
      className={cn("fixed inset-0 bg-black/50", className)}
      {...props}
    />
  );
}

function Popup({ className = "", ...props }: PopupProps) {
  return (
    <BaseDialog.Popup
      className={cn(
        "fixed top-1/2 left-1/2 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-neutral-900 p-6 shadow-xl",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className = "", ...props }: TitleProps) {
  return (
    <BaseDialog.Title
      className={cn("mb-4 text-xl font-semibold", className)}
      {...props}
    />
  );
}

function Description({ className = "", ...props }: DescriptionProps) {
  return (
    <BaseDialog.Description
      className={cn("mb-4 text-neutral-400", className)}
      {...props}
    />
  );
}

function Close({ className = "", ...props }: CloseProps) {
  return (
    <BaseDialog.Close
      className={cn(
        "rounded-lg bg-purple-600 px-4 py-2 transition-colors hover:bg-purple-700",
        className,
      )}
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
