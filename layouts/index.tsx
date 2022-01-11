import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Header, Footer } from "./app-layout/index";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const router = useRouter();
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (router.route === "/treasury.thor.financial") setFlag(false);
    else setFlag(true);
  }, [router.route]);

  return (
    <div>
      {flag ? <Header /> : ""}
      {props.children}
      {flag ? <Footer /> : ""}
    </div>
  );
};

export default Layout;
