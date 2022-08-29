import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

async function loginUser(credentials) {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

    .then(data => data.json())
    .then(res =>{
      if(res.ok){
        location.href = "Home.js"
      }
    })
 }


const Login = ({setLogin}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setLogin(token);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
      <input type="text" data-cy="login-email" onChange={e => setUserName(e.target.value)}/>
      <input type="password" data-cy="login-password" onChange={e => setPassword(e.target.value)} />
      <button type="submit" data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


