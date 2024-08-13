import React from 'react'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = ({ contactos }) => {
  return (
    <div>
      {contactos.map(contact => (
            <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  )
}

export default ContactList