import { ButtonHTMLAttributes, ReactNode } from "react";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...props }: buttonProps) {
  return (
    <button
      type="submit"
      className="m-auto mt-6 block w-full rounded-md bg-rose-400 py-3 font-semibold text-white transition-colors hover:bg-rose-500"
      {...props}
    >
      {children}
    </button>
  );
}
