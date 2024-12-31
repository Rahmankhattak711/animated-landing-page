export const Footer = () => {
  const footerlinks = [
    {
      title: "LinkDin",
      link: "#",
    },
    {
      title: "Whatsapp",
      link: "#",
    },
  ];
  return (
    <footer className="[mask-image:radial-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <div className="container">
        <div className="flex justify-between md:flex-row flex-col-reverse items-center border-t-2 border-white/70 py-4">
          <div>$copy; 2024. All rights reserved.</div>
          <nav className="flex gap-4">
            {footerlinks.map(({ link, title }) => (
              <a href={link} key={link} className="flex items-center gap-2">
                <span>{title}</span>
                <span>
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
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
