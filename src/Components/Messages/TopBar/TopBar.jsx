import React from 'react'
import './TopBar.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const TopBar = ({ contactName, contactImage, contactId }) => {
  const navigate = useNavigate()
const handleBackClick = () => {
  navigate(-1)
}
  return (
    <div className="top-bar">
      <div className="back-pic-name">
        <button className="back" onClick={handleBackClick}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <div className="contact-image">
          <img src={contactImage} alt={`${contactName} profile`}  />
        </div>

        <Link to={`/profile/${contactId}`} className='profile-link'>
          <span className='name'>
            {contactName}
          </span>
        </Link>
      </div>

      <div className="contact-call">
        <button className="videocall">
          <i className="bi bi-camera-video"></i>
        </button>
        <button className="phonecall">
          <i className="bi bi-telephone"></i>
        </button>
        <button className="three-dots">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </div>
  )
}

export default TopBar