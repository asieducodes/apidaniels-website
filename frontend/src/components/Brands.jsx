/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Brands() {
  const brands = [
    "Honda", "Toyota", "Hyundai", "GMC",
    "Mazda", "Ford", "Chevrolet", "Mitsubishi", "KIA"
  ];

  return (
    <section id="brands" className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-blue">
          Top Brands Available
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We source vehicles from all major manufacturers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-lg text-center font-bold text-xl 
                         text-gray-700 hover:bg-brand-blue hover:text-white 
                         transition shadow-sm hover:shadow-lg cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="mt-12 text-center">
  <Link
    to="/cars"
    className="inline-block bg-brand-blue text-white px-8 py-4 rounded-lg font-bold
               hover:bg-brand-red transition transform hover:scale-105 shadow-lg"
  >
    View Available Cars
  </Link>
</div>
    </section>
    
  );
  
}