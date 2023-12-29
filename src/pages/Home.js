import React from 'react'
import homebanner from '../assets/images/home-banner-image.png'
import './Home.css'
import BasicExample from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bannerback from '../assets/images/home-banner-background.png'
import { Button } from 'react-bootstrap';
import { TiArrowRightOutline } from "react-icons/ti";


function Home() {
    return (
      <Container fluid>
      <Row>


      <Col className=''>
        
      <h1 className='logo'>
        FastFood
      </h1>
      <h2 className='h2n'>غذای مورد علاقه شما گرم </h2>
      <h2 className='h2n'>و تازه تحویل داده می شود</h2>
      <h2 className='h2m'>سرآشپزهای سالم همه کارهای </h2>
      <h2 className='h2m'>آماده سازی را انجام می دهند</h2>

      <Button className='px-5 py-2 mt-5' as="a" variant="warning"><span className='spanb'>سفارش دهید{<TiArrowRightOutline size={35}/>}</span></Button>
      
      </Col>



      <Col className='father'>
      

      <div >

      <div className='childpic'>
        <img className='img-fluid w-75' src={homebanner}  alt=''/>
      </div>


      <div className='fatherpic'>
        <div className='navchild'>
          <BasicExample />
        </div>
        
        <img className='img-fluid ' src={bannerback}  alt='' /> 
       
      </div>

      

      </div>

      </Col>


      </Row>

      </Container>
      
    );
  }
  
  export default Home;
  
  
  
  
  
  
  
  
  