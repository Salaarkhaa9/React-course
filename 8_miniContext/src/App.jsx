import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvide from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvide>
      <h1>React with chai and share is important</h1>
      <Login/>
      <Profile/>
    </UserContextProvide>
  )
}

export default App
 