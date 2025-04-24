import styles from "./RowColumn.module.css";
import classNames from "classnames";
import React, { forwardRef } from "react";

interface RowColumnProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  // Add other props that might be passed to the div element
  [key: string]: any; // This allows any other HTML attributes
}

export const Row = forwardRef<HTMLDivElement, RowColumnProps>(
  ({ children, className, onClick, ...rest }, ref) => {
    const css = classNames(styles.row, className);
    return (
      <div className={css} onClick={onClick} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

export const Column = forwardRef<HTMLDivElement, RowColumnProps>(
  ({ children, className, ...rest }, ref) => {
    const css = classNames(styles.column, className);
    return (
      <div className={css} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

// Set display names for debugging purposes
Row.displayName = "Row";
Column.displayName = "Column";
