/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React from 'react'
import './chat.css'
import io from 'socket.io-client'
import Footer from '../../footer/Footer'
import Message from '../../messages/Message'

const socket = io.connect("https://socket-io-5e4g.onrender.com/");

function Chat() {

  const [name, setName] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [location, setLocation] =React.useState('');
  const [chats, setChats] =React.useState(false);
  const [error, setError] =React.useState(false);
  
 
  const handleClick = () => { 
  if(name !=='' ,room !=='', location !==''){
    socket.emit('join', room)
    setChats(true);
  } else {
    setError(true)
  }
  }


  return (
    <div className='chat'>
    <div className='chat-wrapper'>
    <div className='rooms'>
    <h1>Welcome to the world of business | Education | Fun</h1>
   <p>Join a group to start chatting</p>
   <input className='room--imputs'
    type='text'
     placeholder='Username'
      onChange={((e) => setName(e.target.value))}/>

   <select className='select--room'
    placeholder='Choose Room'
    onChange={((e) => setRoom(e.target.value))}
    >
   <option value='business'>Business</option>
   <option value='technology'>Technology</option>
   <option value='education'>Education</option>
   <option value='medical'>Medical</option>
   <option value='encouragement'>Encouragement</option>
   </select>
   <input className='room--imputs'
    type='text'
     placeholder='Tag location'
     onChange={(e) => setLocation(e.target.value)}  
     />
   <button className='join--chat' onClick={handleClick}>Join</button>
   {error && (
     <p style={{textAlign:'center', fontSize:'bold'}}>Fill all the fields to continue <i class="fa-solid fa-triangle-exclamation"></i></p>
   )}
    </div>
    <div className='messages'>
    {chats ? (
  <Message socket={socket} name={name} location={location} room={room} chats={chats} setChats={setChats} />
    ) : (
      < div className='false-state'>
        <h1>Join A group to start chatting with Individuals</h1>
        <p style={{marginTop:'-10px', fontSize:'18px', color:'rgb(221, 68, 94)'}}>Connect with cool friends <i class="fa-solid fa-face-smile-wink"></i></p>
        <div className='chat-image'>
         <img src={require('../../assets/chatImg.jpg').default} alt=''/>
        </div>
      </div>
    )}
  
    </div>


    <div className='people'>
    <h5 style={{textAlign:'center'}}>Privilages you access</h5>
    <div className='chat-user'>
      <div className='chat--profile-pic'>
                <p style={{marginLeft:'10px', fontWeight:'bold'}}>Tech Goup</p>
              </div>
            <p>You get to interact with professionals in the field of technology.</p>
    </div>
    <div className='chat-user '>
      <div className='chat--profile-pic  pink'>
                <p style={{marginLeft:'10px', fontWeight:'bold' }}>Business zone</p>
              </div>
            <p>Free business Ideas as you chat and talk with business oriented people</p>
    </div>
    <div className='chat-user'>
      <div className='chat--profile-pic green'>
                <p style={{marginLeft:'10px', fontWeight:'bold' }}>Education</p>
              </div>
            <p>Education never cease learn from expert in the field you are interested with</p>
    </div>
    <div className='chat-user'>
      <div className='chat--profile-pic teal'>
                <p style={{marginLeft:'10px', fontWeight:'bold' }}>Encourage</p>
              </div>
            <p>Inspiring and encouraging a depressed heart is so big. Join a group and encourage some today</p>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Chat