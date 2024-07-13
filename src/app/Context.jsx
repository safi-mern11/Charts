"use client";
import { createContext, useState } from "react";

// Create a context object
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  // Define the state or data you want to share
  const [product1Visiability, setproduct1Visiability] = useState(true);
  const [product2Visiability, setproduct2Visiability] = useState(true);
  const [product3Visiability, setproduct3Visiability] = useState(true);
  return (
    <MyContext.Provider
      value={{
        product1Visiability,
        setproduct1Visiability,
        product2Visiability,
        setproduct2Visiability,
        product3Visiability,
        setproduct3Visiability,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
