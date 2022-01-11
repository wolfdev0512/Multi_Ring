import styled from "styled-components";
// import Image from "next/image";

interface Props {
  color: string;
}

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001e3c;
  padding-top: 92px;
`;

export const WorkTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e2e8f0;
  margin: 0;
`;

export const WorkSubTitle = styled.span`
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #90caf9;
`;

export const WorkContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1048px;
  width: 100%;
  margin-top: 61px;
  margin-bottom: 126px;
  padding: 8px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WorkTextGroup = styled.div`
  width: 491px;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const WorkTextContent = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  display: block;
`;

export const ColorText = styled.span<Props>`
  color: ${(props) => props.color};
`;

export const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 45px;
  background: #132f4c;
  border: 1px solid #265d97;
  border-radius: 8px;
  padding: 13px 15px;
`;

export const Audit = styled.span`
  color: #66cf8e;
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WorkTIDAL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 274px;
`;

export const TIDALImage = styled.div`
  /* @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
  animation: pulse 3s ease-in-out infinite; */
  @media screen and (max-width: 768px) {
    height: 274px;
  }
`;

export const WhitePaper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #132f4c;
  width: 220px;
  height: 34px;
  margin: 41px auto;
  border: solid 1px white;
  border-radius: 8px;
  color: #e2e8f0;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
`;
