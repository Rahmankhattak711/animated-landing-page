"use client";
import { useAnimate,  useInView,stagger } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  },[scope]);

  useEffect(() => {
    if (inView) {
     animate(
      scope.current.querySelectorAll(".word"),
      {
        transform : "translateY(0%)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
     )
    }
     
  },[inView,animate,scope]);
  return (
    <section
      ref={scope}
      className="py-24 mt-12 md:py-32 md:mt-16 lg:py-40 lg:mt-20"
      id="intro"
    >
      <div className="container ">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
