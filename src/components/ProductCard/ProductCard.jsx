import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../ProductContextProvider';

function ProductCard(title, descr, price, id) {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);
  return (
    <Card
      style={{
        width: '18rem',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card.Body>
        <Card.Title>title : {title}</Card.Title>
        <Card.Text>descr : {descr}</Card.Text>
        <Card.Text> $ {price} </Card.Text>
      </Card.Body>

      <Card.Body>
        <Button onClick={deleteProduct(id)} className='mx-3' variant='danger'>
          Delete
        </Button>
        <Button
          onClick={() => navigate(`/edit/${id}`)}
          className='mx-3'
          variant='success'
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
