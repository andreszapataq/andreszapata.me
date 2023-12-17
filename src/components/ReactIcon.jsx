import React, { useState } from "react";
import Figma from "./Icon/svg/Figma.svg";
import FigmaColor from "./Icon/svg/FigmaColor.svg";
import Illustrator from "./Icon/svg/Illustrator.svg"
import IllustratorColor from "./Icon/svg/IllustratorColor.svg"
import Astro from "./Icon/svg/Astro.svg";
import AstroColor from "./Icon/svg/AstroColor.svg";
import Tailwind from "./Icon/svg/Tailwind.svg";
import TailwindColor from "./Icon/svg/TailwindColor.svg";
import MongoDB from "./Icon/svg/MongoDB.svg";
import MongoDBColor from "./Icon/svg/MongoDBColor.svg";
import AWS from "./Icon/svg/AWS.svg";
import AWSColor from "./Icon/svg/AWSColor.svg";
import Git from "./Icon/svg/Git.svg";
import GitColor from "./Icon/svg/GitColor.svg";
import JavaScript from "./Icon/svg/JavaScript.svg";
import JavaScriptColor from "./Icon/svg/JavaScriptColor.svg";
import ReactBlack from "./Icon/svg/React.svg";
import ReactColor from "./Icon/svg/ReactColor.svg";
import Node from "./Icon/svg/Node.svg";
import NodeColor from "./Icon/svg/NodeColor.svg";

const FigmaIcon = ({name, alt, title}) => {
  const selectIcon = {
    figma: {
      black: Figma,
      color: FigmaColor
    },
    illustrator: {
      black: Illustrator,
      color: IllustratorColor
    },
    astro: {
      black: Astro,
      color: AstroColor
    },
    tailwind: {
      black: Tailwind,
      color: TailwindColor
    },
    mongodb: {
      black: MongoDB,
      color: MongoDBColor
    },
    aws: {
      black: AWS,
      color: AWSColor
    },
    git: {
      black: Git,
      color: GitColor
    },
    javascript: {
      black: JavaScript,
      color: JavaScriptColor
    },
    react: {
      black: ReactBlack,
      color: ReactColor
    },
    node: {
      black: Node,
      color: NodeColor
    }
  }
  
  const theIcon = selectIcon[name]

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <div
        className="flex flex-col items-center lg:flex-row"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
        <div>
            {isMouseOver ? (
                <img src={theIcon.color} alt={alt} />
            ) : (
                <img src={theIcon.black} alt={alt} />
            )}
        </div>
        <p className="font-medium text-lg lg:ml-4">{title}</p>
    </div>
  );
}

export default FigmaIcon;
