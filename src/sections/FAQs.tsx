"use client";
import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 lg:py-40" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className="border-t last:border-b border-stone-400  py-6 md:py-8 lg:py-10  relative group/faq isolate"
              onClick={() => {
                if (index === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
            >
              <div className={twMerge("absolute bottom-0 left-0 -z-10 w-full h-0 bg-stone-300 group-hover/faq:h-full after:h-full transition-all duration-500", index === selectedIndex && "h-full ")}></div>
              <div className="flex justify-between items-center">
                <div className="text-2xl md:text-3xl lg:text-4xl ">
                  {question}
                </div>
                <div className="size-11 inline-flex items-center justify-center border-2 border-stone-400 rounded-full shrink-0">
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>

              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
