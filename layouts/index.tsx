import { Header, Footer } from "./app-layout/index";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
