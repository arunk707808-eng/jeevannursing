import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./MobileSidebar";
import logoImg from "../assets/logo.webp";

export default function MobileHeader() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scroll down → hide
        setShow(false);
      } else {
        // scroll up → show
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
    <div
      className={`md:hidden fixed top-0 left-0 w-full z-50 
      transition-transform duration-300 
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center px-5 py-3 
        backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 
        border-b border-gray-200 dark:border-gray-800">

        {/* LOGO */}
        <div className="flex flex-col">
          <img src={logoImg} alt="logo" className="w-7 h-7 rounded-full" />
          <p className="text-[12px]">Jeevan Nursing HomeCare</p>
        </div>
        

        {/* MENU ICON */}
        <div className="flex gap-2 items-center">
          <ModeToggle size={22} />
         <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
        </div>
        

      </div>
    </div>
     <MobileSidebar open={open} setOpen={setOpen} />
    </>

    
  );
}