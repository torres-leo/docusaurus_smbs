import { useContext } from 'react';
import AppContext from './components/context/AppProvider';
import Layout from './layout';

function App() {
	const { darkMode } = useContext(AppContext);

	const darkModeClass = () => {
		if (!darkMode) return '';
		return 'DarkMode';
	};

	return (
		<div className={`App ${darkModeClass()}`}>
			<Layout />
		</div>
	);
}

export default App;
