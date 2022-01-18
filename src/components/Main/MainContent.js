import React, { useContext, useEffect, useState } from 'react' 
import AppContext from '../../context/context'
import { Container, Row, Col } from 'react-bootstrap'
import Input from './MsgInput'
import Message from './MessageJSX'

const MainContent = () => {
  const { state, dispatch } = useContext(AppContext)
  const [messages, setMessages] = useState([])
  const [components, setComponents] = useState([])

  const newMessage = (msg) => {
    setMessages([...messages, msg])
  }

  useEffect(() => {
    setComponents(messages.map(message => (
      <Message 
        userName={message.userName}
        image={message.pfpUrl}
        timestamp={message.timestamp}
        text={message.message}
      />
    )))
  }, [messages])

  return (
    <Container>
      {/* Second row - will contain rooms/DMs as well as main content */}
      <Row className='top-row'>
        <Col className='left-side-nav col-2'>
            <h4>Rooms</h4>
            <section className='open-rooms'>
              <a href='#'>Room 1</a>
            </section>
        </Col>
        <Col className='main-content col-9'>
            <section className='messages-window'>
              <ul className='messages'>
                {components}
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
