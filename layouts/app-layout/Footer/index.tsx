import Link from "next/link";

import brand from "../../../assets/image/square-cpu-nologo.png";
import Image from "next/image";
import {
  Brand,
  BrandCopy,
  BrandName,
  Connect,
  Copyright,
  FooterContainer,
  FooterWrapper,
  Links,
} from "./footer.styled";

import { links1, links2 } from "./links";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <BrandCopy>
          <Brand>
            <Image src={brand} width={48} height={48} />
            <BrandName>TIDAL</BrandName>
          </Brand>
          <Copyright>© 2021 Copyright TIDAL.financial</Copyright>
        </BrandCopy>
        <Links>
          {links1.map((item, index) => (
            <Link href="#" key={index}>
              <Connect>{item.route}</Connect>
            </Link>
          ))}
        </Links>
        <Links>
          {links2.map((item, index) => (
            <Link href="#" key={index}>
              <Connect>{item.route}</Connect>
            </Link>
          ))}
        </Links>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
