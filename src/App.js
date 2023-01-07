import React, { useState } from 'react'
import { ModalWindow } from './ModalWindow'
import './index.scss'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpenModal(true)}>
        ✨ Открыть окно
      </button>
      {openModal && (
        <ModalWindow setOpenModal={setOpenModal}>
          <h2>Это модалка :|</h2>
        </ModalWindow>
      )}
    </div>
  )
}

export default App
