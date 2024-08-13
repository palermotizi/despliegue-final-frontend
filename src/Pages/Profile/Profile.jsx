import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContactProfile } from '../../Components'
import './Profile.css'
import GlobalContext from '../../Context/GlobalContext'

const Profile = () => {
    const { contact_id } = useParams()
    const { contacts, handleDeleteContact } = useContext(GlobalContext)
    const contact = contacts.find(contact => contact.id.toString() === contact_id)

  return (
        <div className="profile-container">
            <ContactProfile contact={contact} onDelete={handleDeleteContact} />
        </div>
  )
}

export default Profile