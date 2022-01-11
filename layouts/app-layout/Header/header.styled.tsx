import styled from "styled-components";
// import Image from "next/image";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 76px;
  max-width: 1048px;
  margin: auto;
  margin-bottom: 127px;
  background-color: #001e3c;
  @media screen and (max-width: 768px) {
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 129px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  width: 167px;
  gap: 0.5rem;
`;

// export const Spin = styled(Image)`
//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
//   animation: spin 12s linear infinite;
// `;

export const BrandName = styled.span`
  font-weight: 600;
  font-size: 22px;
`;

export const Status = styled.div`
  display: flex;
  font-size: 14px;
  font-family: "Ubuntu Mono", monospace;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    grid-row: 2;
    grid-column: 1 / span 2;
    justify-content: space-around;
    margin: 16px 4px;
  }
`;

export const Tokens = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

interface Props {
  color: string;
}

export const TokenText = styled.span<Props>`
  color: ${(props) => props.color};
`;

export const Token = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Launch = styled.a`
  border: solid 1px #90caf9;
  padding: 8px 32px;
  background-color: #007fff;
  border-radius: 5px;
  color: white;
  transition: all 0.3s ease-in-out;
  text-align: center;
  cursor: pointer;
`;
