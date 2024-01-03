import React, { useRef } from "react";
import { useInView } from "framer-motion";
import '../pages/Layout/style.css'
export default function SeactionMotion({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  return (
    <section ref={ref}>
      <span
      className="block transform -translate-x-100 opacity-0"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
