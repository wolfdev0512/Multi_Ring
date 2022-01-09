import React, { useState } from "react";
import {
  AccordionButton,
  AccordionContent,
  AccordionText,
} from "./accordion.styled";

interface Props {
  title: string;
  content1: string;
  content2: string;
  content3?: string;
}

const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <AccordionButton
        onClick={() => setIsActive(!isActive)}
        isActive={isActive}
      >
        <div>{isActive ? " - " : " + "}</div>
        <div>{props.title}</div>
      </AccordionButton>
      <AccordionContent isActive={isActive}>
        <AccordionText isActive={isActive}>
          {props.content1}
          <br />
          <br />
          {props.content2}
        </AccordionText>
      </AccordionContent>
    </>
  );
};

export default Accordion;
