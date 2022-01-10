import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const AccordionButton = styled.button<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => (props.isActive ? "#132f4c" : "#071a2f")};
  padding: 15px;
  font-size: 16px;
  line-height: 22px;
  border: 0;
  border-bottom: ${(props) => (props.isActive ? "solid 1px #265d97" : 0)};
  cursor: pointer;
  :hover {
    background-color: #132f4c;
    border-bottom: solid 1px #265d97;
  }
`;

export const AccordionTitle = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isActive ? "#66cf8e" : "#cbd5e0")};
  :hover {
    color: ${(props) => (props.isActive ? "#66cf8e" : "#90caf9")};
  }
`;

export const AccordionIcon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e0;
  transition: all 0.5s;
  transform: rotate(${(props) => (props.isActive ? "90deg" : 0)});
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
