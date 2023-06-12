import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Homepage() {
  return (
    <div className='Headerpage'>
      <h3>login</h3>
      <div className='Container'>
      <input type='text' placeholder='Enter the Username'/>
      <input type='password' placeholder='Enter the Password'/>
      <Button primary>hi</Button>
      </div>
      
    </div>
  )
}
