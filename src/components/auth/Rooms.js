import io from 'socket.io-client'
import React, { useState, useEffect, useHistory, useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../context/context";

const Rooms = () => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn } = state

  const [roomName, setRoomName] = useState('')

  useEffect(() => {
    io
  })

  const createRoom = () => {

  }

  return loggedIn
      ? (<Redirect to='/' />)
      : (
        <div>
          <input value={roomName} onChange={(e) => setRoomName(e.target.value)} />
          <button onClick={createRoom} />
        </div>
      )
}