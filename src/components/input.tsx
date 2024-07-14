import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className, disabled, ...props }: inputProps) {
  return (
    <input
      className={cn(
        `block w-full rounded-md border border-rose-400 p-3 outline-none`,
        disabled && "cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}
