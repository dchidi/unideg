import React from "react";
import styles from "./css/ProgramDetails.module.css";
import classNames from "classnames";
import { Column, Row } from "../layouts/row_column/RowColumn";
import Button from "./Button";

type ProgramDataProps = {
  id: string;
  degreeType: string;
  degree: string;
  studyDuration: string;
  description: string;
  highlights: string[];
};
interface ProgramDetailsProps {
  className?: string;
  data: ProgramDataProps;
}
const ProgramDetails: React.FC<ProgramDetailsProps> = ({ className, data }) => {
  const css = classNames(styles.program, className);

  return (
    <div className={css}>
      <Column>
        <Row className={styles.top}>
          <Column>
            <div className={styles.degreeType}>{data.degreeType}</div>
            <h3>{data.degree}</h3>
          </Column>
          <div className={styles.duration}>{data.studyDuration}</div>
        </Row>
        <p className={styles.description}>{data.description}</p>
        <h4>Program Highlights</h4>
        <ul className={styles.highlight}>
          {data.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Button
          onClick={() => {}}
          label="Apply Now"
          color="dark"
          className={styles.btn}
        />
      </Column>
    </div>
  );
};
export default ProgramDetails;
