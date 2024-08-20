import React from 'react'
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { LowBar, TopBar } from '../../Components'
import MessageContainer from '../../Components/Messages/MessageContainer/MessageContainer'
import GlobalContext from '../../Context/GlobalContext'
import './Detail.css'

const Detail = () => {
  const { contact_id } = useParams()
  const { contacts } = useContext(GlobalContext)
  const contact = contacts.find(contact => contact.id.toString() === contact_id)
  const [messages, setMessages] = useState(contact ? contact.mensajes : [])

  const addMessage = (content) => {
    const newMessage = {
      author: 'yo',
      text: content,
      estado: 'entregado',
      day: 'hoy',
      id: messages.length + 1,
    }
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)

    if(contact) {
      contact.mensajes = updatedMessages
      const updatedContacts = contacts.map(c => c.id === contact.id ? { ...c, mensajes: updatedMessages } : c)
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))

    }
  }

  const getLastMessageDate = () => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      return lastMessage.day
    }
    return ''
  }

  if (!contact) {
    return <div>No se encontro el contacto</div>
  }

  return (
      <div className="whatsapp">
        <TopBar contactName={`${contact.nombre || ''} ${contact.apellido || ''}`.trim()}  contactImage={contact.thumbnail} contactId={contact.id}/>
        <div className="background">
          <img src="/background.jpg" alt="background" className='background-img' />
        </div>
        <div className="last-message-date">
        {getLastMessageDate()}
      </div>
        <MessageContainer messages={messages} />
        <LowBar addMessage={addMessage} />
      </div>
  )
}

export default Detail
