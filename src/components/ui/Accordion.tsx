import React from "react";
import styles from "./css/Accordion.module.css";
import classNames from "classnames";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { Column, Row } from "../layouts/row_column/RowColumn";

interface AccordionProps {
  className?: string;
  title: string;
  details: string;
  isOpen: boolean;
  onClick?: () => void;
}
const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  details,
  isOpen = false,
  onClick,
}) => {
  const css = classNames(styles.root, className, { [styles.active]: isOpen });
  return (
    <Column className={css}>
      <Row className={styles.title} onClick={onClick}>
        <div>{title}</div>{" "}
        {isOpen ? (
          <PiCaretUpBold className={styles.caret} />
        ) : (
          <PiCaretDownBold className={styles.caret} />
        )}
      </Row>
      {isOpen && <p className={styles.details}>{details}</p>}
    </Column>
  );
};
export default Accordion;
