import React, { useContext, useEffect, useState, createRef } from 'react' 
import AppContext from '../../context/context'
import { Container, Row, Col } from 'react-bootstrap'
import Input from './MsgInput'
import Message from './MessageJSX'

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
  const bottom = createRef()

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
            <h4>Rooms</h4>
            <section className='open-rooms'>
              <a href='#'>Room 1</a>
            </section>
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
