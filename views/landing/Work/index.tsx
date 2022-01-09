import Image from "next/image";
import Link from "next/link";
import {
  Audit,
  ColorText,
  ComingSoon,
  ImageGroup,
  TIDALImage,
  WhitePaper,
  WorkContainer,
  WorkContent,
  WorkTIDAL,
  WorkSubTitle,
  WorkTextContent,
  WorkTextGroup,
  WorkTitle,
} from "./work.styled";

import Certik from "../../../assets/image/certik.svg";
import Certik2 from "../../../assets/image/certik2.svg";
import TIDAL from "../../../assets/image/ring.png";

const Work = () => {
  return (
    <WorkContainer>
      <WorkTitle>How TIDAL Works</WorkTitle>
      <WorkSubTitle>
        10 TIDAL = 1 TIDAL-Node = 0.556 TIDAL a day. It’s that simple.
      </WorkSubTitle>
      <WorkContent>
        <WorkTextGroup>
          <WorkTextContent>
            The TIDAL protocol is designed around an innovative and powerful
            reward mechanism:
            <ColorText color="#4299e1"> the TIDAL-Node.</ColorText>
            <br />
            <br />
            TIDAL-nodes are the tools that allow you to
            <ColorText color="#9f7aea">
              {" "}
              generate high-yield LIFETIME rewards{" "}
            </ColorText>
            while reinforcing the sustainable growth of the token.
            <br />
            <br />
            This means
            <ColorText color="#ed64a6"> double rewards for you </ColorText>
            as the value of your rewards increase with the growth of the value
            of TIDAL.
          </WorkTextContent>
          <ComingSoon>
            <Audit>AUDIT COMING SOON</Audit>
            <ImageGroup>
              <Image src={Certik} />
              <Image src={Certik2} />
            </ImageGroup>
          </ComingSoon>
        </WorkTextGroup>
        <WorkTIDAL>
          <TIDALImage src={TIDAL} />
          <Link href="#">
            <WhitePaper>READ WHITEPAPER</WhitePaper>
          </Link>
        </WorkTIDAL>
      </WorkContent>
    </WorkContainer>
  );
};

export default Work;
