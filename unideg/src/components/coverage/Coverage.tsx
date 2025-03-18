import React from "react";
import { CoverageList } from "../../config/constants";
import { Row } from "../layouts/row_column/RowColumn";
import styles from "./Coverage.module.css";
import classNames from "classnames";

interface CoverageProps {
  className?: string;
}
interface CoverageItemProps {
  label: string;
  value: string;
  name: string;
}

export const CoverageItems: React.FC<CoverageItemProps> = ({
  label,
  value,
  name,
}) => {
  const css = classNames(styles.item, styles[label]);
  return (
    <div className={css}>
      {/* <div className={styles.blur}> */}
      <h3>{value}</h3>
      <div className={styles.label}>{name}</div>
      {/* </div> */}
    </div>
  );
};

const Coverage: React.FC<CoverageProps> = () => {
  return (
    <Row className={styles.coverage}>
      {CoverageList.map((item, index) => (
        <CoverageItems {...item} key={index} />
      ))}
    </Row>
  );
};

export default Coverage;
