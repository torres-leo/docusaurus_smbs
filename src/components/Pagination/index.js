import { Link } from "react-router-dom";

const Pagination = ({ heading, title, path }) => {
  const renderDirection = () => {
    if (heading === "Previous") {
      return (
        <div className="Pagination">
          <span className="Pagination-heading">{heading}</span>
          <p className="Pagination-title">« {title}</p>
        </div>
      );
    }
    return (
        <div className="Pagination right">
          <span className="Pagination-heading">{heading}</span>
          <p className="Pagination-title">{title} »</p>
        </div>
      );

  };

  return <Link to={path} className="Pagination-link">{renderDirection()}</Link>;
};

export default Pagination;
