import React from 'react';
import Icon from '../Icon';
import Image from '../Image';
import Logo from '../../assets/brand/logo.jpeg';
import Search from '../Search';

const ResponsiveNav = () => {
	return (
		<nav className='ResponsiveNav'>
			<div className='ResponsiveNav-content'>
				<div className='ResponsiveNav-left'>
					<Icon className='fa-solid fa-bars ResponsiveNav-icon' />
					<Image alt='logo' src={Logo} className='ResponsiveNav-logo' />
				</div>
				<Search />
			</div>
		</nav>
	);
};

export default ResponsiveNav;
