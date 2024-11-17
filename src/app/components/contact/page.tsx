import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col lg:flex-row justify-between border border-slate-900 rounded-3xl items-stretch bg-slate-700 w-full max-w-6xl h-auto shadow-md rounded-lg">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start bg-slate-700 text-white p-6 lg:p-8 lg:w-1/2 overflow-hidden">
          <h1 className="text-3xl font-bold mb-4">
            Let's chat. <br /> Tell about your project.
          </h1>
          <p className="mb-4">Let's create something together</p>
          <div className="text-sm">
            Mail at: 
            <a href="mailto:shahmeerbukahri13@gmail.com" className="text-blue-400 ml-1">
              shahmeerbukahri13@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex justify-center items-center bg-gray-50 p-6 lg:w-1/2">
          <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the subject"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Tell me more about your project
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
