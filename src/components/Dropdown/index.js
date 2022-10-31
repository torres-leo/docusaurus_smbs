import Icon from "../Icon";
import { Link } from "react-router-dom";

const Dropdown = ({ options = [], label, className }) => {
  const renderItems = () => {
    if (!options.length) return <></>;
    return (
      <ul className="Dropdown">
        {options.map((option) => (
          <li className="Dropdown-item" key={option.label}>
            <Link className="Dropdown-link">{option.label}</Link>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <li className={className}>
      <Icon className="fa-light fa-language"/>
      English <Icon className="fa-solid fa-angle-down" />
      {renderItems()}
    </li>
  );
};

export default Dropdown;
