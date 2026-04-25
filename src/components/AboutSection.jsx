import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import nurseImg from "../assets/nurse.webp";
import tabletImg from "../assets/tablet.webp";
export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#f7f9f9] dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT SIDE ================= */}
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={nurseImg}
                alt="Home nursing services in Gwalior by trained nurse"
                className="w-full h-70 object-cover rounded-3xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-teal-700 text-white rounded-3xl p-6 flex items-center justify-center h-30"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm">Years of Experience</p>
              </div>
            </motion.div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 mt-10">
            {/* 100% CARD */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-teal-200 rounded-3xl p-6 flex items-center justify-center h-30"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-teal-800">100%</h3>
                <p className="text-sm text-teal-700">Safety Protocol</p>
              </div>
            </motion.div>
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={tabletImg}
                alt="Healthcare monitoring and patient care services"
                className="w-full h-70 object-cover rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-teal-600 font-semibold mb-2">OUR APPROACH</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
           About Jeevan Nursing Home Care Services
          </h2>
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">Trusted Home Nursing Services in Gwalior & Delhi with Experienced Caregivers</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
          Jeevan Nursing Home Care services provides professional home nursing services in Gwalior and Delhi, delivering quality patient care at home with trained nurses and caregivers.
<br />
We offer elderly care, post-surgery care, and daily medical assistance, focusing on safety, hygiene, and personalized support for every patient.
          </p>
          {/* POINTS */}
          <div className="mt-6 space-y-3">
            {[
              "Experienced and trained nursing staff",
              "24/7 patient care support",
              "Home care services in Gwalior & Delhi",
              "Personalized care plans for every patient",
              "Quick response and reliable service"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-teal-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          {/* BUTTON */}
          {/* <button  className="mt-6 bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            Learn More About Us
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
