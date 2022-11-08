import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"

const AppContext = createContext()

const ContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const handleModal = () => {
    setVisible(!visible)
  }

  return <AppContext.Provider value={{ visible, setVisible, handleModal }}>
    {children}
  </AppContext.Provider>
}

export { ContextProvider };
export default AppContext;

ContextProvider.propTypes = {
  children: PropTypes.node
}