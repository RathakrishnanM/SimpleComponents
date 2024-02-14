import React, { useState, useEffect } from "react";

export default function Responsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call the function once to set the initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  return (
    <div className="App">{isMobile ? <MobileView /> : <DesktopView />}</div>
  );
}

function MobileView() {
  return <h1>Mobile View</h1>;
}

function DesktopView() {
  return <h1>Desktop View</h1>;
}
