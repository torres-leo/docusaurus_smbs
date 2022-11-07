import React, { useContext } from 'react'
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CButton } from '@coreui/react'
import AppContext from '../context/AppProvider'
import Input from '../Input'
import Icon from '../Icon'

const SearchModal = () => {
  const { handleModal, visible, setVisible } = useContext(AppContext)

  const closeModal = () => {
    setVisible(false)
  }

  return (
    <CModal visible={visible} onClose={closeModal} className="Modal">
      <CModalHeader>
        <CModalTitle>
          <form className='Modal-form'>
            <label htmlFor="search">
              <Icon className="fa-regular fa-magnifying-glass Modal-icon" />
            </label>
            <Input type="search" className="Input" placeholder="Search docs" />
          </form>
        </CModalTitle>
      </CModalHeader>
      <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={handleModal}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default SearchModal