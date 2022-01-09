import Link from "next/link";
import {
  Budge,
  StartedCardColorContent,
  StartedCardContainer,
  StartedCardContent,
  StartedCardLink,
  StartedCardNumber,
  StartedCardTitle,
} from "./startedcard.styled";
interface Props {
  number: number;
  title: string;
  color: string;
  content1: string;
  content2: string;
  content3: string;
  button: string;
}

const StartedCard = (props: Props) => {
  return (
    <StartedCardContainer>
      <StartedCardNumber color={props.color}>
        <Budge>{props.number}</Budge>
      </StartedCardNumber>
      <StartedCardTitle color={props.color}> {props.title}</StartedCardTitle>
      <StartedCardContent>
        {props.content1}
        <StartedCardColorContent color={props.color}>
          {props.content2}
        </StartedCardColorContent>
        {props.content3}
      </StartedCardContent>
      <Link href="#">
        <StartedCardLink color={props.color}>{props.button}</StartedCardLink>
      </Link>
    </StartedCardContainer>
  );
};

export default StartedCard;
