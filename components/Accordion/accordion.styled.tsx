import styled from "styled-components";

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #071a2f;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  font-size: 16px;
  line-height: 22px;
  color: #cbd5e0;
  cursor: pointer;
  :hover {
    color: #90caf9;
    border-bottom: solid 1px #265d97;
    background-color: #132f4c;
  }
`;

export const AccordionContent = styled.div<{ isActive: boolean }>`
  padding: 0 18px;
  background-color: #132f4c;
  transition: all 0.5s;
  transform: scaleY(${({ isActive }) => (isActive ? 1 : 0)});
  max-height: ${({ isActive }) => (isActive ? "500px" : 0)};
  transform-origin: top center;
`;

export const AccordionText = styled.p`
  margin: 0;
  padding: 8px 0;
`;
