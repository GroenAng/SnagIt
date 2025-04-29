import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "ghost" | "default";
  className?: string;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  className,
  asChild = false,
}) => {
  const Component = asChild ? "div" : "button";

  return (
    <Component
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded",
        variant === "ghost" && "bg-transparent text-gray-700",
        variant === "default" && "bg-blue-500 text-white",
        className
      )}
    >
      {children}
    </Component>
  );
};