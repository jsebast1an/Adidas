import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from "../imgs/adidas-9.svg"



function Barnav() {
    return (
        <div>
                <Navbar bg="light" expand="lg">
                    <Container >
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="mx-1"
                        alt="React Bootstrap logo"
                    />
                        <Navbar.Brand href="#">Adidas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Shoes</Nav.Link>
                            <Nav.Link href="#action2">Clothes</Nav.Link>
                            <Nav.Link href="#action3">Accesories</Nav.Link>
                        </Nav>
                
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </div>
    )
}

export default Barnav
