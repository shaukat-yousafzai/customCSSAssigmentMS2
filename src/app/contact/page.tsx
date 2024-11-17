import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-24 m-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold capitalize">Contact Us</h2>
        <p className="text-lg text-gray-700 mt-4">
          Get in touch with us. we are always here to help you.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
        <div className="space-y-8">
          <form action="#">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="username" className="block text-lg font-medium capitalize">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium capitalize">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="email@abc.com"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="subject" className="block text-lg font-medium capitalize">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your main title"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-lg font-medium capitalize">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                cols={30}
                rows={10}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg capitalize"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462119.41074394854!2d66.8258195351357!3d25.19283714304759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730626986210!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
