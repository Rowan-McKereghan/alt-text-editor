import { useState } from 'react';
import './App.css';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Bookpage from './Bookpage';


function App() {
  return (
    <Container fluid style={{height: '90vh'}}>
      <Row align="end">
        <Col md="auto">
          <iframe id="book" style={{border: "2px solid black", height: "90vh", width: "50vw"}} 
          src="https://www.gutenberg.org/cache/epub/73011/pg73011-images.html"></iframe>
        </Col>
        <Col>
          <Stack>
            <Bookpage/>
            <InputGroup>
              <Form.Control placeholder="existing alt text"></Form.Control>
            </InputGroup>
            <InputGroup>
              <Form.Control placeholder="ai suggestion"></Form.Control>
            </InputGroup>
            <InputGroup>
              <Form.Control placeholder="user input"></Form.Control>
            </InputGroup>
            <Button>
                Submit
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App
