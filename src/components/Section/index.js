import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div className='Section'>
      <span className='Section-version'>Version: 2.1.0</span>
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
