import { FC } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const Hero: FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full ">
            <h1 className="text-5xl mt-40 md:mt-0 md:text-6xl lg:text-7xl">
              Crafting digital experiences through code and creative design
            </h1>
            <div className="flex items-start flex-col md:flex-row mt-10 gap-4">
              <Button
                varient="secondary"
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
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                }
              >
                view my work
              </Button>
              <Button varient="text">let&apos;s talk</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className=" mt-[4.5rem] md:mt-0 md:h-full">
            <Image src={heroImage} alt="hero image" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
