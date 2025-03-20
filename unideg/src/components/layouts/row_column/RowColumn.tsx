import styles from "./RowColumn.module.css";
import classNames from "classnames";

interface RowColumnProps {
  children: React.ReactNode;
  className?: string;
}

export const Row: React.FC<RowColumnProps> = ({ children, className }) => {
  const css = classNames(styles.row, className);
  return <div className={css}>{children}</div>;
};

export const Column: React.FC<RowColumnProps> = ({ children, className }) => {
  const css = classNames(styles.column, className);
  return <div className={css}>{children}</div>;
};
