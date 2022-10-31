import { Link } from "react-router-dom";
import Icon from "../Icon";
import Image from "../Image";
import Logo from "../../assets/brand/logo.jpeg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-links">
          <div className="Footer-section">
            <p className="Footer-title">Learn</p>
            <ul className="Footer-list">
              <li>
                <Link className="Footer-item" to="/">
                  <span>Introduction</span>
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Installation</span>
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Migration from v1 to v2</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="Footer-section">
            <p className="Footer-title">Community</p>
            <ul className="Footer-list">
              <li>
                <Link className="Footer-item" to="/">
                  <span>Stack Overflow</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Feature Request</span>
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Discord</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Help</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="Footer-section">
            <p className="Footer-title">More</p>
            <ul className="Footer-list">
              <li>
                <Link className="Footer-item" to="/">
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Changelog</span>
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>GitHub</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Twitter</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="Footer-section">
            <p className="Footer-title">Legal</p>
            <ul className="Footer-list">
              <li>
                <Link className="Footer-item" to="/">
                  <span>Privacy</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Terms</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Data Policy</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
              <li>
                <Link className="Footer-item" to="/">
                  <span>Cookie Policy</span>
                  <Icon className="fa-light fa-arrow-up-right-from-square Footer-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-copyright">
          <Image alt="logo" className="Footer-image" src={Logo} />
          <p>
            Copyright © 2022 Meta Platforms, Inc. Built with Docusaurus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
