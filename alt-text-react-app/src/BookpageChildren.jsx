import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import ImgElementsRow from './ImgElementsRow';

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
                <ImgElementsRow imgElements={imgElements} altOnClick={altOnClick}/>
            </Container>
        </Accordion.Body>
    );
}