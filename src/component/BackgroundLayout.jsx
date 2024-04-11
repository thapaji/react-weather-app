import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";

export const BackgroundLayout = () => {
  const clear =
    "https://images.unsplash.com/photo-1709754725372-de81d462ad4b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const fog =
    "https://images.unsplash.com/photo-1524252500348-1bb07b83f3be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cloudy =
    "https://images.unsplash.com/photo-1500740516770-92bd004b996e?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rainy =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const snow =
    "https://images.unsplash.com/photo-1625336782957-11279ceceba6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const stormy =
    "https://images.unsplash.com/photo-1639279387104-9f0367bea7f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const sunny =
    "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const { weather } = useStateContext();
  // console.log(weather);
  const [image, setImage] = useState(clear);
  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(clear);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(fog);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(cloudy);
      } else if (imageString.toLowerCase().includes("rain")) {
        setImage(rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(snow);
      } else if (imageString.toLowerCase().includes("storm")) {
        setImage(stormy);
      } else if (imageString.toLowerCase().includes("sun")) {
        setImage(sunny);
      }
    }
  }, [weather]);

  return (
    <img src={image} alt="Weather Image" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
  );
};
