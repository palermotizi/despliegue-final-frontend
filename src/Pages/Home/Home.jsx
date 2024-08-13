import React, { useContext, useState } from "react"
import ContactList from "../../Components/ContactList/ContactList"
import "./Home.css"
import GlobalContext from "../../Context/GlobalContext"
import CreateContact from "../../Components/CreateContact/CreateContact"

const Home = () => {
  const { contacts, setSearchTerm } = useContext(GlobalContext)
  const [searchInput, setSearchInput] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearchOnChange = (e) => {
    setSearchInput(e.target.value)
    setSearchTerm(e.target.value)
  }

  const handleSearchOnClick = () => {
    setSearchTerm(searchInput)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="home-whatsapp">
      <div className="home-top-bar">
        <h1 className="contact-title">Contactos</h1>

        <button className="add-button" onClick={openModal}>
          <p className="add-button-text">Nuevo contacto</p>
          <i className="bi bi-plus-lg"></i>
        </button>

        <div className="search-bar">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchOnChange}
            placeholder="Buscar Contactos"
            className="search-input"
          />

          <button className="search-button" onClick={handleSearchOnClick}>
            <i className="bi bi-search"></i>
          </button>

        </div>
      </div>

      <div className="contact-list-container">
        {contacts.length > 0 ? (
          <ContactList contactos={contacts} />
        ) : (
          <div className="no-contacts-found">No se encontraron contactos</div>
        )}
      </div>
      {isModalOpen && <CreateContact closeModal={closeModal} />}
    </div>
  )
}

export default Home
