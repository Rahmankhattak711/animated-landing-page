"use client";
import { useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import TestimonialSection from "@/components/Testimonials";
import Button from "@/components/Button";

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

const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [testimonialIndex, setTextimonialIndex] = useState(0);

  const handleClickPrve = () => {
    setTextimonialIndex((prev) => {
      if (prev === 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const handleClickNext = () => {
    setTextimonialIndex((prev) => {
      if (prev === testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  return (
    <section className="py-24 md:py-32 lg:py-40" id="testimonials">
      <h2
        ref={titleRef}
        className="flex flex-col text-4xl md:text-7xl lg:text-8xl overflow-hidden"
      >
        <motion.span
          style={{ x: transformBottom }}
          className="whitespace-nowrap"
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          style={{ x: transformTop }}
          className="whitespace-nowrap self-end text-orange-600"
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 lg:mt-14">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <TestimonialSection
                    key={name}
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image }
                    imagePositionY={imagePositionY}
                  />
                )
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mt-6 lg:mt-10">
          <Button
            varient="none"
            iconAfter={
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
            }
            onClick={handleClickPrve}
          ></Button>
          <Button
            varient="none"
            iconAfter={
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
            }
            onClick={handleClickNext}
            className=" "
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
