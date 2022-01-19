import { io } from 'socket.io-client'
import React, { useState, useEffect, useHistory, useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../context/context";

const MsgInput = ({received, room}) => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn, userId, token, userName } = state

  const [messageText, setMessageText] = useState('')
  const [socket, setSocket] = useState(null)
  const [connected, setConnected] = useState(false)
  const [socketAuthed, setSocketAuthed] = useState(false)

  // const receivedMessage = (msg) => {
  //   received(msg)
  //   console.log('received message')
  //   console.log(msg)
  // }

  useEffect(() => {
    if (connected) {
      return
    }
    console.log('connecting socket')
    const socket = io('localhost:3040', {
			withCredentials: false,
			query: {
				token:
					token,
			},
		})
    socket.on('connect', () => {
      console.log('connected!')
    })
    socket.on('loggedin', (res) => {
      if (res) {
        setSocketAuthed(true)
        socket.on('message', received)
      } else {
        console.log('failed to log in')
        alert('failed to log in')
      }
    })
    setSocket(socket)
    setConnected(true)

  }, [])

  // Join a room
  // TODO
  useEffect(() => {
    console.log('seeing this pop up here as well', room)
    if (room) {
      socket.emit('join', { roomId: room })
    }
  }, [room])

  const sendMessage = (event) => {
    event.preventDefault()
    if (!socket) {
      return
    }
    const msg = {
			message: messageText,
			roomId: room,
			image: 'https://i.imgur.com/wtxZVbP.png',
			timestamp: new Date().toLocaleString(),
      userName: userName
		}
    socket.emit('send-message', msg)
    console.log('sent message: ')
    console.log(msg)
    setMessageText('')
  }

  return (
		<>
			{room !== '' ? 
      
        <form className='message-input-window' onSubmit={sendMessage}>
          <input value={messageText} onChange={(e) => setMessageText(e.target.value)} className='message-input' />
          <button type='submit' className='send-message'>Send</button>
        </form>
        
       : '' }
    </>
		
	)
  // Version requiring auth:
  // return loggedIn
  //     ? (<Redirect to='/' />)
  //     : (
  //       <div>
  //         <input value={roomName} onChange={(e) => setRoomName(e.target.value)} />
  //         <button onClick={createRoom} />
  //       </div>
  //     )
}

export default MsgInput