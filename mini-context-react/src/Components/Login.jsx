import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setData} = useContext(userContext);

    const handleOnClick = (e) => {
        e.preventDefault();
        setData({username,password});
    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      placeholder='username'
      value={username}
      onChange={(e) => {setUsername(e.target.value)}}
      />

      <input type="text" 
      placeholder='password' 
      value={password}
      onChange={(e) => {setPassword(e.target.value)}}/>
      <button onClick={handleOnClick}>Submit</button>
    </div>
  )
}

export default Login
