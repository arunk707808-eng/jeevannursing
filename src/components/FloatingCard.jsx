import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";

const data = [
  {
    title: "5,000+ Happy Patients",
    desc: "Trusted by families for over a decade.",
  },
  {
    title: "24/7 Support Available",
    desc: "We are always there when you need us.",
  },
  {
    title: "Verified Caregivers",
    desc: "Background-checked professionals.",
  },
];

export default function FloatingCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-6 left-6 w-65">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-lg rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 text-teal-600 p-2 rounded-full">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <Badge className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full">VERIFIED CARE</Badge>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {data[index].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {data[index].desc}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}