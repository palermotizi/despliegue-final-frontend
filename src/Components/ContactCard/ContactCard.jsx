import React from 'react'
import {Link} from 'react-router-dom'
import './ContactCard.css'

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-container">
      <Link to={`/detail/${contact.id}`} className='link'>
        <div className='contact'>
          <div className='profile-pic'>
            <img src={contact.thumbnail} alt="profile-pic" />
          </div>
          <div className="contact-info">
            <h3 className='contact-name'>{`${contact.nombre || ''} ${contact.apellido || ''}`.trim()}</h3>
            <span className='last-conection'>Última conexión: {contact.ultima_conexion}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ContactCard

