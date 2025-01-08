"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const professions: string[] = [
    "Front End Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Generative AI",
  ];

  const [currentDisplay, setCurrentDisplay] = useState<[number, string]>([
    4,
    "",
  ]);
  const [fadeClass, setFadeClass] = useState<string>("fade-in"); // Default to fade-in

  useEffect(() => {
    const updateProfession = () => {
      setFadeClass("fade-out"); // Start fade-out

      // Wait for the fade-out animation to complete before changing the profession
      setTimeout(() => {
        setCurrentDisplay((prevDisplay) => {
          const nextIndex = prevDisplay[0] === 4 ? 1 : prevDisplay[0] + 1;
          return [nextIndex, professions[nextIndex - 1]];
        });
        setFadeClass("fade-in"); // Start fade-in after profession update
      }, 500); // Match this duration with the CSS transition duration
    };

    const intervalId = setTimeout(updateProfession, 1000); // Update every 3 seconds

    return () => clearTimeout(intervalId); // Clean up the timeout on unmount
  }, [currentDisplay, professions]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      <h1 className="text-2xl font-bold text-6xl">
        Hi, I&apos;m Shahmeer <span className="text-[#915EFF]">Bukhari</span>
      </h1>
      <p className={`mt-3 text-blue-400 ${fadeClass} text-8xl min-h-[100px]`}>
        {currentDisplay[1]}
      </p>
    </div>
  );
}
