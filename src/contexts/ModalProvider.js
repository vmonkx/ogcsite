import React, { useState, useContext } from "react"

const ModalContext = React.createContext()

const useModalWindow = () => {
  const modalContext = useContext(ModalContext)

  if (!modalContext) {
    throw new Error("useModalWindow must be used inside the ModalProvider")
  }

  return modalContext
}

function ModalProvider(props) {
  const [activeModal, setActiveModal] = useState(false)

  const toggleModal = () => {
    setActiveModal(prev => !prev)
  }

  const closeModal = () => {
    setActiveModal(false)
  }

  const value = {
    show: activeModal,
    toggle: toggleModal,
    close: closeModal,
  }

  return <ModalContext.Provider value={value} {...props} />
}

export { useModalWindow, ModalProvider }
