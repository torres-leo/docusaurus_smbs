import React, { useContext } from 'react';
import Icon from '../Icon';
import Image from '../Image';
import Logo from '../../assets/brand/logo.jpeg';
import Search from '../Search';
import AppContext from '../context/AppProvider';
import BurgerMenu from '../BurgerMenu';

const ResponsiveNav = () => {
	const { handleBurgerMenu } = useContext(AppContext);
	return (
		<nav className='ResponsiveNav'>
			<div className='ResponsiveNav-content'>
				<div className='ResponsiveNav-left'>
					<Icon className='fa-solid fa-bars ResponsiveNav-icon' onClick={handleBurgerMenu} />
					<Image alt='logo' src={Logo} className='ResponsiveNav-logo' />
				</div>
				<Search />
			</div>
			<BurgerMenu />
		</nav>
	);
};

export default ResponsiveNav;
