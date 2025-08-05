import React, { useState,useContext } from 'react'
import Usercontext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const {setUser}= useContext(Usercontext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        type='text' placeholder='username'/>
        {" "}
        <input 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        type='text' placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login