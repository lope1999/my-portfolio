import { ReactNode } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
