import { motion, AnimatePresence } from "framer-motion";
import { X, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "../assets/logo.webp";

export default function MobileSidebar({ open, setOpen }) {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "howitworks", label: "How It Works" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(()=>{
    if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  },[open])
  useEffect(() => {
    const handleScroll = () => {
      let current="";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
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
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 left-0 w-full h-[90vh] z-50 
            bg-white dark:bg-gray-900 rounded-b-3xl p-6 flex flex-col"
          >

            {/* TOP */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col">
                        <img src={logoImg} alt="logo" className="w-9 h-9 rounded-full" />
                        <p className="text-[15px]">Jeevan Nursing HomeCare</p>
                      </div>

              <div className="flex items-center gap-3">
                <X onClick={() => setOpen(false)} className="cursor-pointer" />
              </div>
            </div>

            <hr className="mb-6" />

            {/* LINKS */}
            <div className="flex flex-col gap-3 flex-1">
              {links.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActive(item.id);
                    setOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl transition ${
                    active === item.id
                      ? "bg-teal-100 text-teal-600 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}