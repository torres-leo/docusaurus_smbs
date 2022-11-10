import PropTypes from 'prop-types';
import Icon from '../Icon';

const Section = ({ children, title }) => {
  return (
    <div className='Section'>
      <div className='Section-breadcrumb'>
        <div className='Section-icon'>
          <Icon className="fa-solid fa-house" />
        </div>
        <span>
          &gt;
        </span>
        <span>Advance Guides</span>
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
