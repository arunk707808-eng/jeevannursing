import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { MapPin } from "lucide-react";
import Contact from "./Contact";

export default function FAQSection() {
  return (
    <section
      className="py-10 px-6 md:px-16 bg-[#f7f9f9] dark:bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Do you provide home nursing services in Delhi?",
                a: "Yes, we provide professional home nursing and patient care services in Delhi with trained and experienced caregivers.",
              },
              {
                q: "What services are included in patient care at home?",
                a: "Our patient care services include daily assistance, medication support, mobility help, hygiene care, and monitoring for better recovery at home.",
              },
              {
                q: "Do you offer 24/7 support?",
                a: "Yes, our care team is available 24/7 for emergencies and assistance.",
              },
              {
                q: "How can I book a home nursing service?",
                a: "You can book our services by calling us or contacting us on WhatsApp for quick assistance and support.",
              },
              {
                q: "Do you provide home nursing services in Gwalior?",
                a: "Yes, we provide professional home nursing and patient care services in Gwalior with trained and experienced caregivers.",
              },
              {
                q: "What are home nursing services?",
                a: "Home nursing services provide medical and non-medical care at home, including patient care, elderly care, post-surgery support, and daily assistance by trained nurses and caregivers.",
              },
            ].map((item, i) => (
                <AccordionItem
                key={i}
                  value={`item-${i}`}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl px-4 shadow hover:shadow-lg transition"
                >
                  <AccordionTrigger className="text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <div id="contact"
            className="mt-6 bg-linear-to-r from-teal-600 to-teal-500 text-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div>
                <h3 className="text-lg font-semibold">Branch 1-</h3>
                <p className="text-md mt-1 opacity-90 flex gap-2 items-center ">
                  <span>
                    <Phone />
                  </span>
                  <span className="font-semibold">Phone-</span> +91 11111111111
                </p>
                <p className="text-md mt-1 opacity-90 flex gap-2 items-center">
                  <span>
                    <MdEmail size={30} />
                  </span>
                  <span className="font-semibold">Email-</span> example@gmial.com
                </p>
                <p className="text-md mt-1 opacity-90 flex gap-2 items-center">
                  <span>
                    <MapPin size={30} />
                  </span>
                  <span>
                    <span className="font-semibold">Address-</span> 55Q6+29W,
                    Amkhoh, Gwalior, Madhya Pradesh 474001, India
                  </span>
                </p>
                <p className="text-md font-bold mt-3 tracking-wide"></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Branch 2-</h3>
                <p className="text-md mt-1 opacity-90 flex gap-2 items-center ">
                  <span>
                    <Phone />
                  </span>
                  <span className="font-semibold">Phone-</span> +91 2222222222
                </p>
                <p className="text-md mt-1 opacity-90 flex gap-2 items-center">
                  <span>
                    <MdEmail size={30} />
                  </span>
                  <span className="font-semibold">Email-</span> example@gmial.com
                </p>
                <p className="text-md mt-1 opacity-90 flex gap-2 items-center">
                  <span>
                    <MapPin size={30} />
                  </span>
                  <span>
                    <span className="font-semibold">Address-</span> 55Q6+29W,
                    Amkhoh, Gwalior, Madhya Pradesh 474001, India
                  </span>
                </p>
                <p className="text-md font-bold mt-3 tracking-wide"></p>
              </div>
            </div>
          </div>
          </div>
        <section id="book">
          <Contact />
        </section>
      </div>
    </section>
  );
}
