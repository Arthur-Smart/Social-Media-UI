import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './message.css'

function Message({socket, name, location, room, setChats}) {
  
  const [message, setMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);
  console.log(message)
  
  const sendMessage = async () => {
    if(message !==""){
    const messageDetails = {
      name,
      message,
      location,
      room,
      time:new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    }
  await  socket.emit('text', messageDetails);
  
    }
  setMessage('');
  }

  React.useEffect(() => {
    socket.on("recieve-text", (data) =>{
      setMessageList((prev) => [...prev, data])
    })
  },[socket])

  const exitGroup = () => {
   setChats(false)
  }

  return (
    <div className='user--message-wrapper'>
    <div className='message--header'>
    <p className='header-text'>Enjoy Chatting</p>
    <h1 className='leave' onClick={exitGroup}>Exit Group</h1></div>
     <div className='messages--wrapper'>
     <ScrollToBottom className='scroll' >
     {messageList?.map(msg => (
       <>
        <div className='sender--container'>
        <div className={msg.name === name? 'sender-wrapper right' : 'sender-wrapper'}>
     <div className={msg.name === name? 'sender--message right' : 'sender--message'}>
          <p>{msg.message}</p>
          </div>
          <p style={{marginTop:'-7px'}}> <b>{msg.name !== name && 'From'} </b>{msg.name} {msg.time} Messaging from {msg.location}</p>
          </div>
          </div>
       </>
     ))}
     </ScrollToBottom>
      
      </div>
      <div className='send-message-input'>
      <input type='text' value={message} className='text-input' placeholder='Type to start chatting...'
       onChange={e => setMessage(e.target.value)}
       onKeyPress={(e) => {
         e.key  === "Enter" && sendMessage();
       }}
      />
      <button className='send--message--btn' onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Message