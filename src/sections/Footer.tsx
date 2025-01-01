import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const footerLinks = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rahman-khattak/",
      icon: <FaLinkedin />,
    },
    {
      title: "GitHub",
      link: "https://github.com/Rahmankhattak711?tab=repositories",
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className="text-black py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-stone-400 pb-6">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold">Alex Taylor</span>
          </div>

          <nav className="flex space-x-6">
            {footerLinks.map(({ link, title, icon }) => (
              <a
                href={link}
                key={title}
                className="flex items-center gap-2 hover:text-gray-400 transition"
              >
                {icon}
                <span>{title}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400">&copy; 2024 Your Brand. All rights reserved.</div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
