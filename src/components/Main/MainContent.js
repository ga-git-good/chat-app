import React, { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'
import AppContext from '../../context/context'
import { Container, Row, Col, Form, DropdownButton, ButtonGroup } from 'react-bootstrap'
import Room from '../auth/Rooms'
import createRoom from '../../api/CreateRoom'

const MainContent = () => {
  const { state, dispatch } = useContext(AppContext)
  const [roomName, setRoomName] = useState('')
  const { roomArray } = state
  // let roomJSX

  if (state.rooms) {
    const roomJSX = state.rooms.map(room => (
      <Link to={`/${room._id}`}>{`${room.name}`}</Link>
    ))
  }

  const onCreateRoom = async (event) => {
    event.preventDefault()
    console.log(roomName, state.userId)
    const room = await createRoom(roomName, state.userId, state.token)
    const newArray = [...roomArray]
    newArray.push(newRoom)
    dispatch({
      type: SET_ROOMS_ID,
      payload: newArray
    })
    // state.rooms.push(room.data.room)
    console.log(room)
  }

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
                {/* {roomsJSX} */}
              </section>
            </Row>
        </Col>
        <Col className='main-content col-9'>
            <section className='messages-window'>
              <ul className='messages'>
                <li>First Message</li>
                <li>Second Message</li>
              </ul>
            </section>
            <Room />
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
