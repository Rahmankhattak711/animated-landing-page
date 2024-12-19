import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const testimonialIndex = 0;
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <h2 className="flex flex-col text-4xl md:text-7xl lg:text-8xl overflow-hidden">
        <span className="whitespace-nowrap">
          Some nice words from my past clients
        </span>
        <span className="whitespace-nowrap self-end text-orange-600">
          Some nice words from my past clients
        </span>
      </h2>
      <div className="container">
        <div className="mt-20 lg:mt-14">
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }, index) =>
              index === testimonialIndex && (
                <div
                  key={name}
                  className="grid lg:items-center md:grid-cols-5 md:gap-8 lg:gap-16"
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
              )
          )}
        </div>

        <div className="flex gap-4 mt-6 lg:mt-10">
          <button className="inline-flex items-center justify-center size-11 rounded-full border border-stone-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center size-11 rounded-full border border-stone-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
