import React, { useContext } from 'react';
import { COffcanvas, COffcanvasHeader, COffcanvasBody } from '@coreui/react';
import AppContext from '../context/AppProvider';
import ResponsiveSidebar from '../ResponsiveSidebar';
import Image from '../Image';
import Logo from '../../assets/brand/logo.jpeg';
import Icon from '../Icon';
import Button from '../Button';

const BurgerCore = () => {
	const { openMenu, handleBurgerMenu, setOpenMenu, handleDarkMode, darkMode } = useContext(AppContext);

	const closeBurgerMenu = () => {
		setOpenMenu(false);
	};

	const renderIcon = () => {
		if (!darkMode) return <Icon className='fa-regular fa-sun-bright icon-theme' onClick={handleDarkMode} />;

		return <Icon className='fa-light fa-moon icon-theme' onClick={handleDarkMode} />;
	};

	return (
		<COffcanvas backdrop={openMenu} placement='start' portal={false} visible={openMenu} onHide={closeBurgerMenu}>
			<COffcanvasHeader>
				<div className='ResponsiveNav-head'>
					<Image src={Logo} alt='Logo' className='ResponsiveNav-logo menu' />
					<Button className='ResponsiveNav-theme'>{renderIcon()}</Button>
				</div>
				<Icon className='fa-solid fa-xmark ResponsiveNav-close' onClick={handleBurgerMenu} />
			</COffcanvasHeader>
			<COffcanvasBody>
				<ResponsiveSidebar />
			</COffcanvasBody>
		</COffcanvas>
	);
};

export default BurgerCore;
