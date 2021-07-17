import React from "react";
import cover from "./cover.jpg";
import {
  Container,
  Card,
  Form,
  Button,
  CardGroup,
  CardColumns,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgEvents from "./Event-1.jpg";
import imgOurClub from "./OurClub.jpg";

function App() {
  return (
    <>
      <Container>
        <CardColumns>
          <Card bg="dark">
            <Card.Img variant="bottom" src={cover} />
            <Card.Body>
              <Card.Text className="text-light">
                To unite all interested and qualified amateurs in Iligan City to
                practice amateur radio professionalism thru Iligan ARC, Inc.,
                regardless of their faith, political affiliation and religious
                beliefs. -Iligan Amateur Radio Club, Inc
              </Card.Text>
            </Card.Body>
          </Card>
          <CardGroup className="mt-2">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      This is only for the developers for now.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Are you a Robot?" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <Card bg="dark">
              <Card.Body>
                <Card.Title className="text-light">Our Club</Card.Title>
                <Card.Text className="text-light">
                  Iligan Amateur Radio Club
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={imgOurClub} />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="dark">
              <Card.Body>
                <Card.Title className="text-light">QSO's and Events</Card.Title>
                <Card.Text className="text-light">
                  We have QSO's almost everyday!
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={imgEvents} />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </CardColumns>
      </Container>
    </>
  );
}

export default App;
