import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Send } from "lucide-react";
import { MdEmail } from "react-icons/md";
import logoImg from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 px-6 md:px-16 pt-10 pb-8">
      {/* TOP GRID */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
        {/* BRAND */}
        <div>
          <a href="#home">
 <div className="flex items-center gap-2">
        <img src={logoImg} alt="logo" className="w-12 h-12 rounded-full"/>
<h1 className="font-bold text-xl text-teal-600">Jeevan nursing HomeCare</h1>
      </div>
          </a>
          <p className="mt-4 text-gray-300 text-sm">
            Jeevan Nursing Home Care Services provides professional home nursing services in Gwalior and Delhi including patient care, elderly care, and 24/7 support at home.
          </p>

          <div className="flex gap-3 mt-6">
             
            <a className="hover:text-teal-500" href=""><FaFacebookF size={20}/> </a>
            <a className="hover:text-teal-500" href=""><FaWhatsapp size={20}/></a>
            <a className="hover:text-teal-500" href=""><FaInstagram size={20}/></a>
          
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold md:text-2xl text-white mb-4">
            Quick Links
          </h3>
          <ul className=" md:text-lg space-y-2 text-gray-300 text-sm">
            <li className="hover:text-teal-500 cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#about">About Us</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#services">Services</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#contact">Contact</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#book">Book Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold md:text-2xl text-white mb-4">
            Services
          </h3>
          <ul className=" md:text-lg space-y-2 text-gray-300 text-sm">
            <li className="hover:text-teal-500 cursor-pointer"><a href="#services">Home Nursing Care</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#services">Patient Care at Home</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#services">Elderly Care</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#services">Post Surgery Care</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="#services">Newborn/Baby Care</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold md:text-2xl text-white mb-4">
            Locations
          </h3>
          <ul className=" md:text-lg space-y-2 text-gray-300 text-sm">
            <li className="hover:text-teal-500 cursor-pointer"><a href="">Gwalior, Madhya Pradesh</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a href="">Delhi, India</a></li>
          </ul>
        </div>
        {/* COMPANY */}
        <div>
          <h3 className="font-semibold text-white mb-4 md:text-2xl">
            Contact Information
          </h3>
          <ul className="md:text-lg space-y-2 text-gray-300 text-sm">
            <li className="hover:text-teal-500 cursor-pointer"><a className="flex gap-2" href=""><span><Phone/></span>+91 5555555555</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a className="flex gap-2" href=""><span><Phone/></span>+91 5555555555</a></li>
            <li className="hover:text-teal-500 cursor-pointer"><a className="flex gap-2" href=""><span><MdEmail size={30}/></span>example@gmial.com</a></li>
             <li className="hover:text-teal-500 cursor-pointer"><a className="flex gap-2" href=""><span><MdEmail size={30}/></span>example@gmial.com</a></li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Jeevan Nursing Home Care Services. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-teal-500 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-teal-500 cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-teal-500 cursor-pointer">
            Accessibility
          </span>
        </div>
      </div>
    </footer>
  );
}
