import {
  Home,
  BriefcaseMedical,
  Phone,
  BookOpenText,
} from "lucide-react";
import { useEffect, useState } from "react";

export function MobileTab() {
  const [active, setActive] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home, link: "#home" },
    { id: "services", label: "Services", icon: BriefcaseMedical, link: "#services" },
    { id: "contact", label: "Contact", icon: Phone, link: "#contact" },
    { id: "book", label: "Book", icon: BookOpenText, link: "#book" },
  ];

  // 🔥 SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      let current;

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            current = tab.id;
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
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md 
      bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg 
      shadow-xl rounded-2xl flex justify-around py-3 z-50 md:hidden border"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <a
            key={tab.id}
            href={tab.link}
            onClick={() => setActive(tab.id)}
            className={`flex flex-col items-center text-xs transition ${
              active === tab.id
                ? "text-teal-500"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <Icon
              size={22}
              className={`mb-1 transition ${
                active === tab.id ? "scale-110" : ""
              }`}
            />
            {tab.label}
          </a>
        );
      })}
    </div>
  );
}