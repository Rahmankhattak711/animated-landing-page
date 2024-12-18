import { FC } from "react";
import Bars from "@/assets/icons/bars.svg";
import Link from "next/link";
import Button from "@/components/Button";

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

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container max-w-full">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link href="/">
              <span className="text-xl uppercase font-bold">
                Alex&nbsp; Taylor
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center size-11 border-2 bg-stone-200 border-stone-400 rounded-full">
              <Bars />
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
