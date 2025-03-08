import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import ToggleButton from 'react-bootstrap/ToggleButton';

import {useState } from 'react';


export default function ImgElementsRow({altOnClick, imgElements, setNumSelected}) {

    const [radioValue, setRadioValue] = useState('');


    return(
        <Row className='align-items-center overflow-scroll' style={{"maxWidth": "100%", overflowX: "auto"}} id="list_row">
            {imgElements.map((img, index) => {
                img.style.cursor = 'pointer';
                const listImg = document.getElementById("list_" + img.id);
                img.addEventListener('click', () => {
                    listImg.click();
                });
                return (
                <Col className='px-2 py-2' key={"list_" + img.id}>
                    <ToggleButton id={"radio_" + img.id} type="radio" name="radio" className="px-1 py-1 mx-0 my-0" value={img.id} variant='outline-primary'
                    checked={img.id === radioValue} onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={(e) => {
                            img.scrollIntoView({behavior: "smooth", block: "center"});
                            e.currentTarget.scrollIntoView({behavior: "smooth", block: "center"});
                            document.getElementById("book").classList.remove("flash");
                            setTimeout(function() {document.getElementById("book").classList.add("flash")}, 100);
                            if(listImg !== null) {altOnClick(listImg.alt);}
                            else {altOnClick(img.alt);}
                            setNumSelected(index + 1);
                        }}>
                        <img id={"list_" + img.id} src={img.src} alt={img.alt} className="rounded" 
                        style={{"maxWidth": "150px", "height": "auto"}} />
                    </ToggleButton>
                </Col>
            )})};
        </Row>
    );
}