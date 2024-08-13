import React, { useState } from 'react'
import './ContactProfile.css'



import { useNavigate } from 'react-router-dom'
const ContactProfile = ({ contact, onDelete }) => {

    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)


const handleBackClick = () => {
    navigate(-1)
}

const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite)
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
                <button onClick={handleFavoriteClick}>
                    <i className={`bi ${isFavorite ? 'bi-heart-fill favorite' : 'bi-heart'}`}> 
                    </i>
                        {isFavorite ? ' Favoritos' : ' Añadir a favoritos'}
                </button>
                <button onClick={() => onDelete(contact.id)}>
                    <i className="bi bi-trash"> </i>
                    Eliminar
                </button>
                <button>
                    <i className="bi bi-hand-thumbs-down"></i>
                    Reportar 
                </button>
            </div>
        </div>
  )
}

export default ContactProfile