import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'


const Profile = () => {
  const { username }  = useParams()
  return (
    <div>
      <Head title="Hello" />
      <Link to="/dashboard">Go to Root</Link>
      <Link to="/dashboard/main">Go to Main</Link>
      <div id="title">Profile</div>
      <div id="username">{ username }</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
