import React from 'react'
import './Messages.css'

const Messages = (props) => {
    const messageClass = props.author === 'yo' ? 'message-right' : 'message-left'
  
    const renderStatusIcon = () => {
        if (props.author === 'yo') {
            if (props.status === 'visto') {
                return <i className="bi bi-check-all" style={{ color: 'blue' }}></i>
              } else if (props.status === 'entregado') {
                return <i className="bi bi-check-all" style={{ color: 'gray' }}></i>
              } else {
                return <i className="bi bi-check" style={{ color: 'gray' }}></i>
              }
        }
    }
  
    return (
      <div className={`data ${messageClass}`}>
        <div className="author">{props.author}</div>
  
        <div className="content">{props.content}</div>
  
        <div className="date-status">
          {props.date} {renderStatusIcon()}
        </div>
      </div>
    )
  }

  export default Messages;

