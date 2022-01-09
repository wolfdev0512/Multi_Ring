import React from "react";
import {
  StartedCardGroup,
  StartedContainer,
  StartedSubTitle,
  StartedTitle,
} from "./started.styled";
import { cards } from "./cards";
import StartedCard from "../../../components/Cards/Started";

const Started = () => {
  return (
    <StartedContainer>
      <StartedTitle>Getting Started With TIDAL</StartedTitle>
      <StartedSubTitle>
        Three easy steps to earn lifetime rewards
      </StartedSubTitle>
      <StartedCardGroup>
        {cards.map((item, index) => (
          <StartedCard
            key={index}
            number={index + 1}
            color={item.color}
            title={item.title}
            content1={item.content1}
            content2={item.content2}
            content3={item.content3}
            button={item.button}
          />
        ))}
      </StartedCardGroup>
    </StartedContainer>
  );
};

export default Started;
