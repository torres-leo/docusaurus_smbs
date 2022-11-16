import PropTypes from 'prop-types';

const Image = ({ alt, src, className }) => {
	return <img alt={alt} src={src} className={className} />;
};

Image.propTypes = {
	alt: PropTypes.string,
	src: PropTypes.string,
	className: PropTypes.string,
};

export default Image;
