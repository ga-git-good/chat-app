import React from 'react'

const timeStampStyle = {
	color: 'rgba(123, 115, 115, 0.70)',
}

const Message = (props) => {

  return (
		<div className='message-layout'>
			<img col='1' className='userImage' src={props.image} />
			<li col='2'>
				<a><strong>{props.userName}</strong> <a style={timeStampStyle}>{props.timestamp}</a>:</a> <br />
				<section className='message-text'>{props.text}</section>
				<a>
					<i class='fab fa-thumbs-up'></i>
				</a>
				<a>
					<i class='fab fa-thumbs-down'></i>
				</a>
				<a>
					<i class='fab fa-smile'></i>
				</a>
				<a>
					<i class='fab fa-heart'></i>
				</a>
				<a>
					<i class='fab fa-sad-tear'></i>
				</a>
			</li>
		</div>
	)
}


export default Message