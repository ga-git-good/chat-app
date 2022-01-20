import React, { useContext, useEffect, useState, createRef } from 'react' 
import { Link } from 'react-router-dom'
import AppContext from '../../context/context'
import { Container, Row, Col, Form, DropdownButton, ButtonGroup, Button } from 'react-bootstrap'
import Input from './MsgInput'
import Message from './MessageJSX'
import RoomTitle from './RoomTitle'
import createRoom from '../../api/CreateRoom'
import showRooms from '../../api/ShowRooms'
import showRoomUsers from '../../api/ShowRoomUsers'
import goOffline from '../../api/GoOffline'
import { SET_ROOMS_ID } from '../../context/action-types'
import ServerUserSideBar from '../../shared/ServerUsersSideBar'
import ModaleCreateRoom from '../../shared/CreateRoomModal'
import { updateCache, getPfp } from '../../shared/updateCache'
import messageHistory from '../../api/messageHistory'

const AlwaysScrollToBottom = () => {
	const elementRef = createRef()
	useEffect(() => elementRef.current.scrollIntoView({behavior: 'smooth'}))
	return <div ref={elementRef} />
}

const MainContent = () => {
  console.log('maincontent reloaded')
  const { state, dispatch } = useContext(AppContext)

  const [messages, setMessages] = useState([])
  const [components, setComponents] = useState([])
  const [newMessageObj, setNewMessageObj] = useState(null)
  const [roomName, setRoomName] = useState('')
  const { rooms, userId, token, serverUsers, cachedPfps } = state
  const [roomsJSX, setRoomsJSX] = useState(null)
  const [roomUsersJSX, setRoomUsersJSX] = useState(null)
  const [currentRoom, setCurrentRoom] = useState('')
  const [changedRoom, setChangedRoom] = useState('')
  const [currentRoomName, setCurrentRoomName] = useState('')
  const [changedRoomName, setChangedRoomName] = useState('')
  //const [updatedCache, setUpdatedCache] = useState(true)

  // useEffect(() => {
  //   updateCache(serverUsers, cachedPfps, dispatch)
  // }, [serverUsers])

  useEffect(() => {
    // console.log('fetching pfps')
    // console.log('already cached userNames:')
    // console.log(cachedPfps)
    if (!serverUsers || serverUsers.length === 0) {
      return
    }
    // console.log('serverUsers:')
    // console.log(serverUsers)
    // console.log('cached pfps:')
    // console.log(cachedPfps)
    updateCache(serverUsers, cachedPfps, dispatch).then(
			(result) => {
				if (result) {
					//console.log(getPfp('12345'))
				} else {
					console.error('failed to cache images')
				}
			}
		)
  }, [serverUsers])

  const changeRoom = (roomId, roomName) => {
    console.log('changing room to: ', roomId)
    setChangedRoom(roomId)
    setChangedRoomName(roomName)
  }

  const showActiveUsers = async () => {
      let usersArray
      const response = await showRoomUsers(token, currentRoom)
      usersArray = response.data.user
      return usersArray
  }

  useEffect(() => {
    //console.log('room has been changed')
    if (changedRoom === currentRoom) {
      return
    } else {
      //console.log('changed room: ', changedRoom)
      setMessages([])
      setCurrentRoom(changedRoom)
      setCurrentRoomName(changedRoomName)
      showActiveUsers()
        .then(usersArray => {
          setRoomUsersJSX(usersArray.map(user => (
            <li>{`${ user.name }`}</li>
          )))})
    }
  }, [changedRoom])

  useEffect(() => {
    messageHistory(token, currentRoom)
    .then(response => {
      console.log('MESSAGE HISTORY')
      if (!response) {
        return
      }
      const messageObjs = response.map(message => ({
        userName: message.userName,
        timestamp: message.sentAt,
        message: message.text
      }))
      console.log('FETCHED HISTORY')
      console.log(messageObjs)
      setMessages(messageObjs)
    })
  }, [currentRoom])

  useEffect(() => {
    if (rooms) {
      console.log(rooms)
      setRoomsJSX(rooms.map(room => (
        <li key={`${room._id}`}>
          <a href='#' onClick={() => changeRoom(room._id, room.name)}>{`${room.name}`}</a>
        </li>
      )))
    }
  }, [rooms])

  useEffect(async () => {
    let newArray = []
    const response = await showRooms(token)
    const existingRooms = response.data.room
    //console.log('existing rooms: ', existingRooms, 'saved rooms: ', rooms)
    if (!rooms || !rooms[0]) {
      existingRooms.forEach(existingRoom => {
        if (existingRoom.validUsers.includes(userId)) {
          newArray.push(existingRoom)
        }
      })
      // setCurrentRoom(newArray[0]._id)
    }
    console.log(newArray)
    dispatch({
      type: SET_ROOMS_ID,
      payload: newArray
    })
    window.addEventListener("beforeunload", () => {
      goOffline(token, userId)
    }, false);
  }, [])

  const onCreateRoom = async (event, func) => {
    event.preventDefault()
    let newArray = []
    console.log(roomName, state.userId)
    const room = await createRoom(roomName, userId, token)
    if (rooms.length > 0) {
        func()

      newArray = [...rooms]
      newArray.push(room.data.room)
    } else {
      newArray = [room.data.room]
    }
    dispatch({
      type: SET_ROOMS_ID,
      payload: newArray
    })
    // state.rooms.push(room.data.room)
    console.log(room)

    
  }

  const newMessage = (msg) => {
    console.log('setting new msg')
    console.log(msg)
    setNewMessageObj(msg)
  }

  useEffect(() => {
    console.log('hit new message useeffect')
    if (!newMessageObj) {
      return
    }
    const newArr = [...messages]
    newArr.push(newMessageObj)
    setMessages(newArr)
    setNewMessageObj(null)
  }, [newMessageObj])

  useEffect(() => {
    setComponents(messages.map((message, i) => (
      <Message 
        userName={message.userName}
        timestamp={message.timestamp}
        text={message.message}
        key={message.userName + i.toString()}
      />
    )))
  }, [messages])

  return (
		<Container className='main-container'>
			{/* Second row - will contain rooms/DMs as well as main content */}
			<Row className='top-row'>
				<Col className='col-3 left-side-options'>
					<div className='left-side-nav'>
						<Row >
							<Col>
								<div style={{ position: 'fixed'}}>
									<h4 className='roomsHeader' style={{width: "20vw"}}>
										Rooms
									</h4>


                  <ModaleCreateRoom
											onCreateRoom={onCreateRoom}
											roomName={roomName}
											setRoomName={setRoomName}
									/>

                  
								</div>
								{/* <Button className='create-room-button m-3'> Create Room</Button> */}

								{/* <Dropdown.Item eventKey='1' as='form' > */}

								{/* <Form onSubmit={onCreateRoom} className='d-none'>
                      <Form.Group controlId='room-name'>
                        <Form.Control 
                        required
                        type='room-name' 
                        name='create-room'
                        value={roomName}
                        placeholder='Enter Room Name'
                        onChange={(e) => setRoomName(e.target.value)} 
                        />
                        <button type='submit'>Create</button>
                      </Form.Group>
                  </Form> */}



                 
                {/* </Dropdown.Item> */}
              
              </Col>
            </Row>

           

            <Row>
              {/* TODO: Make this into its own component */}
              <section className='open-rooms'>
                <ul className='room-list'>
                  {roomsJSX}
                </ul>
              </section>
            </Row>
          </div>
          {/* Ayoub this is your spot to add active users */}
            <Row className='active-users'>
                <h4 className='roomsHeader'>Users</h4>
                <ServerUserSideBar currentRoom={currentRoom} />
            </Row>
        </Col>
        <Col className='main-content col-9'>
          <Row>
            <RoomTitle room={currentRoomName} />
          </Row>
            <section className='messages-window'>
              <ul className='messages'>
                {currentRoom ? components : 'No room selected. Please join a room to start a conversation!'}
                <AlwaysScrollToBottom />
              </ul>
            </section>
            <Input received={newMessage} room={currentRoom} />
            {/* <form className='message-input-window'>
              <input className='message-input' />
              <button className='send-message'>Send</button>
            </form> */}
				</Col>
			</Row>
		</Container>
	)
}

export default MainContent
