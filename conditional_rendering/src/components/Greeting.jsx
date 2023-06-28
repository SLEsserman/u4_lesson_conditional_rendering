import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

const Greeting = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

export default Greeting