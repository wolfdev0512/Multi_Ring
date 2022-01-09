import Link from "next/link";
import Accordion from "../../../components/Accordion";
import {
  AccordionGroup,
  FaqContainer,
  FaqLink,
  FaqSubTitle,
  FaqTitle,
} from "./faq.styled";
import { accordions } from "./accordions";

const Faq = () => {
  return (
    <FaqContainer>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqSubTitle>
        Join us on
        <Link href="#">
          <FaqLink> Discord </FaqLink>
        </Link>
        if your question is not answered below
      </FaqSubTitle>
      <AccordionGroup>
        {accordions.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content1={item.content1}
            content2={item.content2}
          />
        ))}
      </AccordionGroup>
    </FaqContainer>
  );
};

export default Faq;
