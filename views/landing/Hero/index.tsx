import Image from "next/image";
import {
  HeroSubTitle,
  HeroTitle,
  HeroCardGroup,
  HeroContainer,
  HeroImage,
  HeroSubText,
  HeroText,
  Percent,
  Try,
} from "./hero.styled";

import stage from "../../../assets/image/square-cpu-nologo.png";
import HeroCard from "../../../components/Cards/Hero";
import { cards } from "./cards";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Access the world of DeFi through a multi-chain
        <br />
        <HeroSubTitle>Yield Processing Node</HeroSubTitle>
      </HeroTitle>
      <HeroImage>
        <Image src={stage} width={356} height={356} />
      </HeroImage>
      <HeroText>
        Earn Lifetime Rewards of
        <Percent> 2600% APY </Percent>
      </HeroText>
      <HeroSubText>
        Only 10 TIDAL needed to get started -<Try>try it now!</Try>
      </HeroSubText>
      <HeroCardGroup>
        {cards.map((item, index) => (
          <HeroCard
            key={index}
            color={item.color}
            title={item.title}
            content={item.content}
          />
        ))}
      </HeroCardGroup>
    </HeroContainer>
  );
};

export default Hero;
