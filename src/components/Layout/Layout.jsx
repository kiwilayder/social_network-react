import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
   debugger;
   return (
      <>
         <Header />
         <Navbar />
         <Outlet />
      </>
   );
};

export default Layout;
