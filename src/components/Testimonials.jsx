import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Excellent service, very caring staff.",
  },
  {
    name: "Anita Verma",
    text: "Professional and on-time support.",
  },
  {
    name: "Vikas Singh",
    text: "Highly recommended for elder care.",
  },
];
export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);
  return (
    <section className=" bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex py-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33%] px-4"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md h-full">
                <p className="text-gray-600 dark:text-gray-300">
                  “{item.text}”
                </p>

                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}