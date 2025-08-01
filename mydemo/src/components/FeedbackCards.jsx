import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const feedbacks = [
  {
    name: 'Kalai K.',
    comment: 'Great car selection and smooth buying experience!',
    date: 'July 2025',
    image: '/src/assets/c3.png',
  },
  {
    name: 'Kamalu.',
    comment: 'Customer service was very helpful. Loved it!',
    date: 'June 2025',
    image: '/src/assets/c1.png',
  },
  {
    name: 'Harshu.',
    comment: 'Affordable prices and fast delivery!',
    date: 'May 2025',
    image: '/src/assets/c2.png',
  },
  {
    name: 'Vini.',
    comment: 'Affordable prices and fast delivery!',
    date: 'May 2025',
    image: '/src/assets/c2.png',
  },
  {
    name: 'Vicky S.',
    comment: 'Affordable prices and fast delivery!',
    date: 'May 2025',
    image: '/src/assets/c3.png',
  },
];

const FeedbackCards = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Customer Feedback</h2>
    <CardGroup>
      {feedbacks.map((feedback, idx) => (
        <Card key={idx} className="m-2 shadow rounded-4">
          <Card.Img variant="top" src={feedback.image} height="200" />
          <Card.Body>
            <Card.Title>{feedback.name}</Card.Title>
            <Card.Text>"{feedback.comment}"</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Reviewed on {feedback.date}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
    </div>
  );
};

export default FeedbackCards;
