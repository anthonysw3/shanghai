import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useLayer = () => {
  const [layers, setLayers] = useState([]);

  const openLayer = ({
    component,
    title,
    footerComponent,
    callbacks,
    size,
    stack,
    anchor,
  }) => {
    const newLayer = {
      id: uuidv4(),
      component,
      title,
      footerComponent,
      callbacks,
      size,
      stack,
      anchor,
    };
    console.log("Opening new layer:", newLayer); // Debugging line
    setLayers((prevLayers) => [...prevLayers, newLayer]);
  };

  const closeLayer = () => {
    setLayers((prevLayers) => prevLayers.slice(0, -1)); // Remove the topmost layer
  };

  return { layers, openLayer, closeLayer };
};
