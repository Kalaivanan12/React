import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './FilterSection.css'; // Assuming you have a CSS file for styling

const FilterSection = () => {
  return (
    <main>
      <div className="text-center py-4">
        <h3>WELCOME TO MY CAR MAKES SITE</h3>
      </div>
      <center><img src="./src/assets/ncm2.png" alt="" /></center>
      <Container className="filter-box p-4 border rounded bg-light">
        <Row className="g-3">
          <Col md={4}>
            <Form.Group controlId="year">
              <Form.Label>Select Year</Form.Label>
              <Form.Select>
                <option>Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="make">
              <Form.Label>Select Make</Form.Label>
              <Form.Select>
                <option>Make</option>
                <option value="BMW">BMW</option>
                <option value="BENZ">BENZ</option>
                <option value="AUDI">AUDI</option>
                <option value="LAND ROVER">LAND ROVER</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="model">
              <Form.Label>Select Model</Form.Label>
              <Form.Select>
                <option>Model</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="style">
              <Form.Label>Body Style</Form.Label>
              <Form.Select>
                <option>Style</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Sedans">Sedans</option>
                <option value="SUV">SUV</option>
                <option value="MUV">MUV</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="condition">
              <Form.Label>Car Condition</Form.Label>
              <Form.Select>
                <option>Condition</option>
                <option value="Electrical">Electrical</option>
                <option value="Body">Body</option>
                <option value="Interior">Interior</option>
                <option value="Overall">Overall</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="price">
              <Form.Label>Select Price</Form.Label>
              <Form.Select>
                <option>Price</option>
                <option value="10L-8L">10L-8L</option>
                <option value="8L-5L">8L-5L</option>
                <option value="5L-3L">5L-3L</option>
                <option value="Below 3L">Below 3L</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={12} className="text-center">
            <Button variant="primary" className="search-btn">
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default FilterSection;
