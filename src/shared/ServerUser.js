import React, { useEffect } from 'react'
import apiUrl from '../apiConfig'


const ServerUser = ({ name, status }) => {
  const imgUrl = apiUrl + '/img/' + name
  useEffect(() => {
    
  }, [status])

  return (
    <>
        <img col='1' className='userImage' src={imgUrl}></img>
        <span>{name}</span>
        <span>{status}</span>
    </>
  )
}

export default ServerUser 