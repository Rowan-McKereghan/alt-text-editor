import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import ToggleButton from 'react-bootstrap/ToggleButton';

import {useState } from 'react';


export default function ImgElementsRow({altOnClick, imgElements, setNumSelected}) {

    const [radioValue, setRadioValue] = useState('');


    return(
        <Row className='align-items-center overflow-scroll' id="list_row">
            {imgElements.map((img, index) => {
                img.addEventListener('click', () => {
                    const listImg = document.getElementById("list_" + img.id);
                    listImg.scrollIntoView({behavior: "smooth", block: "center"});
                    listImg.click();
                });
                return (
                <Col className='px-2 py-2' key={"list_" + img.id}>
                    <ToggleButton id={"radio_" + img.id} type="radio" name="radio" className="px-1 py-1" value={img.id} variant='outline-primary'
                    checked={img.id === radioValue} onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={() => {
                            img.scrollIntoView({behavior: "smooth", block: "center"});
                            document.getElementById("book").classList.remove("flash");
                            setTimeout(function() {document.getElementById("book").classList.add("flash")}, 100);
                            altOnClick(img.alt);
                            setNumSelected(index + 1);
                        }}
                    >
                        <img id={"list_" + img.id} src={img.src} alt={img.alt} className="rounded" 
                        style={{"maxWidth": "150px", "height": "auto"}} />
                    </ToggleButton>
                </Col>
            )})};
        </Row>
    );
}