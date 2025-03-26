import { useState } from "react";
const useFeatures = (): {
  accordionIndex: number;
  updateAccordion: (index: number) => void;
} => {
  const [accordionIndex, setAccordionIndex] = useState(0);
  const updateAccordion = (index: number) => {
    setAccordionIndex(index === accordionIndex ? -1 : index);
  };
  return { accordionIndex, updateAccordion };
};
export default useFeatures;
