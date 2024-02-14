import React, { useState, useEffect } from "react";
import jsonData from "./Company.json";

export default function SimpleFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(jsonData);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from JSON:</h2>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.date} {item.revenue}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
