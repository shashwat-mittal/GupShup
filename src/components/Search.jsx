import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://avatars.githubusercontent.com/u/74846797' alt=''/>
        <div className='userChatInfo'>
          <span>Shashwat</span>
        </div>
      </div>
    </div>
  )
}
export default Search
