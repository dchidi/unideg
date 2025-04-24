import React from "react";
import styles from "./css/TimeLine.module.css";
import classNames from "classnames";
import { FaCircle } from "react-icons/fa6";

interface TimeLineProps {
  className?: string;
  title: string;
  description?: string;
  date?: string;
  status: "pending" | "inprogress" | "completed";
}
const TimeLine: React.FC<TimeLineProps> = ({
  className,
  title,
  description,
  date,
  status,
}) => {
  const css = classNames(styles.root, className);
  return (
    <div className={css}>
      <FaCircle className={styles[status]} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
export default TimeLine;
