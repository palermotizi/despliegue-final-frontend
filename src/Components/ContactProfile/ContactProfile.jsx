import React, { useState } from 'react'
import './ContactProfile.css'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../Context/GlobalContext'


const ContactProfile = ({ contact }) => {
    const { handleDeleteContact, handleToggleFavorite } = useGlobalContext()
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [actionType, setActionType] = useState('')
    const [reportMessage, setReportMessage] = useState(false)


const handleBackClick = () => {
    navigate(-1)
}

const handleFavoriteClick = () => {
    handleToggleFavorite(contact.id)
}

const handleDeleteClick = () => {
    setActionType('eliminar')
    setShowConfirmation(true)
}

const handleReportClick = () => {
    setActionType('reportar')
    setShowConfirmation(true)
}

const handleConfirm = () => {
    if (actionType === 'eliminar') {
        handleDeleteContact(contact.id)
    } else if (actionType === 'reportar') {
        setShowConfirmation(false)
            setReportMessage(true)
            setTimeout(() => setReportMessage(false), 3000)
    }
    setShowConfirmation(false)
}

const handleCancel = () => {
    setShowConfirmation(false)
}



  return (
        <div className="profile-content">
            <div className="profile-topbar">
                <button onClick={handleBackClick}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button>
                <i className="bi bi-three-dots-vertical"></i>
                </button>
            </div>

                <div className="profile-profile-pic">
                    <img src={contact.thumbnail} className="profile-pic" alt="profile-pic" />
                </div>
                <h3 className="profile-contact-name">{contact.nombre} {contact.apellido}</h3>

            <div className="profile-icons">
                <button>
                    <i className="bi bi-telephone">Llamar</i>
                </button>
                <button>
                    <i className="bi bi-camera-video">Video</i>
                </button>
                <button>
                    <i className="bi bi-search">Buscar</i>
                </button>
                <button>
                    <i className="bi bi-images">Archivos</i>
                </button>
            </div>

            <div className='profile-options'>
                <button className='profile-favorite' onClick={handleFavoriteClick}>
                    <i className={`bi ${contact.isFavorite ? 'bi-heart-fill favorite' : 'bi-heart'}`}> 
                    </i>
                        {contact.isFavorite ? ' Favoritos' : ' Añadir a favoritos'}
                </button>
                <button className="delete-button" onClick={handleDeleteClick}>
                    <i className="bi bi-trash"> </i>
                    Eliminar
                </button>
                <button className='delete-button' onClick={handleReportClick}>
                    <i className="bi bi-hand-thumbs-down"></i>
                    Reportar 
                </button>
            </div>
            {showConfirmation && (
                <div className="confirmation-dialog-container">
                    <div className="confirmation-dialog">
                        <p>¿Estás seguro de que deseas {actionType} este contacto?</p>
                        <div className="actions">
                            <button onClick={handleConfirm}>Sí</button>
                            <button onClick={handleCancel}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {reportMessage && (
                <div className="report-message">
                    <p>Contacto reportado</p>
                </div>
            )}
        </div>
  )
}

export default ContactProfile