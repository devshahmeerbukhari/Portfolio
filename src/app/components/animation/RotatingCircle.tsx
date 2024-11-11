// components/RotatingCircle.js
'use client'
import { motion } from 'framer-motion';


export default function RotatingCircle({technologies}:any) {
  const ServicesLogos = [
    
  ]
  return (
    <motion.div
      className="circle-container max-w-[300px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      {technologies.map((technology:any) => (
        <motion.div
        className="circle-item"
        key={technology._id}
        style={{
          transform: `rotate(${360}deg) translate(120px)`
        }}
      >
        <img src={`/path/to/logo${1 + 1}.png`} alt={`Logo ${1 + 1}`} />
      </motion.div>
      ))}
      {/* {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          className="circle-item"
          key={i}
          style={{
            transform: `rotate(${i * 60}deg) translate(120px)`
          }}
        >
          <img src={`/path/to/logo${i + 1}.png`} alt={`Logo ${i + 1}`} />
        </motion.div>
      ))} */}
    </motion.div>
  );
}
