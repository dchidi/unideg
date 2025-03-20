import React from "react";
import Accordion from "../ui/Accordion";
import { FeaturesList } from "../../config/constants";
import YoutubeVideoPlayer from "../ui/YoutubeVideoPlayer";
import { Column, Row } from "../layouts/row_column/RowColumn";
import styles from "./Features.module.css";

interface FeaturesProps {
  className?: string;
}
const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <Row className={`${className}`}>
      <Column className={styles.accordion}>
        {FeaturesList.map((feature, index) => (
          <Accordion
            isOpen={true}
            title={feature.title}
            details={feature.description}
            key={index}
          />
        ))}
      </Column>
      <YoutubeVideoPlayer className={styles.video} />
    </Row>
  );
};

export default Features;
