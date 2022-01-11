import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  AccordionButton,
  AccordionContent,
  AccordionIcon,
  AccordionText,
  AccordionTitle,
} from "./accordion.styled";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <AccordionButton
        onClick={() => setIsActive(!isActive)}
        isActive={isActive}
      >
        <AccordionIcon isActive={isActive}>
          <FaAngleRight />
        </AccordionIcon>
        <AccordionTitle isActive={isActive}>{props.title}</AccordionTitle>
      </AccordionButton>
      <AccordionContent>
        {isActive ? <AccordionText>{props.children}</AccordionText> : ""}
      </AccordionContent>
    </>
  );
};

export default Accordion;
