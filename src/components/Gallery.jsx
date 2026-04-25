import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import img1 from "../assets/img7.webp";
import img2 from "../assets/img13.webp";
import img3 from "../assets/img14.webp";
import img4 from "../assets/img6.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/babyCare.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";
import { Button } from "./ui/button";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#f7f9f9] dark:bg-gray-900">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Gallery
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        {images.slice(0, 3).map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setSelected(img);
              setOpen(true);
            }}
            className={`rounded-3xl overflow-hidden shadow-lg cursor-pointer
              ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              ${i === 3 ? "md:col-span-2" : ""}`}
          >
            <img src={img} loading="lazy" className="w-full h-full object-fill" />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <Button
          onClick={() => setOpen(true)}
          className="bg-teal-500 text-white px-6 py-2 rounded-full"
        >
          Show More Photos
        </Button>
      </div>
      {/* 🔥 MODAL FULL GALLERY */}
      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => {
              if (selected) {
                setSelected(null); // sirf image band
              } else {
                setOpen(false); // modal band
              }
            }}
          />

          {/* modal */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-4 w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto">
            {/* close */}
            <Button
              onClick={() => {
                if (selected) {
                  setSelected(null);
                } else {
                  setOpen(false);
                }
              }}
              className="absolute top-3 right-3 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
            >
              <X size={18} />
            </Button>

            {/* 🔥 IMAGE VIEW */}
            {selected ? (
              <div className="flex items-center justify-center h-[80vh]">
                <img
                  src={selected}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>
            ) : (
              /* GRID */
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    loading="lazy"
                    onLoad={(e) => e.target.classList.remove("blur-sm")}
                    onClick={() => setSelected(img)}
                    className="w-full h-50 object-cover rounded-xl cursor-pointer"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
