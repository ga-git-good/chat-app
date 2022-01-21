import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
// {setRoomName, onCreateRoom, roomName }

const ModaleCreateRoom = ({setRoomName, onCreateRoom, roomName }) => {
  console.log("props", "sasasaddsdasdasdsad mainContent");
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
        <Button className='create-room-button' onClick={handleShow}>
            <span className='create-room-span'>+</span>
        </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='createRoom-modal-title'>Create Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event)=> onCreateRoom(event.handleClose) }>
            <Form.Group controlId='room-name'>
              <Form.Control
                required
                type='room-name'
                name='create-room'
                value={roomName}
                placeholder='Enter Room Name'
                onChange={(e) => setRoomName(e.target.value)}
              />
              <button type='submit' className='create-button'>Create</button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModaleCreateRoom
