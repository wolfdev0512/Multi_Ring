import styled from "styled-components";

interface Props {
  color: string;
}

export const VisionContainer = styled.div`
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #071a2f;
`;

export const VisionTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e2e8f0;
  margin: 0;
`;

export const VisionSubTitle = styled.span`
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #90caf9;
`;

export const VisionContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1048px;
  width: 100%;
  margin-top: 94px;
  margin-bottom: 83px;
  padding: 8px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentTextGroup = styled.div`
  width: 491px;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContentText = styled.div`
  color: #dae0e8;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
`;

export const VisionTextTitle = styled.div<Props>`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: ${(props) => props.color};
`;

export const VisionTextContent = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #e2e8f0;
  margin-bottom: 38px;
  display: block;
`;

export const ContentDiagram = styled.div`
  @keyframes float {
    0% {
      transform: translatey(20px);
    }
    50% {
      transform: translatey(-30px);
    }
    100% {
      transform: translatey(20px);
    }
  }
  animation: float 6s ease-in-out infinite;
`;

export const DiagramShadow = styled.div`
  @keyframes float-shadow {
    0% {
      box-shadow: 0px 30px 19px -4px rgba(0, 0, 0, 0.4);
    }
    50% {
      box-shadow: 0px 30px 19px -4px rgba(0, 0, 0, 0.3);
    }
    100% {
      box-shadow: 0px 30px 19px -4px rgba(0, 0, 0, 0.4);
    }
  }
  height: 23px;
  box-shadow: 0px 30px 19px -4px rgb(0 0 0 / 40%);
  animation: float-shadow 6s ease-in-out infinite;
`;

export const VisionChipHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #90caf9;
  margin-bottom: 15px;
`;

export const VisionChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 45px;
  margin-bottom: 110px;
`;
