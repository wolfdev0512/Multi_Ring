import styled from "styled-components";
import Image from "next/image";

export const FooterWrapper = styled.div`
  background-color: #071a2f;
  height: 200px;
  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1048px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BrandCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  gap: 0.5rem;
  font-size: larger;
`;

export const Spin = styled(Image)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 12s linear infinite;
`;

export const BrandName = styled.span`
  font-weight: 600;
  font-size: 22px;
`;

export const Copyright = styled.span`
  display: block;
  margin-top: 19px;
  width: 177px;
  height: 16px;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  color: #caced3;
`;

export const Links = styled.div`
  display: flex;
  & > :not(:last-child) {
    border-right: 1px solid #caced3;
  }
  & > a {
    padding: 0 8px;
  }
`;

export const Connect = styled.a`
  text-decoration: none;
  height: 22px;
  font-weight: 300 !important;
  font-size: 16px !important;
  line-height: 22px !important;
  color: #a0aec0;
  cursor: pointer;
  :hover {
    color: #90caf9;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 16px;
  }
`;
