import React from "react";
import Button from "../ui/Button";

interface HeroProps {
  className?: string;
}
const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h2>United Degree</h2>
      <p>
        Navigate the complex world of medical school admissions with
        personalized guidance, comprehensive resources, and expert support for
        international opportunities.
      </p>
      <Button label="Find A School" />
      <Button label="How it works" />
    </div>
  );
};

export default Hero;
