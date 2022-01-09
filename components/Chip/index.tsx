import { ChipContainer } from "./chip.styled";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  content: string;
}

const Chip = (props: Props) => {
  return (
    <ChipContainer>
      <FaCheckCircle />
      {props.content}
    </ChipContainer>
  );
};

export default Chip;
