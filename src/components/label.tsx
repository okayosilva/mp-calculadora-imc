import { LabelHTMLAttributes, ReactNode } from "react";

type labelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export function Label({ children, ...props }: labelProps) {
  return (
    <label className="block text-neutral-600" {...props}>
      {children}
    </label>
  );
}
