import React, { useState } from 'react'
import { getFirebase } from '../firebase'
import { Link } from 'react-router-dom'

const labelStyles = {
  display: "block",
  marginBottom: 4
};

const inputStyles = {
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem"
};

const SignIn = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState()

  const login = () => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error(error)
        alert(error.message)
      })
  }

  const signOut = () => {
    getFirebase()
      .auth()
      .signOut()
      .then(() => {
        setUser()
      })
      .catch(error => {
        console.log(error)
        alert(error.message)
      })
  }

  getFirebase()
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }
    })

  if (user) {
    return (
      <>
        <h1>Logged in as: {user.email}</h1>
        <Link
          to='/create'
          style={{
            border: "none",
            color: "#fff",
            backgroundColor: "#039be5",
            borderRadius: "4px",
            padding: "8px 12px",
            marginLeft: '24px',
            fontSize: "0.9rem",
            textDecoration: 'none'
          }}
        >
          Add New Post
        </Link>
        <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              marginLeft: "20px",
              fontSize: "0.9rem"
            }}
            onClick={signOut}
          >
            Sign Out
          </button>
      </>
    )
  }

  return (
    <>
      <h1>Sign In</h1>
      <section style={{ margin: "2rem 0" }}>
        <label style={labelStyles} htmlFor='email-field'>
          Email
        </label>
        <input 
          id='email-field' 
          style={inputStyles} 
          type='email' 
          value={email} 
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
        />

        <label style={labelStyles} htmlFor='password-field'>
          Password
        </label>
        <input 
          id='password-field' 
          style={inputStyles} 
          type='password' 
          value={password} 
          onChange={({ target: { value } }) => {
            setPassword(value)
          }}
        />

        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.9rem"
            }}
            onClick={login}
          >
            Sign In
          </button>
        </div>
      </section>
    </>
  )
}

export default SignIn
