import React from "react";
import Accordion from "../ui/Accordion";
import { FeaturesList } from "../../config/constants";
import YoutubeVideoPlayer from "../ui/YoutubeVideoPlayer";

interface FeaturesProps {
  className?: string;
}
const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div>
        {FeaturesList.map((feature, index) => (
          <Accordion
            isOpen={true}
            title={feature.title}
            details={feature.description}
            key={index}
          />
        ))}
      </div>
      <YoutubeVideoPlayer />
    </div>
  );
};

export default Features;
