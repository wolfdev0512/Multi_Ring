import styled from "styled-components";

interface Props {
  color: string;
}

export const StartedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 336px;
  background: #132f4c;
  border-radius: 8px;
  border: 1px solid #265d97;
  box-shadow: 0px 4px 12px rgb(0 0 0 / 15%);
  :hover {
    box-shadow: 0px 0px 5px white;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StartedCardNumber = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 33px auto;
  border: solid 2px white;
  border-radius: 50%;
  border-color: ${(props) => props.color};
`;

export const Budge = styled.span`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const StartedCardTitle = styled.div<Props>`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

export const StartedCardContent = styled.p`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #e2e8f0;
  height: 100px;
  margin: 0 20px;
  margin-top: 19px;
  margin-bottom: 63px;
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const StartedCardColorContent = styled.span<Props>`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  color: ${(props) => props.color};
`;

export const StartedCardLink = styled.a<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  width: 158px;
  height: 34px;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #e2e8f0;
  background-color: transparent;
  border: solid 1px white;
  border-radius: 8px;
  margin-bottom: 25px;
  border-color: ${(props) => props.color};
  cursor: pointer;
`;
