import { useContext } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Image from "../Image";
import Logo from "../../assets/brand/logo.jpeg";
import Search from "../Search";
import Dropdown from "../Dropdown";
import Button from "../Button";
import AppContext from "../context/AppProvider";
import { useEffect } from "react";

const options = [
  {
    label: "English",
    path: "/",
  },
  {
    label: "Spanish",
    path: "/",
  },
];

const Navbar = () => {
  const { handleDarkMode, darkMode } = useContext(AppContext)

  const renderIcon = () => {
    if (!darkMode) return <Icon className="fa-regular fa-sun-bright icon-theme" onClick={handleDarkMode} />

    return <Icon className="fa-light fa-moon icon-theme" onClick={handleDarkMode} />
  }

  useEffect(() => { console.log("darkmode:", darkMode) }, [darkMode])

  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <li>
          <Image alt="logo" src={Logo} className="Navbar-logo" />
        </li>
        <li>
          <Link className="Navbar-items" to="/">
            Docs
          </Link>
        </li>
        <li>
          <Link className="Navbar-items" to="/">
            API
          </Link>
        </li>
        <li>
          <Link className="Navbar-items" to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link className="Navbar-items" to="/">
            Showcase
          </Link>
        </li>
        <li>
          <Link className="Navbar-items" to="/">
            Community
          </Link>
        </li>
      </ul>
      <ul className="Navbar-list">
        <Dropdown
          className="Navbar-items Submenu"
          options={options}
          defaultOption={options[0].label}
        />
        <li>
          <a href="https://gitlab.com/smbs-bootcamp">
            <Icon className="fa-brands fa-square-gitlab Navbar-icon" />
          </a>
        </li>
        <li>
          <Button className="Navbar-theme">
            {renderIcon()}
          </Button>
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
