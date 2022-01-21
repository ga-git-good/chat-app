import React, { useEffect } from 'react'

const RoomTitle = ({ room }) => {

  useEffect(() => {
    //console.log('in room: ', room)
  }, [room])

  return (
    <>
      {room ? 
        <h3 className='room-title'>{room}</h3>
        :
        ''
      }
    </>
  )
}

export default RoomTitle
