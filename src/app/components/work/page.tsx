import React from 'react';

interface WorkResponsibility {
  title: string;
  company: string;
  tasks: string[];
}

const workResponsibilities: WorkResponsibility[] = [
  {
    title: "Front-End Developer",
    company: "Interns Pakistan",
    tasks: [
      "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and Bootstrap.",
      "Created clean, efficient UI components and enhanced overall site functionality.",
      "Troubleshot cross-browser compatibility issues and optimized page load speeds.",
      "Collaborated with design and backend teams for seamless integration.",
      "Strengthened understanding of front-end best practices and responsive design principles.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Prodigy InfoTech",
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
];

function Work() {
  return (
    <div className="relative flex flex-col items-center py-10 px-4 pb-20">
      {/* Timeline line */}
      <div className="absolute h-full w-1 bg-gray-300"></div>

      {workResponsibilities.map((responsibility, index) => (
        <div
          key={index}
          className={`relative ${index % 2 === 0 ? 'right-72' : 'left-72'} mt-20 top-12 max-w-[400px] bg-slate-600 p-5 rounded-xl border-b-4 border-white`}
        >
          <h1 className='text-3xl'>{responsibility.title}</h1>
          <p className='text-gray-400'>{responsibility.company}</p>
          <ol className='list-disc pl-5 mt-7'>
            {responsibility.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default Work;
