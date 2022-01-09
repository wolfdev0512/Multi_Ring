import styled from "styled-components";

export const BannerContent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007fff;
  color: white;
  height: 50px;
  cursor: pointer;
  font-weight: bold;
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    height: 70px;
  }
`;
