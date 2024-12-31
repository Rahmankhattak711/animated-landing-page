"use client";
import { FC, useEffect, useRef } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import {
  motion,
  useAnimate,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import SplitType from "split-type";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const protrateWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      }
    );
  }, [titleAnimate, titleScope]);
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full ">
            <motion.h1
              ref={titleScope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl mt-40 md:mt-0 md:text-6xl lg:text-7xl"
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex items-start flex-col md:flex-row mt-10 gap-4">
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                }}
              >
                <Button
                  varient="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="w-10 h-5 flex group-hover/button:-translate-x-1/2 transition-transform duration-300">
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
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
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
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  view my work
                </Button>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.4,
                }}
              >
                <Button varient="text">let&apos;s talk</Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5  relative">
          <motion.div
            className=" mt-[4.5rem] md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{
              width: protrateWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="hero image"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div ref={scrollingDiv} className="md:h-[200vh]"></div>
    </section>
  );
};

export default Hero;
