import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Baby, User, Users, UserPlus, HeartHandshake, Activity, Stethoscope, Bed, Wind, Cloud, Gauge, Zap, Layers, Cylinder, Monitor, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const services = [
  {
    title: "Elder Care at Home",
    desc: "Professional elderly care services including daily support, mobility assistance, and companionship.",
    icon: User,
  },
  {
    title: "Nursing Care",
    desc: "Trained nurses for patient care at home including injections, dressing, post-surgery care, and monitoring.",
    icon: HeartPulse,
  },
  {
    title: "Newborn & Baby Care",
    desc: "Experienced caregivers for newborn and baby care at home with safe and hygienic support.",
    icon: Baby,
  },
  {
    title: "Physiotherapist",
    desc: "Expert physiotherapy sessions at home for pain relief, post-surgery recovery, and mobility improvement.",
    icon: Activity,
  },
  {
    title: "Nursing Staff (Male/Female)",
    desc: "Qualified nurses providing 24/7 medical care, injections, wound dressing, and patient monitoring at home.",
    icon: UserPlus,
  },
  {
    title: "Attendant",
    desc: "Trained attendants for daily patient support including hygiene, feeding, mobility assistance, and companionship.",
    icon: Users,
  },
  {
    title: "GDA Staff (Male/Female)",
    desc: "Certified General Duty Assistants offering professional bedside care and support for patient recovery.",
    icon: HeartHandshake,
  },
  {
    title: "Baby Care",
    desc: "Experienced caregivers for newborns and infants, ensuring safe handling, hygiene, and proper care at home.",
    icon: Baby,
  },
  {
    title: "Doctor Visit at Home",
    desc: "Professional doctor consultations at home for routine checkups, diagnosis, and treatment guidance.",
    icon: Stethoscope,
  },
  {
    title: "Patient Bed",
    desc: "Comfortable and adjustable patient beds available on rent for better home care support.",
    icon: Bed,
  },
  {
    title: "Suction Machine",
    desc: "Reliable suction machines for clearing airway secretions and maintaining respiratory health.",
    icon: Wind,
  },
  {
    title: "Nebulizer Machine",
    desc: "Effective nebulizer machines for respiratory treatments and breathing support at home.",
    icon: Cloud,
  },
  {
    title: "Pulse Oximeter",
    desc: "Accurate oxygen level monitoring devices for real-time health tracking.",
    icon: Gauge,
  },
  {
    title: "DVT Pump",
    desc: "Advanced DVT pumps to improve blood circulation and prevent clot formation in patients.",
    icon: Zap,
  },
  {
    title: "Air Bed",
    desc: "Anti-bedsore air mattresses designed for long-term patients to ensure comfort and safety.",
    icon: Layers,
  },
  {
    title: "Oxygen Concentrator",
    desc: "High-quality oxygen concentrators for continuous oxygen supply at home.",
    icon: Wind,
  },
  {
    title: "Oxygen Cylinder",
    desc: "Portable oxygen cylinders for emergency and backup respiratory support.",
    icon: Cylinder,
  },
  {
    title: "Patient Monitor",
    desc: "Advanced patient monitoring systems to track vital signs like heart rate, BP, and oxygen levels.",
    icon: Monitor,
  },
  {
    title: "Medication Delivery",
    desc: "Free home delivery of medicines ensuring timely and hassle-free access to essential medications.",
    icon: Truck,
  },

];

export default function Services() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <section className="py-9 px-6 md:px-16 bg-[#f7f9f9] dark:bg-gray-900">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-teal-600 font-semibold text-sm tracking-wide">
          SPECIALIZED CARE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
          Our Home Care Services
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Professional patient care, elderly care, and nursing services at home with trained caregivers.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.slice(0,4).map((item, i) => {
          const Icon = item.icon;
          return (
              <Card
              key={i}
                className="group rounded-3xl p-6 bg-white dark:bg-gray-800 
                shadow-md hover:shadow-xl transition duration-300 border-0"
              >
                <CardContent className="p-0">

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center 
                    rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition">
                    <Icon size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
          );
        })}
      </div>
      <Button
          onClick={() => setIsOpen(true)}
          className="bg-teal-500 text-white px-6 py-2 mt-4 rounded-full"
        >
          Show More Services
        </Button>
    </section>
    {isOpen && 
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={()=>setIsOpen(false)}
    >
      <div
       className="bg-white w-full max-w-4xl p-6 max-h-96 rounded-xl relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
        className="absolute top-4 right-4 text-black"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Our Services
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
{ services.map((item, i) => {
          const Icon = item.icon;
          return (
            <div className="flex text-black rounded-full border mb-2 p-2 gap-2 hover:bg-teal-400 hover:text-white focus:bg-teal-400">
              <div> <Icon/> </div>
              <h1>{item.title}</h1>
            </div>
          )
        })}
          </div>
          
     
       
       
      </div>
    </div>
    }
    </>
  );
}