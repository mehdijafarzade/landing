import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.tex}
        </Card.Text>
        <Button variant="primary">مطالعه</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;