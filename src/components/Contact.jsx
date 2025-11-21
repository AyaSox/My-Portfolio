import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { about } from '../data/portfolioData';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

  
    const YOUR_SERVICE_ID = 'service_0grvn4p';
    const YOUR_TEMPLATE_ID = 'template_zb9obql';
    const YOUR_PUBLIC_KEY = '8dAlLS_4u0mx-z_Td';

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: about.linkedin,
      display: 'Connect on LinkedIn',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: about.github,
      display: 'View Projects',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="section-container section-surface">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-themed-secondary mb-4">
          I am actively seeking employment opportunities where I can apply my HR domain knowledge together with modern .NET and React development skills.
        </p>
        <p className="text-themed-muted">
          If you have a role that requires HR process understanding and full stack software delivery, or you would like to discuss potential opportunities, please reach out through the contact form below or via the channels provided.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="card">
          <h3 className="text-2xl font-bold text-themed-primary mb-6 text-center">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-themed-secondary mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full px-4 py-2 border border-themed-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-themed-surface text-themed-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-themed-secondary mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className="w-full px-4 py-2 border border-themed-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-themed-surface text-themed-primary"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-themed-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-themed-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-themed-surface text-themed-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
            {status === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-100 rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 rounded-lg">
                Failed to send message. Please try again or use an alternative contact method.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Contact Links */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:scale-105"
          >
            <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mx-auto`}>
              {link.icon}
            </div>
            <h3 className="text-lg font-semibold text-themed-primary mb-2 text-center">
              {link.name}
            </h3>
            <p className="text-themed-muted text-sm break-all text-center">
              {link.display}
            </p>
          </a>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="card text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-themed-primary mb-3">
            Open to Employment Opportunities
          </h3>
          <p className="text-themed-muted mb-6">
            I am committed to contributing to a forward thinking team and delivering reliable, maintainable software that supports people centric processes. I would appreciate the opportunity to discuss how I can add value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
