import React from 'react'
import { Navbar } from 'react-bootstrap'

const EmptyHeader = () => {
  return (
    <div>
        <Navbar className="text-decoration-none text-light ml-3" 
        bg="primary" variant="dark"  style={{ height: "60px"}}>
          Foods kitchen</Navbar>
    </div>
  )
}

export default EmptyHeader