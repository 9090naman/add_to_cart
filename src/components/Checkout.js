import React from 'react'
import { Container } from 'react-bootstrap'
import EmptyHeader from './EmptyHeader'

const Checkout = () => {
  return (
    <div>
        <EmptyHeader/>
        <Container style={{marginLeft:"500px",marginTop:"100px",width: '22rem',border:"none", fontSize:"30px",fontStyle:"italic",fontWeight:"400px"}} >
            <p>Checkout</p>
            <p>Thankyou for your order</p>
        </Container>
    </div>
  )
}

export default Checkout