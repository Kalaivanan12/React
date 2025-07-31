import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';

const CardGroupComponent = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Top Cars</h2>
      <CardGroup>
        <Card className="m-2 shadow rounded-4">
          <Card.Img variant="top" src="/src/assets/babe1.png" />
          <Card.Body>
            <Card.Title>Maruti Swift(Modified)</Card.Title>
            <Card.Text>Sporty hatchback with great mileage.</Card.Text>
            <h5 className="text-success">₹11,00,000</h5>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 shadow rounded-4">
          <Card.Img variant="top" src="/src/assets/babe2.png" />
          <Card.Body>
            <Card.Title>Swift Type-2(Sticker Modified)</Card.Title>
            <Card.Text>Comfortable SUV with powerful engine.</Card.Text>
            <h5 className="text-success">₹9,50,000</h5>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>

        <Card className="m-2 shadow rounded-4">
          <Card.Img variant="top" src="/src/assets/babe3.png" />
          <Card.Body>
            <Card.Title>Swift Type-3(2015)</Card.Title>
            <Card.Text>Compact SUV with top safety ratings.</Card.Text>
            <h5 className="text-success">₹8,00,000</h5>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardGroupComponent;
