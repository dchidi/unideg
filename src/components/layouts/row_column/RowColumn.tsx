import styles from "./RowColumn.module.css";
import classNames from "classnames";

interface RowColumnProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Row: React.FC<RowColumnProps> = ({
  children,
  className,
  onClick,
}) => {
  const css = classNames(styles.row, className);
  return (
    <div className={css} onClick={onClick}>
      {children}
    </div>
  );
};

export const Column: React.FC<RowColumnProps> = ({ children, className }) => {
  const css = classNames(styles.column, className);
  return <div className={css}>{children}</div>;
};
