// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
      style={{
        backgroundImage: "url('/bg-car.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Main Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg"
        >
          APIDANIELS
        </motion.h1>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-semibold mb-6 text-white drop-shadow-lg"
        >
          AUTO & TRADE LLC
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md"
        >
          Quality Used & Affordable Cars From USA & Canada
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-brand-red px-8 py-4 rounded-lg text-lg font-bold text-white shadow-xl hover:bg-red-700 transition"
          >
            Get Started
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/17743140055"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:bg-gray-100 transition"
          >
            WhatsApp Us
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="mt-16"
        >
          <a href="#about" className="text-white">
            <svg
              className="w-8 h-8 mx-auto drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}