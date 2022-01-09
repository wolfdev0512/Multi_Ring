import {
  HeroCardContainer,
  HeroCardContent,
  HeroCardTitle,
} from "./herocard.styled";

interface Props {
  color: string;
  title: string;
  content: string;
}

const HeroCard = (props: Props) => {
  return (
    <HeroCardContainer>
      <HeroCardTitle color={props.color}>{props.title}</HeroCardTitle>
      <HeroCardContent>{props.content}</HeroCardContent>
    </HeroCardContainer>
  );
};

export default HeroCard;
