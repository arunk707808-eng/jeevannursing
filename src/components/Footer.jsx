import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Send } from "lucide-react";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900  dark:bg-gray-900 px-6 md:px-16 pt-10 pb-8">
      {/* TOP GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
        <img src="..\src\assets\logo.png" alt="" className="w-12 h-12 rounded-full"/>
<h1 className="font-bold text-xl text-teal-600">Jeevan nursing HomeCare</h1>
      </div>

          <p className="mt-4 text-gray-300 text-sm">
            Premium homecare reimagined through medical precision and heartfelt
            human connection.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow hover:bg-teal-500 hover:text-white transition cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold md:text-2xl text-white mb-4">
            Quick Links
          </h3>
          <ul className=" md:text-lg space-y-2 text-gray-300 text-sm">
            <li className="hover:text-teal-500 cursor-pointer"><a href="#about">About Us</a></li>
            <li className="hover:text-teal-500 cursor-pointer">
             <a href="#services">Our Services</a> 
            </li>
            <li className="hover:text-teal-500 cursor-pointer">
             <a href="#testimonials">Feedbacks</a> 
            </li>
            <li className="hover:text-teal-500 cursor-pointer">
             <a href="#contact">Contact Us</a> 
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold text-white mb-4 md:text-2xl">
            Contact Information
          </h3>
          <ul className="md:text-lg space-y-2 text-gray-300 text-sm">
            <li className="hover:text-teal-500 cursor-pointer flex gap-2"><span><Phone/></span> Phone- +91 8305295810</li>
            <li className="hover:text-teal-500 cursor-pointer flex gap-2"><span><MdEmail size={30}/></span> Email- arunk@gmial.com</li>
            <li className="hover:text-teal-500 cursor-pointer flex gap-2"><span><MapPin size={30}/></span> <span>Address- 55Q6+29W, Amkhoh, Gwalior, Madhya Pradesh 474001, India</span> </li>
            
          </ul>
        </div>

        {/* NEWSLETTER */}
        {/* <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Newsletter
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Stay updated with health insights and sanctuary updates.
          </p>

          <div className="flex items-center bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 flex items-center justify-center">
              <Send size={16} />
            </button>
          </div>
        </div> */}
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 The Clinical Sanctuary. Premium Homecare Reimagined.</p>

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
