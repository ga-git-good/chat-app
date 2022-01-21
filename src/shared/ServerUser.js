import React, { useEffect } from 'react'
import apiUrl from '../apiConfig'
import { getPfp } from './updateCache'


const ServerUser = ({ name, status, add, userId }) => {
  const imgUrl = apiUrl + '/img/' + name
  useEffect(() => {
    
  }, [status])

  return (
		<>
			<img col='1' className='user-image' src={getPfp(name)}></img>

			<span className='user-name'>{name}</span>
			<span className='user-status'>
				{status === 'online' ? (
					<img src='https://icongr.am/octicons/rss.svg?size=16&color=36ba38' />
				) : (
					''
				)}
			</span>
      <img
				src={'https://icongr.am/octicons/plus.svg?size=16&color=b3b3b3'}
				onClick={() => add(userId)}
			/>
		</>
	)
}

export default ServerUser 