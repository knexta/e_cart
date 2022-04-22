import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
