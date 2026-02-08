'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@masterguide.com',
      link: 'mailto:hello@masterguide.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Your Country',
      link: '#',
    },
    {
      icon: '⏰',
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#',
    },
  ];
    const contactMethods = [
      {
        icon: '📧',
        title: 'Email',
        value: 'antomotongori@gmail.com',
        link: 'mailto:antomotongori@gmail.com',
      },
      {
        icon: '📱',
        title: 'Phone',
        value: '+254119397068',
        link: 'tel:+254119397068',
      },
      {
        icon: '📍',
        title: 'Location',
        value: 'Nairobi, Kenya',
        link: '#',
      },
      {
        icon: '⏰',
        title: 'Response Time',
        value: 'Within 24 hours',
        link: '#',
      },
    ];

  return (
    <div className="bg-gradient-to-b from-secondary-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Have questions or ready to start your journey? I'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center hover:translate-y-[-4px] group"
              >
                <div className="text-5xl mb-4 inline-block">{method.icon}</div>
                <h3 className="text-lg font-bold text-secondary-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 group-hover:text-secondary-600 font-semibold">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-12 border-t-4 border-secondary-600">
            <h2 className="text-3xl font-bold text-secondary-800 mb-2 text-center">Send Me a Message</h2>
            <p className="text-gray-600 text-center mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-green-700 font-semibold">✓ Thank you! Your message has been received. I'll be in touch soon!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="mentorship">Mentorship Inquiry</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your inquiry, goals, or just say hello!"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-8">Connect With Me</h2>
          <p className="text-gray-600 mb-8">Follow me on social media to stay updated and engage with the community.</p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Twitter', icon: '🐦' },
              { name: 'Instagram', icon: '📸' },
              { name: 'Facebook', icon: '👥' },
              { name: 'YouTube', icon: '📺' },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:text-secondary-600 group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">{social.icon}</span>
                <span className="font-semibold text-gray-700 group-hover:text-secondary-600">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-800 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I receive a response?',
                a: 'I aim to respond to all inquiries within 24 hours. For urgent matters, please call the phone number provided above.',
              },
              {
                q: 'Do you offer online mentorship?',
                a: 'Yes! I provide mentorship through various formats including virtual sessions, email correspondence, and phone calls.',
              },
              {
                q: 'What are your availability and rates?',
                a: 'Availability and rates vary based on the type of engagement. Please reach out with your specific needs for detailed information.',
              },
              {
                q: 'Is everything I share kept confidential?',
                a: 'Absolutely. All conversations are confidential and protected. Your privacy is my priority.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md border-l-4 border-secondary-600 group">
                <summary className="p-6 cursor-pointer font-bold text-secondary-800 hover:text-secondary-600 transition-colors flex justify-between items-center">
                  {faq.q}
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 border-t border-gray-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
