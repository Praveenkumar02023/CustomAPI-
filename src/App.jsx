import { useState } from 'react'
import getProfile from './hooks/getProfie'

import './App.css'

function App() {
 
  const userName = "Praveenkumar02023";
  const {profile,error,loading} = getProfile(userName);

  if(loading){
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  if(error){
    return (
      <>
        ERROR: {error}
      </>
    )
  }

  return (
     <>
      <h3>Github Profile</h3>
      <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} width="100" />
      <p>Username : {profile.login}</p>
      <p>Name : {profile.name}</p>
     </>
  )
}

export default App
