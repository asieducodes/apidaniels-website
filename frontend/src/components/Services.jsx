// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCar, FaSearch, FaGlobeAfrica } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Used Car Sales",
      icon: <FaCar />,
      description:
        "Browse quality pre-owned vehicles from top brands. All cars inspected and verified.",
    },
    {
      title: "Car Sourcing",
      icon: <FaSearch />,
      description:
        "Looking for a specific make or model? We source your dream car from trusted dealers.",
    },
    {
      title: "Import & Delivery",
      icon: <FaGlobeAfrica />,
      description:
        "Complete handling of shipping, customs clearance, and delivery to Ghana.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-blue"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Everything you need to get your car from USA/Canada to Ghana
        </motion.p>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-6 flex justify-center text-brand-blue">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-center mb-4 text-brand-blue">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}