import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  AccordionButton,
  AccordionContent,
  AccordionIcon,
  AccordionText,
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
        <div>{props.title}</div>
      </AccordionButton>
      <AccordionContent isActive={isActive}>
        <AccordionText>{props.children}</AccordionText>
      </AccordionContent>
    </>
  );
};

export default Accordion;
