import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HeartPulse, Baby, User } from "lucide-react";

const services = [
  {
    title: "Elder Care",
    desc: "Dedicated companionship and medical monitoring for seniors, focusing on mobility and vitality.",
    icon: User,
  },
  {
    title: "Nursing Care",
    desc: "Post-operative recovery, wound management, and medication administration by certified RNs.",
    icon: HeartPulse,
  },
  {
    title: "Baby Care",
    desc: "Specialized neonatal support for new mothers and intensive care for infants in a home setting.",
    icon: Baby,
  },
];

export default function Services() {
  return (
    <section className="py-9 px-6 md:px-16 bg-[#f7f9f9] dark:bg-gray-900">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-teal-600 font-semibold text-sm tracking-wide">
          SPECIALIZED CARE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
          Comprehensive Home Healthcare
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Precision clinical services tailored to the unique needs of your family.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {services.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
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

                  {/* LINK */}
                  {/* <div className="mt-5 flex items-center gap-2 text-teal-600 font-medium cursor-pointer group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight size={16} />
                  </div> */}

                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}