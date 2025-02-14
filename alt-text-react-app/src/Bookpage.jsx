import Accordion from 'react-bootstrap/Accordion';

import { useState, useEffect } from 'react';


function getBookpageChildren() {
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
        <Accordion.Body style={{textAlign: "left"}}>
            <a href='https://gutenberg.org/cache/epub/67098/images/cover.jpg'>Image</a> 
            <span>&nbsp; &nbsp; &nbsp;</span>
            <a href='https://gutenberg.org/cache/epub/67098/images/cover.jpg'>List</a>
            <span>&nbsp; &nbsp; &nbsp;</span>
            <a href='https://gutenberg.org/cache/epub/67098/images/cover.jpg'>Goes</a>
            <span>&nbsp; &nbsp; &nbsp;</span>
            <a href='https://gutenberg.org/cache/epub/67098/images/cover.jpg'>Here</a>
            <span>&nbsp; &nbsp; &nbsp;</span>
            {imgElements.map((img, index) => (
                <a href={img.src}>Image #{index + 1}</a>
            ))}
        </Accordion.Body>
    );
}


function Bookpage() {
    return(
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
            <Accordion.Header>List of Images</Accordion.Header>
            {getBookpageChildren()}
        </Accordion.Item>
      </Accordion>
    );
}

export default Bookpage