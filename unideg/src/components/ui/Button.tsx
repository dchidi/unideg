import React from "react";
import styles from "./css/Button.module.css";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  color?: "default" | "dark" | "primary";
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({
  className,
  iconLeft,
  iconRight,
  label,
  color = "default",
  onClick = () => {},
}) => {
  const css = classNames(styles.btn, styles[color], className);

  return (
    <button className={css} onClick={onClick}>
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};
export default Button;
