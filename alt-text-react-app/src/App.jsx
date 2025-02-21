import { useState, Children } from 'react';
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

// add floating labels?
function App() {

  const [altText, setAltText] = useState('');
  const [numSelected, setNumSelected] = useState(0);
  const [numImgs, setNumImgs] = useState(0);

  const leftButtonClick = () => {
    if (numSelected <= 1) {return;}
    let r = document.getElementById("list_row").children;
    document.getElementById(r[numSelected - 2].children[0].id).click();
  }

  const rightButtonClick = () => {
    if (numSelected <= 1) {return;}
    let r = document.getElementById("list_row").children;
    document.getElementById(r[numSelected ].children[0].id).click();
  }

  return (
    <Container fluid>
      <Row align="end">
        <Col className=''>
          <Stack className='gap-3'>
            <InputGroup className='px-6 justify-content-center'>
              <Button onClick={leftButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
              </Button>
              <span className='input-group-text'>{numSelected}/{numImgs}</span>
              <Button onClick={rightButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </Button>
            </InputGroup>
            <iframe id="book" style={{height: "85vh", width: "auto"}} className="border border-secondary border-4" src="/iframe"></iframe>
          </Stack>
        </Col>
        <Col>
          <Stack className='gap-3'>
            <Bookpage altOnClick={(text) => {setAltText(text)}} setNumImgs={setNumImgs} setNumSelected={setNumSelected}/>
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
