import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ImgElementsRow({altOnClick, imgElements}) {
    return(
        <Row className='align-items-center'>
            {imgElements.map((img, index) => {
                img.addEventListener('click', () => document.getElementById("list_" + img.id).scrollIntoView({behavior: "smooth", block: "center"}));
                return (
                <Col className='px-2 py-2' key={index + 1}>
                    <img onClick={() => {
                        img.scrollIntoView({behavior: "smooth", block: "center"});
                        altOnClick(img.alt);
                    }}
                    id={"list_" + img.id} src={img.src} alt={img.alt} 
                    className="img-thumbnail border border-primary-subtle" 
                    style={{"maxWidth": "200px", "height": "auto"}} />
                </Col>
            )})};
        </Row>
    );
}