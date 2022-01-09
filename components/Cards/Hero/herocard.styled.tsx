import styled from "styled-components";

interface Props {
  color: string;
}

export const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  text-align: center;
  background-color: #132f4c;
  padding: 10px;
  width: 25%;
  font-size: 18px;
  text-align: center;
  transition: all 0.1s;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 15%);
  :hover {
    box-shadow: 0px 0px 5px white;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroCardTitle = styled.span<Props>`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

export const HeroCardContent = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #e2e8f0;
  margin: 0;
`;
