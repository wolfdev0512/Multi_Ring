import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const AccordionButton = styled.button<Props>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#132f4c" : "#071a2f")};
  color: #cbd5e0;
  padding: 15px;
  width: 100%;
  border: 0;
  border-bottom: ${(props) => (props.isActive ? "solid 1px #265d97" : 0)};
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  :hover {
    color: #90caf9;
    border-bottom: solid 1px #265d97;
    background-color: #132f4c;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AccordionContent = styled.div<Props>`
  padding: 0 18px;
  background-color: #132f4c;
  transition: all 0.5s;
  max-height: ${(props) => (props.isActive ? "500px" : 0)};
  transform: scaleY(${(props) => (props.isActive ? 1 : 0)});
`;

export const AccordionText = styled.p`
  margin: 0;
  padding: 8px 0;
`;
