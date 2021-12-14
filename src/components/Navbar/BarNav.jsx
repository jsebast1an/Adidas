import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from "../imgs/adidas-9.svg"
import CartWidget from '../Cart/CartWidget';
import {Link} from "react-router-dom";

/* CSS */
import "../Navbar/Barnav.css"


function Barnav() {
    return (
        <div>
                <Navbar bg="light" expand="lg">
                    <Container >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                                <img
                                    src={Logo}
                                    width="35"
                                    height="35"
                                    className="mx-2"
                                    alt="logo"
                                    />
                                    <Navbar.Brand href="#">Adidas</Navbar.Brand>
                        </Link>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/category/shoes" className='styleBN'>Shoes  </Link>
                            <Link to="/category/clothes" className='styleBN'>Clothes </Link>
                            <Link to="/category/accesories" className='styleBN'>Accesories </Link>
                        </Nav>
                
                        </Navbar.Collapse>

                        <CartWidget />

                    </Container>
                </Navbar>
            
        </div>
    )
}

export default Barnav
