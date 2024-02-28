import React, { useEffect } from "react";

export default function MenusBar() {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.toggle("open");
      });
    });
    // Cleanup function
    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("click", () => {
          icon.classList.toggle("open");
        });
      });
    };
  }, []);
  return (
    <>
     
        <div className="icon nav-icon-5">
          <span></span>
          <span></span>
          <span></span>
        </div>
      
    </>
  );
}
