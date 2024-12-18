import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(
  props: {
    varient: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, className, varient, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "uppercase rounded-xl h-11 px-6 inline-flex items-center justify-center gap-2",
        varient === "primary" && "bg-orange-600 text-white",
        varient === "secondary" && "border-2 border-orange-600 text-black",
        varient === "text" && "px-0  border-transparent",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
}
