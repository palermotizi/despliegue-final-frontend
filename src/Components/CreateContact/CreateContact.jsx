import React, { useContext, useState } from 'react'
import GlobalContext  from '../../Context/GlobalContext'
import './CreateContact.css'

const CreateContact = ({ closeModal }) => {
    const { handleCreateContact } = useContext(GlobalContext) 
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newContact = {
            nombre: name,
            apellido: lastname,
            ultima_conexion: 'hoy',
            mensajes: []
        }
        handleCreateContact(newContact)
        closeModal()
    }


  return (
    <div className='create-contact-container'>
        <div className="create-contact">
            <h2>Crear nuevo contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input 
                        type="text" 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type='button' onClick={closeModal} className='button-close'>Cerrar</button>
                    <button type='submit' className='button-add'>Añadir</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateContact