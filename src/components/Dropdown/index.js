import Icon from "../Icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = ({ options = [], className, defaultOption }) => {
  const [language, setLanguage] = useState(defaultOption);

  const renderOption = (value) => () => {
    setLanguage(value);
  };

  const renderItems = () => {
    if (!options.length) return <></>;
    return (
      <ul className="Dropdown">
        {options.map((option) => (
          <li
            className={`Dropdown-item ${option.label === language ? "Active" : ""}`}
            key={option.label}
            onClick={renderOption(option.label)}
          >
            <Link className="Dropdown-link" to={option.path}>
              <p className="Dropdown-text">{option.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <li className={className}>
      <div className="Dropdown-title">
        <Icon className="fa-light fa-language Dropdown-icon" />
        <span>{language}</span>
        <Icon className="fa-solid fa-angle-down" />
      </div>
      {renderItems()}
    </li>
  );
};

export default Dropdown;
