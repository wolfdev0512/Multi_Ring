import styled from "styled-components";

export const StartedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 104px;
  padding-bottom: 113px;
  background-color: #071a2f;
`;

export const StartedTitle = styled.h2`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  color: #e2e8f0;
  margin: 0;
`;

export const StartedSubTitle = styled.span`
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #90caf9;
`;

export const StartedCardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 86px;
  gap: 26px;
  max-width: 1048px;
  width: 100%;
  padding: 8px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
  }
`;
