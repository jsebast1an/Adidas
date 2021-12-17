import Card from "react-bootstrap/Card"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import ListGroup from "react-bootstrap/ListGroup"
import Accordion from "react-bootstrap/Accordion"

import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

function ItemDetail({item}) {

    return (
        <div className="container-sm py-3  text-center d-flex justify-content-evenly flex-wrap"  style={{borderRadius: 14}}>    
            <Card className="m-3 hvr-glow" data-aos="flip-right" style={{ width: '23rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title as="h3">{item.nombre}</Card.Title>
                    <Card.Text>
                        {item.detail}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Card.Title >Precio: {item.precio} ARS </Card.Title></ListGroupItem>
                    <ListGroupItem>Estado: {item.year}</ListGroupItem>
                    <ListGroupItem>Talle: {38}</ListGroupItem>
                </ListGroup>
            </Card>

            <Card className="m-3 hvr-glow" data-aos="flip-left"  style={{ width: '23rem' }}>
                <Card.Header as="h3">DETALLES</Card.Header>

                <Card.Body>
                <Accordion className="my-3">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tabla talles</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    

                    <Card ><ItemCount stock={item.stock} initial={1} /></Card>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail