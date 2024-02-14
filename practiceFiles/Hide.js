import React, { useState } from "react";

export default function Hide() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Click the Button below</h2>
      <button onClick={toggleVisibility}>Hide and Visibility</button>
      {isVisible && <MyComponent />}
    </div>
  );
}

function MyComponent() {
  return <div>This is a component</div>;
}
