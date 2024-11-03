import React from 'react';
import Image from 'next/image';

interface WorkResponsibility {
  src: string,
  title: string;
  company: string;
  date: string,
  tasks: string[];
}

const workResponsibilities: WorkResponsibility[] = [
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
      {/* Timeline line */}
      <div className="absolute ml-4 h-full w-1 bg-gray-300"></div>

      {workResponsibilities.map((responsibility, index) => (
        <div key={index} className='flex flex-row'>
          <div key={index + 1} className={`relative top-32 left-52 text-red-700`}>
            <Image
              src={responsibility.src}
              alt='img'
              width={50}
              height={50}
              className='border border-4 rounded-full border-gray-300'
            />
          </div>
          <div
            key={index + 2}
            className={`relative ${index % 2 === 0 ? 'right-72' : 'left-60'} mt-20 top-12 max-w-[400px] bg-slate-600 p-5 rounded-xl border-b-4 border-white`}
          >
            <h1 className='text-3xl'>{responsibility.title}</h1>
            <p className='text-gray-400'>{responsibility.company} ({responsibility.date})</p>
            <ol className='list-disc pl-5 mt-7'>
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
