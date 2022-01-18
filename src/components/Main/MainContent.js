import React, { useContext, useEffect, useState, createRef } from 'react' 
import { Link } from 'react-router-dom'
import AppContext from '../../context/context'
import { Container, Row, Col, Form, DropdownButton, ButtonGroup } from 'react-bootstrap'
import Input from './MsgInput'
import Message from './MessageJSX'
import createRoom from '../../api/CreateRoom'
import { SET_ROOMS_ID } from '../../context/action-types'

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
  const { rooms } = state
  const [roomsJSX, setRoomsJSX] = useState(null)

  useEffect(() => {
    if (rooms) {
      console.log(rooms)
      setRoomsJSX(rooms.map(room => (
        <Link to={`/${room._id}`}>{`${room.name}`}</Link>
      )))
    }
  }, [rooms])

  const onCreateRoom = async (event) => {
    event.preventDefault()
    let newArray = []
    console.log(roomName, state.userId)
    const room = await createRoom(roomName, state.userId, state.token)
    if (rooms.length > 0) {
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
        image={message.image}
        timestamp={message.timestamp}
        text={message.message}
        key={message.userName + i.toString()}
      />
    )))
  }, [messages])

  return (
    <Container>
      {/* Second row - will contain rooms/DMs as well as main content */}
      <Row className='top-row'>
        <Col className='left-side-nav col-2'>
            <Row>
              <Col><h4>Rooms</h4></Col>
              <Col>
              <DropdownButton
                as={ButtonGroup}
                key={'end'}
                id={`dropdown-button-drop-end`}
                drop={'end'}
                variant="secondary"
                title={<img src='https://icongr.am/clarity/add.svg?size=16' />}
                >
                  {/* <Dropdown.Item eventKey='1' as='form' > */}
                  <Form onSubmit={onCreateRoom}>
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
                  </Form>
                {/* </Dropdown.Item> */}
                </DropdownButton>
              </Col>
            </Row>
            <Row>
              {/* TODO: Make this into its own component */}
              <section className='open-rooms'>
                {roomsJSX}
              </section>
            </Row>
        </Col>
        <Col className='main-content col-9'>
            <section className='messages-window'>
              <ul className='messages'>
                {components}
                <AlwaysScrollToBottom />
              </ul>
            </section>
            <Input received={newMessage} />
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
