import React, { useContext } from 'react' 
import AppContext from '../../context/context'
import { Container, Row, Col } from 'react-bootstrap'
import Room from '../auth/Rooms'

const MainContent = () => {
  const { state, dispatch } = useContext(AppContext)

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
