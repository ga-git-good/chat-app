import { io } from 'socket.io-client'
import React, { useState, useEffect, useHistory, useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../context/context";

const MsgInput = ({received}) => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn, userId, token } = state

  const [messageText, setMessageText] = useState('')
  const [socket, setSocket] = useState(null)
  const [connected, setConnected] = useState(false)

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
        socket.emit('join', { roomId: 123 })
        socket.on('message', received)
      } else {
        console.log('failed to log in')
        alert('failed to log in')
      }
    })
    setSocket(socket)
    setConnected(true)

  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    if (!socket) {
      return
    }
    const msg = {
			message: messageText,
			roomId: 123,
			image: 'https://i.imgur.com/wtxZVbP.png',
			timestamp: new Date().toLocaleString(),
		}
    socket.emit('send-message', msg)
    console.log('sent message: ')
    console.log(msg)
    setMessageText('')
  }

  return (
		<form className='message-input-window' onSubmit={sendMessage}>
			<input value={messageText} onChange={(e) => setMessageText(e.target.value)} className='message-input' />
			<button type='submit' className='send-message'>Send</button>
		</form>
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