import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://avatars.githubusercontent.com/u/74846797" alt=""/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src="https://avatars.githubusercontent.com/u/74846797" alt=""/>
      </div>
    </div>
  )
}
export default Message