import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ImgElementsRow({altOnClick, imgElements, setNumSelected}) {
    return(
        <Row className='align-items-center' id="list_row">
            {imgElements.map((img, index) => {
                img.addEventListener('click', () => {
                    const listImg = document.getElementById("list_" + img.id);
                    listImg.scrollIntoView({behavior: "smooth", block: "center"});
                    listImg.click();
                });
                return (
                <Col className='px-2 py-2' key={"list_" + img.id}>
                    <img onClick={() => {
                        img.scrollIntoView({behavior: "smooth", block: "center"});
                        altOnClick(img.alt);
                        setNumSelected(index + 1);
                    }}
                    id={"list_" + img.id} src={img.src} alt={img.alt} 
                    className="img-thumbnail border border-primary-subtle" 
                    style={{"maxWidth": "200px", "height": "auto"}} />
                </Col>
            )})};
        </Row>
    );
}