import Accordion from 'react-bootstrap/Accordion';
import BookpageChildren from './BookpageChildren';


export default function Bookpage({altOnClick, setNumImgs, setNumSelected}) {
    return(
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
            <Accordion.Header>List of Images</Accordion.Header>
            <BookpageChildren altOnClick={altOnClick} setNumImgs={setNumImgs} setNumSelected={setNumSelected}/>
        </Accordion.Item>
      </Accordion>
    );
}