import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import logoImg from "../assets/logo.webp";

export function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "howitworks", label: "How It Works" }, // ✅ FIXED
    { id: "contact", label: "Contact" },
  ];

  // 🔥 SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      let current="";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hidden md:flex fixed top-0 left-0 w-full z-50 
      justify-between items-center px-10 py-4
      backdrop-blur-lg bg-white/70 dark:bg-gray-900/70"
    >
      {/* LOGO */}
      <a href="#home">
        <div className="flex items-center gap-2">
        <img
          src={logoImg}
          alt="logo"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="font-bold text-xl text-teal-500">
          Jeevan nursing HomeCare
        </h1>
      </div>
      </a>

      {/* LINKS */}
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`relative transition ${
              active === link.id
                ? "text-teal-500 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-teal-500"
            }`}
          >
            {link.label}
            {/* 🔥 underline indicator */}
            {active === link.id && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-500 rounded"></span>
            )}
          </a>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <div className="bg-teal-500 text-white rounded-full px-5">
          <a href="#book">Book Now</a>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
