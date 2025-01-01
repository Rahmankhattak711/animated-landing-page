import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TestimonialsProps {
  name: string;
  image: React.ComponentProps<typeof Image>["src"];
  imagePositionY: number;
  quote: string;
  role: string;
  company: string;
  className?: string;
}

export default function TestimonialSection({
  name,
  image,
  imagePositionY,
  quote,
  role,
  company,
  className,
  ...props
}: TestimonialsProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      key={name}
      className={twMerge(
        "grid lg:items-center md:grid-cols-5 md:gap-8 lg:gap-16",
        className
      )}
    >
      <div className="aspect-square lg:mt-4 md:aspect-[9/16] md:col-span-2">
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div className="mt-8 text-3xl md:text-5xl lg:text-6xl">
          {" "}
          &ldquo;{quote}&rdquo;
        </div>
        <cite className="mt-4 md:mt-8 lg:text-xl not-italic block">
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
}
