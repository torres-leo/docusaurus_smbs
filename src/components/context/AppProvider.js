import { createContext, useState } from "react";
import PropTypes from "prop-types"

const AppContext = createContext()

const ContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleModal = () => {
    setVisible(!visible)
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return <AppContext.Provider value={{ visible, setVisible, handleModal, handleDarkMode, darkMode }}>
    {children}
  </AppContext.Provider>
}

export { ContextProvider };
export default AppContext;

ContextProvider.propTypes = {
  children: PropTypes.node
}