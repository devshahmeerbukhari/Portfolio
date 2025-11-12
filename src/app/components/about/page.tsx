import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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

type Domain = {
  _type: string;
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

  return (
    <div className="flex mt-20 flex-col min-h-[170vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="flex flex-col justify-center mx-auto max-w-4xl min-h-[80vh]">
        <p className="uppercase text-gray-400 text-sm md:text-base tracking-widest">
          Introduction
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
          Overview
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
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
        <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
          When it comes to data and content-rich platforms, I rely on Sanity for
          content management, ensuring dynamic and structured data handling, and
          MongoDB for flexible and scalable database solutions. For back-end
          architecture, I work with Node.js, creating APIs and backend systems
          that provide reliability and performance for the applications I
          develop. This blend of technologies empowers me to build blog websites
          and complex web applications that efficiently manage content and
          deliver smooth, real-time experiences across all devices.
        </p>
        <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
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

      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-400 uppercase mb-6 text-center">
          Domains
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {domains.map((domain: Domain) => (
            <div
              key={domain._id}
              className="bg-slate-600 flex flex-col justify-center items-center p-6 rounded-3xl border border-transparent hover:border-gray-500 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
              style={{ willChange: "transform" }}
            >
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src={urlFor(domain?.logo).url()}
                  fill
                  alt={domain.DomainName || "Domain Logo"}
                  className="object-contain rounded-full"
                  priority={true}
                />
              </div>
              <p className="text-white text-lg font-medium text-center">
                {domain.DomainName}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 flex flex-col items-center mb-20">
        <p className="uppercase text-gray-300 text-lg tracking-wide mb-1">
          What I Excel At
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-10 max-w-4xl w-full px-4 sm:px-0">
          {technologies.map((technology: Technology) => (
            <div
              key={technology._id}
              className="flex items-center justify-center p-3 rounded-lg bg-slate-600 hover:bg-slate-700 transition-colors duration-300 shadow-md"
              style={{ width: 80, height: 80 }}
            >
              <Image
                src={urlFor(technology?.logo).url()}
                width={50}
                height={50}
                alt={technology.technology || "Technology Logo"}
                className="object-contain"
                priority={true}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
