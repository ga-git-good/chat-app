import React, { useEffect } from 'react'
const imgUrl = apiUrl + '/img/' + props.userName

const ServerUser = ({ name, status }) => {

  useEffect(() => {
    
  }, [status])

  return (
    <>
      <li>
        <img col='1' className='userImage' src={imgUrl}></img>
        <span>{name}</span>
        <span>{status}</span>
      </li>
    </>
  )
}

export default ServerUser 