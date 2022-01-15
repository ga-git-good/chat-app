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
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWUyMTc4NzZjMTljYzY5ZDgyZDExNjEiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.-I9JjuMXy-aLCKXoi4R0HDYwi-FuwxveypIUtdSLnDI',
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

  const sendMessage = () => {
    if (!socket) {
      return
    }
    console.log('emitting message: ', roomName)
    socket.emit('send-message', {message: roomName})
    setRoomName('')
  }

  return (
		<div>
			<input value={roomName} onChange={(e) => setRoomName(e.target.value)} />
			<button type='button' onClick={sendMessage} />
		</div>
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