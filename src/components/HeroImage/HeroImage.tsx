import React from "react";
import "./HeroImage.css";

interface HeroImageProps {
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = () => {
  return <div className={"heroRoot"} />;
};
