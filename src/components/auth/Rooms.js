import { io } from 'socket.io-client'
import React, { useState, useEffect, useHistory, useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../context/context";

const Rooms = () => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn, userId, token } = state

  const [roomName, setRoomName] = useState('')
  const [socket, setSocket] = useState(null)
  const [connected, setConnected] = useState(false)

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
      socket.emit('join', { roomId: 123 })
    })
    setSocket(socket)
    setConnected(true)

  }, [])

  const createRoom = () => {
    return
  }

  const sendMessage = (event) => {
    event.preventDefault()
    if (!socket) {
      return
    }
    console.log('emitting message: ', roomName)
    socket.emit('send-message', {message: roomName})
    setRoomName('')
  }

  return (
		<form className='message-input-window' onSubmit={sendMessage}>
			<input value={roomName} onChange={(e) => setRoomName(e.target.value)} className='message-input' />
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

export default Rooms