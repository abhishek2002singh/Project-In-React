import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err=useRouteError()
  return (
    <div>
        <h1>oops!</h1>
        <p>please correct write code</p>
        <h2>{err.status+":"+err.statusText}</h2>
    </div>
  )
}

export default Error