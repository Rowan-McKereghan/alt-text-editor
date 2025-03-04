import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';


import { useState, useEffect } from 'react';


export default function BookpageChildren({altOnClick, setNumImgs, setNumSelected}) {

    const [imgList, setImgList] = useState([]);
    const [radioValue, setRadioValue] = useState('');

    //get csrf token for django auth
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const mappedImages = function (img_id, img_src, index) {
            return (
                <Col className='px-2 py-2' key={"list_" + img_id}>
                    <ToggleButton id={"radio_" + img_id} type="radio" name="radio" className="px-1 py-1 mx-0 my-0" value={img_id} variant='outline-primary'
                    checked={img_id === radioValue} onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={(e) => {
                            img = document.getElementById(img_id);
                            console.log(img);
                            //.scrollIntoView({behavior: "smooth", block: "center"});
                            e.currentTarget.scrollIntoView({behavior: "smooth", block: "center"});
                            document.getElementById("book").classList.remove("flash");
                            setTimeout(function() {document.getElementById("book").classList.add("flash")}, 100);
                            //altOnClick(img.alt);
                            setNumSelected(index + 1);
                        }}>
                        <img id={"list_" + img_id} src={img_src} /*alt={img.alt}*/ className="rounded"
                        style={{"maxWidth": "150px", "height": "auto"}} />
                    </ToggleButton>
                </Col>
            );
    }

    useEffect(() => {
        async function getURLs() {
            const img_api_obj_list = await axios.get('http://127.0.0.1:8000/api/documents/1/',
                {'withCredentials': true,
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                    },
                 }).then((response) => response.data.imgs);
            const img_col_list = img_api_obj_list.map(async (imgURL, index) => {
                return await axios.get(imgURL,
                    {'withCredentials': true,
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCookie('csrftoken')
                        },
                    }).then((response) => response.data);
                    //.then((img_json) => mappedImages(img_json.img_id, img_json.image, index));
            });

            const render = await Promise.all(img_col_list);
            setImgList(render);
            setNumImgs(render.length);
        }
        getURLs();
    }, []);

    return (

        <Accordion.Body className="overflow-scroll" style={{"textAlign": "center", "scrollbarColor": "#00000080 rgba(255, 255, 255, 0.87)", "maxHeight": "40vh"}}>
            <Container style={{"minWidth": "100%", "width": "0", "height": "40vh"}}>
                <Row className='align-items-center overflow-scroll' style={{"maxWidth": "100%", overflowX: "auto"}} id="list_row">
                    {imgList.map((img, index) => mappedImages(img.img_id, img.image, index))}
                </Row>
            </Container>
        </Accordion.Body>
    );
}