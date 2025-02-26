import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  className,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
