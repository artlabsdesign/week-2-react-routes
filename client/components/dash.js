import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
// import Link from "next/link";

const Dash = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/bd0cb7a5-0201-4cb2-a65f-32eac42fc872">Go to Profile</Link>
      <Link to="/dashboard/main">Go to Main</Link>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
