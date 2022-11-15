import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const Section = ({ children, title }) => {
  return (
    <div className='Section'>
      <div className='Section-breadcrumb'>
        <Link to="#" className='Section-breadcrumbLink'>
          <Icon className="fa-solid fa-house " />
        </Link>
        <span className='Section-breadcrumbChevron' />
        <p className='Section-breadcrumbTitle'>Advanced Guides</p>
      </div>
      <p className='Section-version'>Version: 2.1.0</p>
      <h2 className='Section-title'>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Section;
