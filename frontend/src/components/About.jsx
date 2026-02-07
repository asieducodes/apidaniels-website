// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-blue">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-brand-blue">
                Apidaniels Auto & Trade LLC
              </strong>{" "}
              is your trusted partner for importing quality used vehicles from
              the United States and Canada to Ghana.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience, we specialize in sourcing reliable,
              well-maintained vehicles at affordable prices with transparent,
              hassle-free service.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="space-y-4">
            {[
              {
                icon: "✓",
                title: "Verified Quality",
                text: "Inspected vehicles with history reports",
              },
              {
                icon: "💰",
                title: "Best Prices",
                text: "Direct import means lower costs",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                text: "Efficient shipping and customs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg transition shadow-sm hover:shadow-md"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}