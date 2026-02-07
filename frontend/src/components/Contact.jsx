import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
      // EmailJS configuration
      const serviceID = 'service_4dxuscc'; 
      const templateID = 'template_a27ilzo'; 
      const publicKey = 'rmWiyUdXfcgsqxohm';
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        phone: formData.phone.replace(/\s/g, ''), // Remove spaces for WhatsApp link
        reply_to: formData.email || 'Not provided',
        message: formData.message,
        to_email: 'apidanielsautoandtradellc@gmail.com'
      };
      
      // Send email via EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setStatus({
        type: 'success',
        message: 'Thank you! We will contact you shortly.'
      });
      
      // Clear form
      setFormData({ name: '', phone: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please call us directly or try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-blue">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-brand-blue">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📱</div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/17743140055" className="text-brand-red hover:underline">
                    +1 774 314 0055
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl">☎️</div>
                <div>
                  <p className="font-semibold">Ghana Office</p>
                  <a href="tel:+233548873874" className="text-brand-red hover:underline">
                    +233 54 887 3874
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:apidanielsautoandtradellc@gmail.com" className="text-brand-red hover:underline">
                    apidanielsautoandtradellc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">
                    Kwadaso Ohwemasi<br />
                    Opposite Redemption House<br />
                    Kumasi, Ghana
                  </p>
                  <br/>
                  <p className="text-gray-600">
                    122 Water St<br />
                    01453<br />
                    Leominster,USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-blue">Send a Message</h3>
            
            {status.message && (
              <div className={`p-4 rounded mb-4 ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {status.message}
              </div>
            )}
            
            {loading && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-brand-blue" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-blue">Sending your message...</p>
                    <p className="text-sm text-gray-600">Please wait a moment</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="+233..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="your@email.com (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}