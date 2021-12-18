import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../Formu/Formu.css" 

function Formu() {
    return (
        <>
            <Form>

                <Form.Group className="m-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="m-3" controlId="formGroupPassword">
                    <Row>
                        <Col>
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="text" placeholder="Names" />
                        </Col>
                        <Col>
                            <Form.Label>Cellphone</Form.Label>
                            <Form.Control type="text" placeholder="Cellphone" />
                        </Col>
                    </Row>
                </Form.Group>

            </Form>
        </>
    )
}

export default Formu
