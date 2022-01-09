import Link from "next/link";

import { BannerContent } from "./banner.styled";

const Banner = () => {
  return (
    <Link href="#">
      <BannerContent>
        xTIDAL IS NOW ON AVALANCHE —&gt; xTIDAL.financial Go to and Get $XTIDAL
        with AVAX
      </BannerContent>
    </Link>
  );
};

export default Banner;
