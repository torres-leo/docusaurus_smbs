import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ title, description }) => {
	return (
		<Link to='/' className='Article'>
			<div className='Article-container'>
				<h3 className='Article-title'>
					<span>📄 {title}</span>
				</h3>
				<p className='Article-description'>{description}</p>
			</div>
		</Link>
	);
};

Article.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Article;
