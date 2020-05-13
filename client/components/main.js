import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/bd0cb7a5-0201-4cb2-a65f-32eac42fc872">Go to profile</Link>
      <Link to="/dashboard">Go to Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
