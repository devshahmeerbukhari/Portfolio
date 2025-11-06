import React from "react";
import Image from "next/image";

interface WorkResponsibility {
  src: string;
  title: string;
  company: string;
  date: string;
  tasks: string[];
}

const workResponsibilities: WorkResponsibility[] = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL9X9GXvaXXSnUmZTncE3hUokvNkmFwPiKw&s",
    title: "Full-Stack Developer (Current Project)",
    company: "Private B2B & B2C Portal",
    date: "Nov 2024 - Present",
    tasks: [
      "Developing a private B2B and B2C portal designed for internal business management and partner collaboration.",
      "Building a secure, scalable frontend using NextJS, TypeScript, and Tailwind CSS with modular UI components via Shadcn and Material UI.",
      "Implementing backend logic and REST APIs using NodeJS and MongoDB to manage data for sellers, customers, and product inventory.",
      "Using Zod for form validation and type-safe data handling across seller and admin workflows.",
      "Integrating Cloudinary for secure and optimized product image storage and delivery.",
      "Creating dedicated dashboards for admins and sellers to track sales, manage inventory, and view order analytics.",
      "Implementing an automated notification system to alert sellers when stock levels are low or out of order.",
      "Utilizing NextAuth (OAuth) for secure, role-based access control across private user roles.",
      "Ensuring the portal’s architecture is optimized for performance, reliability, and data security within a controlled environment.",
    ],
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL9X9GXvaXXSnUmZTncE3hUokvNkmFwPiKw&s",
    title: "Full-Stack Developer (Freelance Project)",
    company: "E-Commerce Web Application",
    date: "Jun 2025 - Aug 2024",
    tasks: [
      "Designed and developed a fully functional e-commerce web application from scratch using NextJS and NodeJS.",
      "Built a responsive, modern UI with Material UI and Tailwind CSS, ensuring an intuitive and visually appealing shopping experience.",
      "Implemented authentication and authorization using NextAuth (OAuth) for secure user management.",
      "Developed backend APIs and integrated MongoDB via Mongoose for robust data storage and retrieval.",
      "Used Zod for form validation to ensure input integrity and prevent data inconsistencies.",
      "Integrated Cloudinary for seamless image management and optimized product media handling.",
      "Implemented key features including product management, user authentication, cart, orders, and wishlist systems.",
      "Deployed and tested the complete solution, ensuring scalability, performance, and cross-device responsiveness.",
    ],
  },

  {
    src: "https://media.licdn.com/dms/image/v2/D4E0BAQEG1JgFWlO_Mg/company-logo_200_200/B4EZiueV8gGwAM-/0/1755273849503/dexterzsol_logo?e=2147483647&v=beta&t=K7mHWnVZKyQ7I2F1BwSVYeAlaDaa_emJZknn-kFkxA4",
    title: "Front-End Developer",
    company: "Dexterz Sol",
    date: "Dec 2024 - Feb 2025",
    tasks: [
      "Developed dynamic and responsive web interfaces using ReactJS and NextJS with Tailwind CSS and Material UI.",
      "Built scalable UI components and layouts with Shadcn, ensuring design consistency and seamless user experience.",
      "Implemented robust form validation using Zod to enhance input reliability and data integrity across projects.",
      "Collaborated on mobile app development using React Native, delivering efficient cross-platform solutions.",
      "Integrated OpenAI API into a Chrome Extension, enabling advanced AI-driven content generation features.",
      "Developed a professional portfolio website for a client using NextJS, Shadcn, and Sanity CMS for easy content management.",
      "Created a Speech Translator website integrating real-time speech recognition and translation APIs.",
      "Worked closely with backend and design teams to ensure smooth functionality, scalability, and on-time delivery of features.",
    ],
  },

  {
    src: "https://media.licdn.com/dms/image/v2/D4D0BAQEMRfX2ouW2lw/company-logo_200_200/company-logo_200_200/0/1727855093948/prodigy_infotech_logo?e=2147483647&v=beta&t=yKzoYTxZSd47gGP9jF__ycnWkrjvAV6XJgAPU3vi2io",
    title: "Full-Stack Developer",
    company: "Prodigy InfoTech",
    date: "Sep 2024 - Oct 2024",
    tasks: [
      "Built dynamic, responsive applications using HTML, CSS, JavaScript, ReactJS, and NextJS.",
      "Developed and maintained scalable UI components with Shadcn, ensuring seamless user experience.",
      "Integrated Sanity as a headless CMS to enable efficient content management and editing.",
      "Handled backend logic with Mongoose, managing and querying data in MongoDB.",
      "Implemented Zod for robust form validation, enhancing data integrity and user input handling.",
      "Collaborated across teams to align on design and functionality, optimizing performance and usability.",
      "Managed multiple tasks and features across the stack, ensuring project milestones were met and quality standards upheld.",
    ],
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y43GN6Y8tcumxZ6avHHi5shioV8BRuquAA&s",
    title: "Front-End Developer",
    company: "Interns Pakistan",
    date: "Sep 2023 - Oct 2023",
    tasks: [
      "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and Bootstrap.",
      "Created clean, efficient UI components and enhanced overall site functionality.",
      "Troubleshot cross-browser compatibility issues and optimized page load speeds.",
      "Collaborated with design and backend teams for seamless integration.",
      "Strengthened understanding of front-end best practices and responsive design principles.",
    ],
  },
];

function Work() {
  return (
    <div className="relative flex flex-col items-center py-10 pb-20">
      {/* Timeline line — visible only on large screens */}
      <div className="absolute ml-4 h-full w-1 bg-gray-300 hidden lg:block"></div>

      {workResponsibilities.map((responsibility, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto relative"
        >
          {/* Logo */}
          <div
            className={`relative md:top-32 md:left-52 mb-5 md:mb-0 flex justify-center md:block`}
          >
            <Image
              src={responsibility.src}
              alt="img"
              width={50}
              height={50}
              className="border-4 rounded-full border-gray-300"
            />
          </div>

          {/* Card */}
          <div
            className={`relative mt-5 md:mt-20 top-0 md:top-12 max-w-[400px] bg-slate-600 p-5 rounded-xl border-b-4 border-white text-center md:text-left 
        ${index % 2 === 0 ? "md:right-72" : "md:left-60"} w-[90%] md:w-auto`}
          >
            <h1 className="text-2xl md:text-3xl">{responsibility.title}</h1>
            <p className="text-gray-400 text-sm md:text-base">
              {responsibility.company} ({responsibility.date})
            </p>
            <ol className="list-disc pl-5 mt-5 text-sm md:text-base text-left">
              {responsibility.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
