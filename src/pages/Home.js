import React from 'react'
import homebanner from '../assets/images/home-banner-image.png'
import bannerback from '../assets/images/home-banner-background.png'
import './Home.css'
import Navbarw from '../components/Navbar';
import { Container, Row } from 'react-bootstrap';

function Home() {
    return (
    <Container fluid>
      <Row>

      <div className='contain '>


      <div className='fatherpic'>
      <img className='img-fluid ' src={bannerback}  alt=''/>
      </div>

      <div className='childpic'>
        <img className='img-fluid ' src={homebanner}  alt=''/>
      </div>


      </div>
         </Row>
    </Container>
        
    );
  }
  
  export default Home;
  
  
  
  
  
  
  
  
  