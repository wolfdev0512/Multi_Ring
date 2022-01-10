import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #001e3c;
  padding: 8px;
`;

export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 42px;
  margin-top: 0;
  text-align: center;
`;

export const HeroSubTitle = styled.span`
  background: linear-gradient(175deg, #4299e1 0%, #007fff 20%, #90caf9 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroImage = styled.div`
  margin-bottom: 74px;
  & > * {
    border-radius: 10%;
  }
`;

export const HeroText = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  line-height: 2rem;
`;

export const Percent = styled.span`
  font-size: xx-large;
  font-weight: bold;
  color: #66cf8e;
`;

export const HeroSubText = styled.div`
  font-size: 20px;
  color: #90caf9;
  margin-top: 13px;
  margin-bottom: 74px;
  text-align: center;
`;

export const Try = styled.a`
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
  :hover {
    color: #9f7aea;
  }
`;

export const HeroCardGroup = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
  margin-bottom: 92px;
  max-width: 1048px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
