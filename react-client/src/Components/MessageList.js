import React from 'react'

const MessageList = ({messageList}) => {

  let listOfMessages = messageList.length
    ? messageList.map((message, indx) => <li key={indx}> {message} </li>)
    : 'no messages at this time';


  return(
    <ul>
      {listOfMessages}
    </ul>
  )
}

export default MessageList
