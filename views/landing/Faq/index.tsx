import Link from "next/link";
import Accordion from "../../../components/Accordion";
import {
  AccordionColorText,
  AccordionGroup,
  AccordionLinkText,
  FaqContainer,
  FaqLink,
  FaqSubTitle,
  FaqTitle,
} from "./faq.styled";

const Faq = () => {
  return (
    <FaqContainer>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqSubTitle>
        Join us on
        <Link href="#">
          <FaqLink> Discord </FaqLink>
        </Link>
        if your question is not answered below
      </FaqSubTitle>
      <AccordionGroup>
        <Accordion title="What is the TIDAL token ?">
          TIDAL is a token that is designed to generate high-yield rewards for
          you, by combining more than 30 different DeFi yield protocols.
          <br />
          <br />
          This means that you will be able to take advantage of a large variety
          of yield-generating protocols, without having to find the best ones
          yourself and conduct due-diligence, and without having to pay for the
          fees of each platform.
        </Accordion>
        <Accordion title="How to get TIDAL lifetime rewards ?">
          TIDAL uses a simple yet innovative mechanism to redistribute the yield
          while supporting the growth of the token: the TIDAL-nodes.
          <br />
          <br />
          You can create a TIDAL-node with 10 TIDAL tokens. Once your node is
          created, it can’t be undone and it generates lifetime returns in TIDAL
          tokens for you.
        </Accordion>
        <Accordion title="What happens to the 10 TIDAL used to create a node ?">
          When a TIDAL-node is created, 10 TIDAL are transferred to the rewards
          pool, 1 TIDAL is added to the liquidity pool as 50% TIDAL and 50% BNB,
          and 2 TIDAL are transferred to the marketing/team wallet to work on
          the stabilization of the whole protocol, and the token growth.
        </Accordion>
        <Accordion title="Which DeFi yield protocols are currently used by TIDAL ?">
          TIDAL has just been launched (this means that you are still very
          early) so our current focus is to work on the
          <AccordionColorText> stability and growth of </AccordionColorText>
          TIDAL, leveraging its powerful tokenomics designed for steady growth.
          <br />
          <br />
          The next step of our roadmap is to begin navigating between different
          DeFi yield protocols. That being said, you can receive very high
          lifetime returns by creating TIDAL-nodes.
        </Accordion>
        <Accordion title="Why is TIDAL on the Binance Smart Chain?">
          Our goal is to bring DeFi into the average household. Ethereum's high
          gas fees make it impossible for most people to access the Ethereum
          network.
          <br />
          <br />
          We want TIDAL to be
          <AccordionColorText> accessible to everyone </AccordionColorText>,
          including smallholders, so we chose to be on the Binance Smart Chain.
          However, this does not prevent us from taking advantage of DeFi yield
          protocols on Ethereum.
        </Accordion>
        <Accordion title="Where can I buy TIDAL and where can I create my TIDAL-nodes ?">
          You can easily buy TIDAL on PancakeSwap by{" "}
          <Link href="#">
            <AccordionLinkText> clicking on this link </AccordionLinkText>
          </Link>
          .
          <br />
          <br />
          The contract address of the TIDAL token is :<br />
          NA
          <br />
          <br />
          You can create your Tidal-nodes and collect your Tidal rewards on our
          web app: NA Click here to go to the web app.
          <Link href="/treasury.thor.financial">
            <AccordionLinkText> Click here </AccordionLinkText>
          </Link>
          to go to the web app.
        </Accordion>
      </AccordionGroup>
    </FaqContainer>
  );
};

export default Faq;
