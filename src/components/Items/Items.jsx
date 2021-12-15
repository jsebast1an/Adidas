import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"


function Items({prod}) {
    return (
        <div>
            <Card style={{ width: '22rem' }} data-aos="zoom-in-up" className="my-3 itemsStyle" >
                <Card.Img variant="top" src={prod.img} alt="" width="400" height="300" />

                <Card.Body>
                    <Card.Title as="h3">{prod.nombre}</Card.Title>
                    <Card.Text as="h4">{prod.year}</Card.Text>
                    <Card.Text >Precio: {prod.precio} ARS</Card.Text>
                    
                    <Link to={`/detail/${prod.id}`}>
                        <Button variant="primary">Detalles del producto</Button>
                    </Link>
          
                </Card.Body>
            </Card>
        </div>
    )
}

export default Items
