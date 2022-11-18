import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const handleModal = () => {
		setVisible(!visible);
	};

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const handleBurgerMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<AppContext.Provider
			value={{ visible, setVisible, handleModal, handleDarkMode, darkMode, openMenu, setOpenMenu, handleBurgerMenu }}>
			{children}
		</AppContext.Provider>
	);
};

export { ContextProvider };
export default AppContext;

ContextProvider.propTypes = {
	children: PropTypes.node,
};
