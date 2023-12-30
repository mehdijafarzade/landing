import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cartitem.css'
import { FcReading } from "react-icons/fc";


function BasicCart({item}) {
  return (
    <Card className='h-100 text-end Parastoo'>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.text}
        </Card.Text>
        <Button className='ms-5' variant="outline-warning">مطالعه <FcReading size={25}/></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCart;