import React from "react";
import Accordion from "../ui/Accordion";
import { FeaturesList } from "../../config/constants";
import YoutubeVideoPlayer from "../ui/YoutubeVideoPlayer";
import { Column, Row } from "../layouts/row_column/RowColumn";
import styles from "./Features.module.css";
import useFeatures from "../../hooks/useFeatures";

interface FeaturesProps {
  className?: string;
}
const Features: React.FC<FeaturesProps> = ({ className }) => {
  const { accordionIndex, updateAccordion } = useFeatures();
  return (
    <Column>
      <h3 className={styles.title}>Features</h3>
      <Row className={`${styles.root} ${className}`}>
        <Column className={styles.accordion}>
          {FeaturesList.map((feature, index) => (
            <Accordion
              isOpen={index === accordionIndex ? true : false}
              title={feature.title}
              details={feature.description}
              key={index}
              className={styles.accordionItem}
              onClick={() => updateAccordion(index)}
            />
          ))}
        </Column>
        <YoutubeVideoPlayer className={styles.video} videoId="cqTu-lmBVko" />
      </Row>
    </Column>
  );
};

export default Features;
