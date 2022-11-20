import React, { useContext } from 'react';
import Logo from '../assets/brand/logo.jpeg';

import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';
import { AppSidebarNav } from './AppSidebarNav';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';
import Image from './Image';
import AppContext from './context/AppProvider';

const ResponsiveSidebar = () => {
	const { openMenu } = useContext(AppContext);

	return (
		<CSidebar position='sticky' unfoldable={false} visible={openMenu} className='Sidebar responsive'>
			<CSidebarBrand className='Sidebar-brand' to='/'>
				<Image alt='logo' src={Logo} className='Sidebar-logo' />
			</CSidebarBrand>
			<CSidebarNav>
				<SimpleBar>
					<AppSidebarNav items={navigation} />
				</SimpleBar>
			</CSidebarNav>
		</CSidebar>
	);
};

export default React.memo(ResponsiveSidebar);
