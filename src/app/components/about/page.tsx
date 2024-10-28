import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function AboutPage() {
  const getDomains = async () => {
    return await client.fetch(`*[_type == "domains"]`);
  }
  const domains = await getDomains();
  console.log("Logo", domains)
  return (
    <div className="flex flex-col min-h-[130vh]">
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
        {
          domains.map((domain:any)=>{
            return <div key={domain._id} className="bg-slate-600 min-w-[300px] min-h-[300px] flex flex-col justify-evenly items-center ml-5 mr-5 border rounded-3xl hover:scale-105 transition-transform duration-300">  
              <Image
                src={urlFor(domain?.logo).url()} 
                width={60}
                height={60}
                alt={domain.Title || " Blog Image"}
              />
              <p>{domain.DomainName}</p>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default AboutPage;
