import React, { useRef } from "react";
import styles from "./css/Input.module.css";
import classNames from "classnames";

interface InputProps {
  className?: string;
  label?: string;
  type: string;
  onClick?: () => void;
  required?: boolean;
}

interface TextAreaProps {
  className?: string;
  label?: string;
  onClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  type,
  onClick = () => {},
  required = false,
}) => {
  const css = classNames(styles.root, className);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Focus the input element when the parent is clicked
    inputRef.current?.focus();
    onClick();
  };

  return (
    <div className={css} onClick={handleClick}>
      <div className={styles.label}>{label}</div>
      <input
        ref={inputRef}
        type={type}
        className={styles.input}
        required={required}
      />
    </div>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  onClick = () => {},
}) => {
  const css = classNames(styles.root, className);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    // Focus the input element when the parent is clicked
    inputRef.current?.focus();
    onClick();
  };

  return (
    <div className={css} onClick={handleClick}>
      <div className={styles.label}>{label}</div>
      <textarea ref={inputRef} className={styles.rootTextArea}></textarea>
    </div>
  );
};
