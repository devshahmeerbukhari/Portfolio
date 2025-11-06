"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function BlockchainNodes() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    })
      .then(() => {
        setReady(true);
      })
      .catch((err) => {
        console.error("tsParticles init error:", err);
      });
  }, []);

  if (!ready) return null;

  return (
    <div className="absolute min-h-full inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: { enable: true, delay: 0 },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 1 } },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#00f5a0" },
            links: {
              color: "#00f5a0",
              distance: 100,
              enable: true,
              opacity: 0.75,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 3,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              value: 100,
            },
            opacity: { value: 0.8 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}