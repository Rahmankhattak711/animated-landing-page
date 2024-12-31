"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScop, topLineAnimate] = useAnimate();
  const [bottomLineScop, bottomLineAnimate] = useAnimate();
  const [navScop, navAnimate] = useAnimate();

  const navItems = [
    {
      label: "About",
      href: "#intro",
    },
    {
      label: "Selected Works",
      href: "#projects",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQs",
      href: "#faqs",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScop.current,
          {
            rotate: 45,
          },
        ],
        [
          topLineScop.current,
          {
            translateY: 4,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScop.current,
          {
            rotate: -45,
          },
        ],
        [
          bottomLineScop.current,
          {
            translateY: -4,
          },
        ],
      ]);

      navAnimate(
        navScop.current,
        {
          height: "100%",
        },
        {
          duration: 0.5,
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScop.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScop.current,
          {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScop.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScop.current,
          {
            translateY: 0,
          },
        ],
      ]);

      navAnimate(
        navScop.current,
        {
          height: 0,
        },
        {
          duration: 0.5,
        }
      );
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScop,
    bottomLineAnimate,
    bottomLineScop,
    navAnimate,
    navScop,
  ]);

  const handleHeaderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href)
    const hash = url.hash;  
    const target = document.querySelector(hash);
    if (!target) return ;
    target.scrollIntoView({ behavior : "smooth" }); 
  };

  return (
    <header >
      <div
        ref={navScop}
        className="fixed z-10 top-0 left-0 w-full h-0 overflow-hidden bg-stone-900"
      >
        <nav className="mt-20 flex flex-col ">
          {navItems.map(({ href, label }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 py-8 border-t last:border-b border-stone-800 group/nav-item"
              onClick={handleHeaderClick}
            >
              <div className="container !max-w-full flex items-center justify-between ">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>

      <div className="container max-w-full fixed top-0 left-0 w-full backdrop-blur-md z-10">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link href="/">
              <span className="text-xl uppercase font-bold mix-blend-difference">
                Alex&nbsp; Taylor
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center size-11 border-2 bg-stone-200 border-stone-400 rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={topLineScop}
                  style={{
                    // transform: "translateY(4px) rotate(45deg)",
                    transformOrigin: "12px 8px",
                  }}
                />
                <motion.rect
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  ref={bottomLineScop}
                  fill="currentColor"
                  style={{
                    // transform: "translateY(-4px) rotate(-45deg)",
                    transformOrigin: "12px 16px",
                  }}
                />
              </svg>
            </div>
            <Button varient="primary" className="hidden md:inline-flex">
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
