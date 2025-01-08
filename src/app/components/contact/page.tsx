"use client";
import React, { useState } from "react";
import { ContactSchema } from "@/app/validation/schemas";

type ContactFormData = {
  fullName: string;
  email: string;
  contactNumber: string;
  subject: string;
  projectDetails: string;
};

type ValidationError = {
  [key: string]: string[];
};

function Contact() {
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    projectDetails: "",
  });
  const [error, setError] = useState<ValidationError>({});

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = ContactSchema.safeParse(contactFormData);
    if (!validation.success) {
      const fieldErrors = validation.error.formErrors.fieldErrors;
      setError(fieldErrors as ValidationError);
    } else {
      setError({});
      alert("Message sent successfully!");

      // try{
      //   const response = await fetch("api/sendEmail", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(contactFormData),
      //   });
      //   if(response.ok){
      //     alert("Email sent successfully!");
      //     setContactFormData({
      //       fullName: "",
      //       email: "",
      //       contactNumber: "",
      //       subject: "",
      //       projectDetails: "",
      //     });
      //   } else{
      //     alert("Failed to send email.");
      //   }
      // }catch(error){
      //   alert("An error occurred. Please try again later.");
      // }
      // console.log("Form submitted successfully", contactFormData);
      // Perform submission logic (e.g., API call)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between border border-slate-900 rounded-3xl items-stretch bg-slate-700 w-full max-w-6xl h-auto shadow-md rounded-lg">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start bg-slate-700 text-white p-6 lg:p-8 lg:w-1/2 overflow-hidden">
          <h1 className="text-3xl font-bold mb-4">
            Let&apos;s chat. <br/> Tell about your project.
          </h1>
          <p className="mb-4">Let&apos;s create something together</p>
          <div className="text-sm">
            Mail at:
            <a
              href="mailto:shahmeerbukahri13@gmail.com"
              className="text-blue-400 ml-1"
            >
              shahmeerbukahri13@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex justify-center items-center bg-gray-50 p-6 lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md text-black rounded-lg p-6 w-full max-w-md"
          >
            <div className="">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={contactFormData.fullName}
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
              <div className="min-h-8">
                {error.fullName && (
                  <p className="text-red-500">
                    {error.fullName[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactFormData.email}
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <div className="min-h-8">
                {error.email && (
                  <p className="text-red-500">
                    {error.email[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="">
              <label
                htmlFor="contactNumber"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={contactFormData.contactNumber}
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
              <div className="min-h-8">
                {error.contactNumber && (
                  <p className="text-red-500">
                    {error.contactNumber[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactFormData.subject}
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the subject"
              />
              <div className="min-h-8">
                {error.subject && (
                  <p className="text-red-500">
                    {error.subject[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-2">
              <label
                htmlFor="projectDetails"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Tell me more about your project
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                value={contactFormData.projectDetails}
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here."
              ></textarea>
              <div className="min-h-8">
                {error.projectDetails && (
                  <p className="text-red-500">
                    {error.projectDetails[0]}
                  </p>
                )}
              </div>
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
