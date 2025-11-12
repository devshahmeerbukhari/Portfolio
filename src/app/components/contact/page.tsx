"use client";
import React, { useState } from "react";
import { ContactSchema } from "@/app/validation/schemas";
import Image from "next/image";

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
      // Add submission logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 relative overflow-hidden bg-transparent">
      {/* Outer Card */}
      <div className="w-full max-w-6xl bg-slate-200/10 backdrop-blur-xl rounded-3xl border border-slate-500/20 shadow-2xl p-6 md:p-8 lg:p-12 transition-transform duration-300 hover:scale-[1.01]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-between bg-slate-300/20 rounded-2xl p-6 md:p-8 lg:w-1/2 text-gray-200 border border-slate-500/20 shadow-inner backdrop-blur-md space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-md">
                Let&apos;s chat. <br />
                Tell me about your project.
              </h1>
              <p className="text-sm sm:text-base font-light mt-3 text-gray-300/90">
                Let’s create something amazing together.
              </p>
            </div>

            <div className="mt-6 space-y-1 text-xs sm:text-sm">
              <p className="text-gray-400">
                Mail at:
                <a
                  href="mailto:shahmeerbukahri13@gmail.com"
                  className="ml-1 text-indigo-400 hover:text-indigo-300 underline decoration-dotted transition-all"
                >
                  shahmeerbukahri13@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                Available for freelance & collaborative projects 💼
              </p>
            </div>

            <div className="mt-auto w-full max-w-xs mx-auto opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/contact-illustration-dark.svg"
                alt="Contact Illustration"
                className="w-full h-auto drop-shadow-lg"
                width={600}
                height={400}
                priority={false}
              />
            </div>
          </div>

          {/* Right Section (Form) */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md md:max-w-none md:flex-1 bg-slate-300/20 border border-slate-500/20 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 space-y-5 backdrop-blur-lg
                       flex flex-col justify-between h-auto md:h-full"
            noValidate
          >
            {[
              {
                label: "Full Name*",
                name: "fullName",
                type: "text",
                placeholder: "Enter your full name",
              },
              {
                label: "Email Address*",
                name: "email",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone Number*",
                name: "contactNumber",
                type: "tel",
                placeholder: "Enter your phone number",
              },
              {
                label: "Subject*",
                name: "subject",
                type: "text",
                placeholder: "Enter the subject",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div
                key={name}
                className="flex flex-col rounded-xl p-1 sm:p-2 transition-all"
              >
                <label
                  htmlFor={name}
                  className="text-gray-200 font-semibold mb-1 text-sm sm:text-base"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={contactFormData[name as keyof ContactFormData]}
                  onChange={handleChanges}
                  placeholder={placeholder}
                  className={`w-full px-3 sm:px-4 py-2.5 bg-slate-100/10 border rounded-lg text-gray-100 text-sm sm:text-base placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    error[name]
                      ? "border-red-500 focus:ring-red-400"
                      : "border-slate-600/30"
                  }`}
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="min-h-[1.25rem] mt-1 text-xs text-red-500 font-medium">
                  {error[name]?.[0]}
                </p>
              </div>
            ))}

            <div className="flex flex-col rounded-xl p-1 sm:p-2 transition-all">
              <label
                htmlFor="projectDetails"
                className="text-gray-200 font-semibold mb-1 text-sm sm:text-base"
              >
                Tell me more about your project
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                value={contactFormData.projectDetails}
                onChange={handleChanges}
                placeholder="Type your message here."
                className={`w-full px-3 sm:px-4 py-2.5 bg-slate-100/10 border rounded-lg resize-none text-gray-100 text-sm sm:text-base placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  error.projectDetails
                    ? "border-red-500 focus:ring-red-400"
                    : "border-slate-600/30"
                }`}
                spellCheck={false}
              ></textarea>
              <p className="min-h-[1.25rem] mt-1 text-xs text-red-500 font-medium">
                {error.projectDetails?.[0]}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 active:scale-[0.98] text-white font-extrabold py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 text-sm sm:text-base"
            >
              Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
