import React from "react";

interface AccordionProps {
  className?: string;
  title: string;
  details: string;
  isOpen: boolean;
}
const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  details,
  isOpen = false,
}) => {
  return (
    <div className={`${className}`}>
      <div>{title}</div>
      {isOpen && <p>{details}</p>}
    </div>
  );
};
export default Accordion;
