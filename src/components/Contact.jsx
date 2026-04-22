import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";


export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      service: form.service.value,
      city: form.city.value,
      message: form.message.value.trim(),
    };

    // ✅ validation
    if (!data.name) {
  setError("Name is required");
  setLoading(false);
  return;
}

if (!data.phone) {
  setError("Phone is required");
  setLoading(false);
  return;
}

if (!data.email) {
  setError("Email is required");
  setLoading(false);
  return;
}
    if (!data.city) {
      setError("Please select a city");
      setLoading(false);
      return;
    }

    if (!data.service) {
      setError("Please select a service");
      setLoading(false);
      return;
    }

    if (!/^[0-9]{10}$/.test(data.phone)) {
      setError("Enter valid 10 digit phone number");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      
      await Promise.all([
         fetch("https://script.google.com/macros/s/AKfycbxDm8ocAuocn2CKLAC9PJVpsz7ZYTMEEOuIx-mHKuYtzxUcfBiXBsJIj1MWV1KtkH8/exec", {
  method: "POST",
  body: formData,
}),
        emailjs.send(
          "service_bxv1xgv",
          "template_b67fo3b",
          data,
          "8zsREMHo6BUGtI5B_"
        ),
      ]);

      setFormData(data); // ✅ save for WhatsApp
      setSuccess(true);
      alert("submitted successfully")
      form.reset();

    } catch (err) {
      console.log(err);
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  const handleWhatsApp = () => {
    if (!formData) return;

    const whatsappNumbers = {
      delhi: "918477930875",
      gwalior: "916395421849",
    };

    const number = whatsappNumbers[formData.city];
    if (!number) return;

    const text = `Hello, I found you on your website.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.location.href = url;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="book"
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        Book a Walkthrough
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
        Schedule a discovery call with our care specialists.
      </p>

      {/* ✅ SUCCESS */}
      {success ? (
        <div className="text-center space-y-4">
          <p className="text-green-600 font-medium">
            ✅ Request submitted successfully
          </p>

          <Button
            onClick={handleWhatsApp}
            className="bg-teal-600 text-white px-6 py-2 h-10 rounded-full"
          >
            Continue to WhatsApp
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          

          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="name"
              
              placeholder="Full Name"
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              name="phone"
              
              placeholder="Phone"
              className="bg-gray-100 w-full dark:bg-gray-700 p-3 rounded-full outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="email"
              
              placeholder="Email"
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full outline-none focus:ring-2 focus:ring-teal-400 transition"
            />

            <select
              name="city"
              className="w-full bg-gray-100 dark:bg-gray-700 p-3 rounded-full outline-none focus:ring-2 focus:ring-teal-400 transition"
            >
              <option value="">Select City</option>
              <option value="gwalior">Gwalior</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>

          <select
            name="service"
            className="w-full bg-gray-100 dark:bg-gray-700 p-3 rounded-full outline-none focus:ring-2 focus:ring-teal-400 transition"
          >
            <option value="">Select Service</option>
            <option value="Elder care">Elder Care</option>
            <option value="nursing">Nursing</option>
            <option value="baby care">Baby Care</option>
          </select>

          <textarea
            name="message"
            placeholder="How can we help you?"
            className="w-full bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl h-28 outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <Button
           type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-linear-to-r from-teal-500 to-teal-600 hover:scale-[1.02] active:scale-95 transition text-white py-4 h-10 rounded-full shadow-lg disabled:opacity-70"
          >
            {loading ? (
              <LoaderCircle className="animate-spin w-5 h-5 mx-auto block" />
            ) : (
              "Book a Consultation"
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}