import React from 'react';
import Logo from '../assets/brand/logo.jpeg';
import { useSelector, useDispatch } from 'react-redux';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import { AppSidebarNav } from './AppSidebarNav';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';
import Image from './Image';

const AppSidebar = () => {
	const dispatch = useDispatch();
	const unfoldable = useSelector((state) => state.sidebarUnfoldable);
	const sidebarShow = useSelector((state) => state.sidebarShow);

	return (
		<CSidebar
			position='fixed'
			unfoldable={unfoldable}
			visible={sidebarShow}
			onVisibleChange={(visible) => {
				// dispatch({ type: 'set', sidebarShow: visible });
				dispatch({ type: 'set', sidebarShow: visible });
			}}
			className='Sidebar'
		>
			<CSidebarBrand className='Sidebar-brand' to='/'>
				<Image alt='logo' src={Logo} className='Sidebar-logo' />
			</CSidebarBrand>
			<CSidebarNav>
				<SimpleBar>
					<AppSidebarNav items={navigation} />
				</SimpleBar>
			</CSidebarNav>
			<CSidebarToggler
				className='d-none d-lg-flex'
				onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
			/>
		</CSidebar>
	);
};

export default React.memo(AppSidebar);