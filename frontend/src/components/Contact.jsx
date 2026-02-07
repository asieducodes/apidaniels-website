/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      await axios.post(`${API_URL}/contact`, formData);
      
      setStatus({
        type: 'success',
        message: 'Thank you! We will contact you shortly.'
      });
      
      setFormData({ name: '', phone: '', email: '', message: '' });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
  <section id="contact" className="py-20 px-4 bg-gray-50">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-blue">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-brand-blue">
            Get In Touch
          </h3>

          <div className="space-y-5">
            {[
              {
                icon: "📱",
                title: "WhatsApp",
                content: (
                  <a
                    href="https://wa.me/17743140055"
                    className="text-brand-red hover:underline"
                  >
                    +1 774 314 0055
                  </a>
                ),
              },
              {
                icon: "☎️",
                title: "Ghana Office",
                content: (
                  <a
                    href="tel:+233548873874"
                    className="text-brand-red hover:underline"
                  >
                    +233 54 887 3874
                  </a>
                ),
              },
              {
                icon: "📧",
                title: "Email",
                content: (
                  <a
                    href="mailto:apidanielsautotradeusa@yahoo.com"
                    className="text-brand-red hover:underline break-all"
                  >
                    apidanielsautotradeusa@yahoo.com
                  </a>
                ),
              },
              {
                icon: "📍",
                title: "Location",
                content: (
                  <div className="text-gray-600 text-sm leading-relaxed">
                    <p>
                      Kwadaso Ohwemasi <br />
                      Opposite Redemption House <br />
                      Kumasi, Ghana
                    </p>
                    <br />
                    <p>
                      122 Water St <br />
                      01453 <br />
                      Leominster, USA
                    </p>
                  </div>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-brand-blue">
            Send a Message
          </h3>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded mb-4 ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Name *", name: "name", type: "text", required: true },
              { label: "Phone *", name: "phone", type: "tel", required: true },
              { label: "Email", name: "email", type: "email" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-sm font-semibold mb-2">
                  {field.label}
                </label>
                <input
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="w-full bg-brand-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>

{/* Working Hours Section */}
<section className="py-16 px-4 bg-green-50">
  <div className="max-w-3xl mx-auto text-center">
    <div className="inline-block px-4 py-1 rounded-full bg-brand-blue text-white font-semibold text-sm mb-4">
      Open 24/7
    </div>
    
    <h2 className="text-3xl md:text-4xl font-bold text-brand-red mb-6">
      Working Hours
    </h2>

    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-brand-red">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-3 text-brand-blue">
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <span className="text-2xl md:text-3xl font-bold">6:00 AM — 10:00 PM</span>
        </div>
        
        <div className="h-px w-full bg-gray-100 my-4"></div>
        
        <p className="text-gray-600 text-lg">
          Available <span className="font-bold text-brand-blue">Every Single Day</span> of the week, including weekends and holidays.
        </p>
      </div>
    </div>

    <p className="mt-8 text-sm text-gray-500 italic">
      *All times are in your local time zone. For urgent inquiries outside these hours, please use our WhatsApp link below.
    </p>
  </div>
</section>

  </section>
  
);
}