import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';

export default function BookpageChildren({altOnClick}) {

    const [imgElements, setImgElements] = useState([]);

    useEffect(() => {
        const iframe = document.querySelector("iframe");

        const handleIframeLoad = () => {
            try {
                const images = iframe.contentDocument.body.querySelectorAll("img");
                setImgElements(Array.from(images)); // Convert NodeList to an array
            } catch (error) {
                console.error("Error accessing iframe content:", error);
            }
        };

        iframe.addEventListener("load", handleIframeLoad);

        // Cleanup the event listener on component unmount
        return () => {
            iframe.removeEventListener("load", handleIframeLoad);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (

        <Accordion.Body style={{"textAlign": "center", "overflowY": "scroll", "scrollbarColor": "#00000080 rgba(255, 255, 255, 0.87)", "maxHeight": "40vh"}}>
            <Container style={{"minWidth": "100%", "width": "0"}}>
                <Row className='align-items-center'>
                {imgElements.map((img, index) => (
                    <Col className='px-2 py-2' key={index + 1}>
                        <img onClick={() => {
                            img.scrollIntoView({behavior: "smooth", block: "center"});
                            altOnClick(img.alt);
                            }} 
                        id={"list_" + img.id} src={img.src} alt={img.alt} 
                        className="img-thumbnail border border-primary-subtle" 
                        style={{"maxWidth": "200px", "height": "auto"}} />
                    </Col>
                ))}
                </Row>
            </Container>
        </Accordion.Body>
    );
}