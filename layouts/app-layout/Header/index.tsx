import Link from "next/link";
import Image from "next/image";
import brand from "../../../assets/image/square-cpu-nologo.png";

import {
  Brand,
  BrandName,
  HeaderContainer,
  Launch,
  Status,
  Token,
  Tokens,
  TokenText,
} from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Brand>
        <Image src={brand} width={48} height={48} />
        <BrandName>TIDAl</BrandName>
      </Brand>
      <Status>
        <Tokens>
          <TokenText color="#cfbd66">0.37</TokenText>
          <Token>
            <TokenText color="#007fff">TIDAL</TokenText>
            <TokenText color="#dae0e8" style={{ margin: "0 4px" }}>
              /
            </TokenText>
            <TokenText color="#dae0e8">BNB</TokenText>
          </Token>
        </Tokens>
        <Tokens>
          <TokenText color="#66cf8e">200</TokenText>
          <Token>
            <TokenText color="#007fff">TIDAL</TokenText>
            <TokenText color="#dae0e8" style={{ margin: "0 4px" }}>
              /
            </TokenText>
            <TokenText color="#dae0e8">USD</TokenText>
          </Token>
        </Tokens>
        <Tokens>
          <TokenText color="#9f7aea">30000</TokenText>
          <Token>
            <TokenText color="#007fff">TIDAL</TokenText>
            <TokenText color="#dae0e8" style={{ margin: "0 4px" }}>
              -
            </TokenText>
            <TokenText color="#dae0e8">Nodes</TokenText>
          </Token>
        </Tokens>
      </Status>
      <Link href="#">
        <Launch>LAUNCH APP</Launch>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
