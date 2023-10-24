import React, { useState } from "react";
import Figma from "./Icon/Figma.svg";
import FigmaColor from "./Icon/FigmaColor.svg";

const FigmaIcon = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <div
        className="flex"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
        <div>
            {isMouseOver ? (
                <img src={FigmaColor} alt="FigmaColor" />
            ) : (
                <img src={Figma} alt="Figma" />
            )}
        </div>
        <p className="font-medium text-lg ml-4">UX/UI</p>
    </div>
  );
}

export default FigmaIcon;
