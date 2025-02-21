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

  const [altText, setAltText] = useState('');

  return (
    <Container fluid>
      <Row align="end">
        <Col md="auto">
          <iframe id="book" style={{height: "90vh", width: "45vw"}} className="border border-secondary border-4" src="/iframe"></iframe>
        </Col>
        <Col>
          <Stack className='gap-3'>
            <Bookpage altOnClick={(text) => {setAltText(text)}}/>
            <Form.Label className='align-self-start mb-0' htmlFor="altText">Existing Alt Text</Form.Label>
            <InputGroup>
              <Form.Control id="altText" disabled as='textarea' rows={4} value={altText}></Form.Control>
            </InputGroup>
            <InputGroup>
              <Form.Control id="ai" placeholder="ai suggestion"></Form.Control>
            </InputGroup>
            <InputGroup>
              <Form.Control id="userInput" placeholder="user input"></Form.Control>
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
