import PropTypes from 'prop-types';

const Icon = ({ className, onClick }) => {
	return <i className={className} onClick={onClick} />;
};

Icon.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Icon;
