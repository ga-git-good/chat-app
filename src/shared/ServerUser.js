import React, { useEffect } from 'react'
import apiUrl from '../apiConfig'


const ServerUser = ({ name, status }) => {
  const imgUrl = apiUrl + '/img/' + name
  useEffect(() => {
    
  }, [status])

  return (
    <>
        <img col='1' className='user-image' src={imgUrl}></img>
        <span className='user-name'>{name}</span>
        <span className='user-status'>{status === 'online' ? <img src='https://icongr.am/octicons/rss.svg?size=16&color=36ba38' /> : ''}</span>
    </>
  )
}

export default ServerUser 