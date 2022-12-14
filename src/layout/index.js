import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Docs from '../views/Docs';

const Layout = () => {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<div className='Main'>
					<AppSidebar />
					<Routes>
						<Route path='/' element={<Docs />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</Fragment>
	);
};

export default Layout;
