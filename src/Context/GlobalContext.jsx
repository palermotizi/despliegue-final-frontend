import React, { createContext, useEffect } from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuid} from "uuid"
import { DATA_CONTACTOS } from "../data/contactsData"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : DATA_CONTACTOS
  })
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  

  const handleDeleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    navigate('/')
  }

  const handleCreateContact = (contact) => {
    const newContact = {
      ...contact,
      id: uuid(),
      thumbnail: contact.thumbnail || '/default-avatar.jpg',
      isFavorite: false,
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    navigate('/')
  }

  const handleToggleFavorite = (id) => {
    const updatedContacts = contacts.map(contact => 
      contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
    )
    setContacts(updatedContacts)
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
  }

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  const filteredContacts = contacts.filter(contact => 
    contact.nombre && contact.nombre.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <GlobalContext.Provider value={{ contacts: filteredContacts, setSearchTerm, handleDeleteContact, handleCreateContact, handleToggleFavorite }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}


export default GlobalContext