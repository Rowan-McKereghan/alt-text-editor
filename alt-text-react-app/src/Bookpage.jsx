import Accordion from 'react-bootstrap/Accordion';
import BookpageChildren from './BookpageChildren';


export default function Bookpage({altOnClick}) {
    return(
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
            <Accordion.Header>List of Images</Accordion.Header>
            <BookpageChildren altOnClick={altOnClick}/>
        </Accordion.Item>
      </Accordion>
    );
}