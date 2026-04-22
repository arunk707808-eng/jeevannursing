import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import FloatingCard from "./FloatingCard";
import { useEffect, useState } from "react";
import heroImg from "../assets/heroImage.webp";

const branches = [
  { name: "Gwalior", phone: "+919876543210" },
  { name: "Delhi", phone: "+911234567890" }
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)
   const [selectedBranch, setSelectedBranch] = useState(branches[0]);
   useEffect(()=>{
     if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
   },[isOpen])

  return (
    <>
    <section className="min-h-screen flex items-center bg-[#f7f9f9] dark:bg-gray-900 px-6 md:px-16 pt-16 md:pt-0">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-teal-100 text-teal-600 px-4 py-1 mt-4 rounded-full">
            Excellence in Home Healthcare
          </Badge>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Best Home <span className="text-teal-500">Care</span> Services.
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg">
            Reimagining the clinical experience within the comfort of your
            sanctuary. We bring elite medical precision and heartfelt warmth to
            your doorstep.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 py-3 shadow-lg">
              <a href="#book">
                Book Now →
              </a>
            </Button>
              <Button onClick={()=>setIsOpen(true)}
                variant="secondary"
                className="rounded-full px-6 py-3 flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </Button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={heroImg}
            alt="heroPage"
            className="rounded-[30px] shadow-xl w-full h-125 object-cover"
          />
          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-6"
          >
            <FloatingCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
    {/* modal */}
    {isOpen && 
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={()=>setIsOpen(false)}
    >
      <div
        className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-2xl animate-[fadeIn_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Select Branch 📍
        </h2>
        {/* Branch Select */}
        <div className="space-y-2 mb-5">
          {branches.map((branch, i) => (
            <div
              key={i}
              onClick={() => setSelectedBranch(branch)}
              className={`p-3 rounded-xl border cursor-pointer transition ${
                selectedBranch.name === branch.name
                  ? "bg-teal-500 text-white border-teal-500"
                  : "hover:bg-teal-50 border-gray-200"
              }`}
            >
              {branch.name}
            </div>
          ))}
        </div>

        {/* Call Button */}
        <a href={`tel:${selectedBranch.phone}`}>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-medium transition">
            Confirm Call 
          </button>
        </a>

        {/* Close */}
        <button
          onClick={()=>setIsOpen(false)}
          className="mt-3 w-full text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
    }
   
</>
  );
}
