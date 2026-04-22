import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Assessment",
    desc: "We conduct a thorough home visit to understand your medical and lifestyle requirements.",
  },
  {
    number: "02",
    title: "Custom Care Plan",
    desc: "Our clinical directors craft a bespoke roadmap including staffing and schedules.",
  },
  {
    number: "03",
    title: "Care Begins",
    desc: "Our team arrives, and continuous digital monitoring ensures everything stays on track.",
  },
];

// 🔥 container animation (stagger)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🔥 item animation
const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Process() {
  return (
    <section className="px-6 md:px-16 bg-[#f7f9f9] dark:bg-gray-900 py-10">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-9"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Seamless Process
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Simple steps to bring elite clinical care into your home.
          </p>
        </div>

        <div className="flex items-center gap-2 text-teal-600 mt-4 md:mt-0 cursor-pointer">
          How it works <ArrowDown size={16} />
        </div>
      </motion.div>

      {/* STEPS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative grid md:grid-cols-3 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700"
      >
        {/* vertical dividers */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-200 dark:bg-gray-700" />
        <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-gray-200 dark:bg-gray-700" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={item}
            className="p-8 md:p-10 bg-white dark:bg-gray-800 group"
          >
            {/* NUMBER */}
            <div className="text-6xl font-bold text-teal-400 md:text-gray-400 dark:text-teal-600 md:dark:text-gray-600 md:dark:group-hover:text-teal-600 md:group-hover:text-teal-400 transition">
              {step.number}
            </div>

            {/* TITLE */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {step.title}
            </h3>

            {/* DESC */}
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {step.desc}
            </p>

            {/* HOVER LINE */}
            <div className="mt-6 h-1 w-0 bg-teal-500 group-hover:w-10 transition-all duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}