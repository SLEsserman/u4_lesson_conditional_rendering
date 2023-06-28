import {useState} from 'react'
import './App.css'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Messages from './components/Messages'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [unreadMessages, setUnreadMessages] = useState([
  'Hello',
  'World',
  'This is Doordash with your order'
  ])

  const handleLoginClick = () => {
    setIsLoggedIn(true)
  }

  const handleLogoutClicked = () => {
    setIsLoggedIn(false)
  }

  let button

  const messages = isLoggedIn && <Messages unreadMessages={unreadMessages}/>

  if (isLoggedIn) {
    button = <LogoutButton 
    handleLogoutClick={handleLogoutClicked}/>
  } else {
    button = <LoginButton 
    handleLoginClick={handleLoginClick}/>
  }

return (
  <div className='App'>
    <Greeting isLoggedIn={isLoggedIn}/>
    <p>The User is <b>{isLoggedIn ? 'currently' : 'not'}</b> Logged In</p>
    {button}
    {messages}
  </div>
  )
}

export default App
