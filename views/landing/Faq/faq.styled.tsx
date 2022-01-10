import styled from "styled-components";

export const FaqContainer = styled.div`
  padding-top: 119px;
  padding-bottom: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001e3c;
  @media screen and (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const FaqTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e2e8f0;
  margin: 0;
`;

export const FaqSubTitle = styled.span`
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #90caf9;
`;

export const FaqLink = styled.a`
  color: #9f7aea;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  cursor: pointer;
`;

export const FaqContent = styled.div`
  margin-top: 86px;
  max-width: 1048px;
  margin: auto;
  width: 100%;
`;

export const AccordionGroup = styled.div`
  margin-top: 86px;
  max-width: 1048px;
  width: 100%;
`;

export const AccordionColorText = styled.span`
  color: #9f7aea;
`;

export const AccordionLinkText = styled.a`
  color: #9f7aea;
  cursor: pointer;
`;
