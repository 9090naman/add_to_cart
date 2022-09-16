import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import Header from './Header'
import EmptyHeader from './EmptyHeader'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <EmptyHeader/>
         <Container style={{marginLeft:"500px",marginTop:"100px"}}>
            <span style={{fontSize:"50px"}}>Welcome to Food's <br/> Kitchen</span>
            <div>
            <Link to='/cards'><Button>Go to menu</Button></Link>
            </div>
         </Container>
    </div>
  )
}

export default Home