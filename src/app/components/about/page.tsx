import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Technologiesssss:  [
//   {
//     _updatedAt: '2024-11-11T12:42:57Z',
//     _createdAt: '2024-11-11T12:42:47Z',
//     _rev: 't9EQ0nkXnwA0WYtTuXfBbu',
//     _type: 'circleAnimation',
//     logo: { _type: 'image', asset: [Object] },
//     _id: '1915bad3-a7f1-4971-98f7-a34c1e38e8d5',
//     technology: 'Tailwind'
//   },
type Technology = {
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: string;
  logo: {
    _type: string;
    asset: [object];
  };
  _id: string;
  technology: string;
};
// {
//   _type: 'domains',
//   logo: { _type: 'image', asset: [Object] },
//   _id: 'b81f1d52-bd94-4cc4-9570-644efe386e46',
//   _updatedAt: '2024-10-28T10:53:31Z',
//   DomainName: 'Front-End Developer',
//   _createdAt: '2024-10-28T10:53:02Z',
//   _rev: 'chRk35ZEtkZXBZt9pB8rEw'
// }
type Domain = {
  _type: string,
  logo: { _type: string; asset: [object] };
  _id: string;
  _updatedAt: Date;
  DomainName: string;
  _createdAt: Date;
  _rev: string;
};
async function AboutPage() {
  const getDomains = async () => {
    return await client.fetch(`*[_type == "domains"]`);
  };
  const getTechnologies = async () => {
    return await client.fetch(`*[_type == "circleAnimation"]`);
  };
  const domains: Domain[] = await getDomains();
  const technologies: Technology[] = await getTechnologies();
  console.log("DOmainss: ", domains);
  console.log("Technologiesssss: ", technologies);
  return (
    <div className="flex flex-col min-h-[170vh]">
      <div className="flex flex-col justify-center mx-auto max-w-[60%] min-h-[80vh]">
        <p className="uppercase text-gray-400">Introduction</p>
        <h1 className="text-7xl font-bold">Overview</h1>
        <p className="mt-2 text-gray-300">
          Hello! I’m Shahmeer Bukhari, a passionate Full Stack Web Developer
          committed to creating efficient and user-centric digital experiences.
          With a well-rounded skill set across front-end and back-end
          development, I take pride in delivering both aesthetically appealing
          and high-performing applications. My expertise spans frameworks and
          tools like React, Next.js, and Shadcn, which I use to build
          responsive, immersive interfaces that engage users and make navigation
          seamless. I pay close attention to user experience at every step,
          ensuring that each project is not only functional but enjoyable to
          interact with.
        </p>
        <p className="mt-10 text-gray-300">
          When it comes to data and content-rich platforms, I rely on Sanity for
          content management, ensuring dynamic and structured data handling, and
          MongoDB for flexible and scalable database solutions. For back-end
          architecture, I work with Node.js, creating APIs and backend systems
          that provide reliability and performance for the applications I
          develop. This blend of technologies empowers me to build blog websites
          and complex web applications that efficiently manage content and
          deliver smooth, real-time experiences across all devices.
        </p>
        <p className="mt-10 text-gray-300">
          Beyond development, I am an enthusiast of Generative AI and always
          exploring its potential to bring creative, intelligent features to web
          applications. I’m especially excited about integrating AI tools to
          automate tasks, enhance personalization, and provide users with
          innovative, interactive elements. This continuous learning and
          experimentation keep my projects at the forefront of technology trends
          and allow me to deliver cutting-edge solutions. I’m thrilled to
          connect with others who are passionate about technology and
          innovation—let’s create something incredible together!
        </p>
      </div>
      <div className="flex flex-row justify-center">
        {domains.map((domain: Domain) => {
          return (
            <div
              key={domain._id}
              className="bg-slate-600 min-w-[300px] min-h-[300px] flex flex-col justify-evenly items-center ml-5 mr-5 border rounded-3xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
            >
              <Image
                src={urlFor(domain?.logo).url()}
                width={60}
                height={60}
                alt={domain.DomainName || " Blog Image"}
              />
              <p>{domain.DomainName}</p>
            </div>
          );
        })}
      </div>
      <div className="flex mt-36 flex-col items-center">
        <p className="uppercase text-gray-300 text-lg">what i excel at</p>
        <h1 className="text-7xl font-bold text-white mt-3">Skills</h1>
        <div className="flex flex-row justify-center">
          {technologies.map((technology: Technology) => {
            return (
              <div
                className="flex items-center p-5 mt-10 space-x-4"
                key={technology._id}
              >
                <Image
                  src={urlFor(technology?.logo).url()}
                  width={60}
                  height={60}
                  alt={technology.technology || " Blog Image"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
