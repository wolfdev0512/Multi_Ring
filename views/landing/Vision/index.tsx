import Image from "next/image";
import { contents } from "./contents";
import { chips } from "./chips";
import Chip from "../../../components/Chip";
import {
  ContentDiagram,
  ContentText,
  ContentTextGroup,
  DiagramShadow,
  VisionChipGroup,
  VisionChipHeader,
  VisionContainer,
  VisionContent,
  VisionSubTitle,
  VisionTextContent,
  VisionTextTitle,
  VisionTitle,
} from "./vision.styled";
import diagram from "../../../assets/image/diagram.png";

const Vision = () => {
  return (
    <VisionContainer>
      <VisionTitle>The TIDAL Network Vision</VisionTitle>
      <VisionSubTitle>
        An innovative step forward for passive income generation
      </VisionSubTitle>
      <VisionContent>
        <ContentTextGroup>
          {contents.map((item, index) => (
            <ContentText key={index}>
              <VisionTextTitle color={item.color}>{item.title}</VisionTextTitle>
              <VisionTextContent>{item.content}</VisionTextContent>
            </ContentText>
          ))}
        </ContentTextGroup>
        <div>
          <ContentDiagram>
            <Image src={diagram} width={398} height={289} />
          </ContentDiagram>
          <DiagramShadow />
        </div>
      </VisionContent>
      <VisionChipHeader>Benefits for TIDAL Network Members</VisionChipHeader>
      <VisionChipGroup>
        {chips.map((item, index) => (
          <Chip key={index} content={item.content}></Chip>
        ))}
      </VisionChipGroup>
    </VisionContainer>
  );
};

export default Vision;
