import React from 'react'
import apiUrl from '../../apiConfig'

const timeStampStyle = {
	color: 'rgba(123, 115, 115, .85)',
}

const Message = (props) => {
	console.log('imgurl:')
	const imgUrl = apiUrl + '/img/' + props.userName
	console.log(imgUrl)
  return (
		<div className='message-layout'>
			<img col='1' className='userImage' src={imgUrl} />
			<li col='2'>
				<strong>{props.userName}</strong> <a style={timeStampStyle}>{props.timestamp}</a>:
				<br />
				<section className='message-text'>{props.text}</section>
				{/* <a>
					<i className='fab fa-thumbs-up'></i>
				</a>
				<a>
					<i className='fab fa-thumbs-down'></i>
				</a>
				<a>
					<i className='fab fa-smile'></i>
				</a>
				<a>
					<i className='fab fa-heart'></i>
				</a>
				<a>
					<i className='fab fa-sad-tear'></i>
				</a> */}
			</li>
		</div>
	)
}


export default Message