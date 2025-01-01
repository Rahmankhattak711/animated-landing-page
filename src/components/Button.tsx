import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(
  props: {
    varient: "primary" | "secondary" | "text" |"none";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, className, varient, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "uppercase rounded-xl h-11 px-6 inline-flex items-center  gap-2 transition duration-500 relative",
        varient === "primary" && "bg-orange-600 text-white",
        varient === "secondary" &&
          "border-2 border-orange-600 text-black hover:bg-orange-600 hover:text-white",
        varient === "text" &&
          "px-0  border-transparent after:transition-all  after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-orange-500 after:hover:w-full",
          varient === "none" && "inline-flex items-center justify-center size-11 rounded-full border border-stone-500",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span >{iconAfter}</span>}
    </button>
  );
}
