import React, { useContext } from 'react';
import Icon from '../Icon';
import Image from '../Image';
import Logo from '../../assets/brand/logo.jpeg';
import Search from '../Search';
import AppContext from '../context/AppProvider';
import BurgerCore from '../BurgerCore';

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
			<BurgerCore />
		</nav>
	);
};

export default ResponsiveNav;
