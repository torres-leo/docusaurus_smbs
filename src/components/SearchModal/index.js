import React, { useContext, useCallback, useState, useEffect } from 'react';
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CButton } from '@coreui/react';
import AppContext from '../context/AppProvider';
import Input from '../Input';
import Icon from '../Icon';
import Image from '../Image';
import Logo from "../../assets/brand/logo.jpeg"

const SearchModal = () => {
  const { handleModal, visible, setVisible } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [deleteInput, setDeleteInput] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  const handleInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const clearInput = () => setInput('');

  useEffect(() => {
    if (input.length) return setDeleteInput(true);
    setDeleteInput(false);
  }, [input]);

  return (
    <CModal visible={visible} onClose={closeModal} className='Modal'>
      <CModalHeader>
        <CModalTitle>
          <form className='Modal-form'>
            <label>
              <Icon className='fa-regular fa-magnifying-glass Modal-icon' />
            </label>
            <Input type='text' className='Input' placeholder='Search docs' onChange={handleInput} value={input} />
            <label>
              <Icon className={`fa-solid fa-xmark delete ${deleteInput && 'show'}`} onClick={clearInput} />
            </label>
          </form>
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className='Modal-searched'>
          <div className="Modal-result">
            <p className="Modal-title">Docs</p>
            <div className='Modal-element'>
              <div className='Modal-file'>
                <Icon className="fa-regular fa-file fileIcon" />
                <p className='Modal-fileName'>Document </p>
              </div>
              <Icon className="fa-solid fa-arrow-right-to-bracket arrowIcon" />
            </div>
            <div className='Modal-element'>
              <div className='Modal-file'>
                <Icon className="child" />
                <Icon className="fa-regular fa-file fileIcon" />
                <p className='Modal-fileName'>Child </p>
              </div>
              <Icon className="fa-solid fa-arrow-right-to-bracket arrowIcon" />
            </div>
          </div>
        </div>
      </CModalBody>
      <CModalFooter>
        {/* <CButton color='secondary' onClick={handleModal}>
          Close
        </CButton> */}
        <Image alt='logo' src={Logo} className='Modal-logo' />

      </CModalFooter>
    </CModal >
  );
};

export default SearchModal;
