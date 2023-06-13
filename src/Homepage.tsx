import React from 'react'
import Login from './Login'

export default function Homepage() {
  const submit = (username:string,password:string)=>{
// eslint-disable-next-line
  }
  return (
    <div className='Headerpage '>
      <Login onSubmit={submit} />
    </div>
  )
}
