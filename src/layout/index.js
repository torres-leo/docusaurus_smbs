import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Docs from "../views/Docs";

const Layout = () => {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Docs />}/>

        </Routes>
        <Footer/>
      </Router>
    </Fragment>
  );
};

export default Layout;
