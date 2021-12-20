import {useState, } from "react"
import { BsCheck2 } from "react-icons/bs";
import { getFireStore } from "../../services/getFireStore"
import { useCartContext } from "../../context/CartContext"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import firebase from "firebase"
import "../Formu/Formu.css" 

function Formu() {

    const {cartList, setCartList, cartTotal} = useCartContext()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cellphone, setCellphone] = useState("")
    const [orderId, setOrderId] = useState("")

    const [show, setShow] = useState(false)
    const handleClose = () => {setShow(false)
                            setCartList([])}
                            
    const order = {}

    function getOrder (e) {
        e.preventDefault()
        

        order.buyer = {name, email, cellphone}
        order.total = cartTotal
        order.date = firebase.firestore.Timestamp.fromDate( new Date ())
        order.items = cartList.map( item => {
            const id = item.id
            const name = item.nombre
            const price = item.precio * item.cantidad
            
            return {name, price, id}
        })
        
          
        
        const fStoreData = getFireStore()
        fStoreData.collection("orders").add(order)
        .then(resp => setOrderId(resp))
        .catch(err=> console.log(err))

        
        console.log(order)

        setShow(true)

    }
    
    console.log(orderId)

    return (
        <>
            <Form > 

                <Form.Group className="m-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={ (e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="m-3" controlId="formGroupPassword">
                    <Row>
                        <Col>
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="text" placeholder="Names" value={name} onChange={ (e) => setName(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Cellphone</Form.Label>
                            <Form.Control type="text" placeholder="Cellphone" value={cellphone} onChange={ (e) => setCellphone(e.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Button className="mx-2" variant="success" onClick={getOrder}>Order <BsCheck2 /></Button>

            </Form>

            <Modal show={show} onHide={handleClose} className="text-center">
                <Modal.Header closeButton>
                <Modal.Title as="h3">Purchase succesfull</Modal.Title>
                </Modal.Header>
                <Modal.Body >Your confirmation code: <Modal.Title as="h5"> {orderId.id} </Modal.Title></Modal.Body>
                <Modal.Body as="p">Thanks for the purchase. <br></br> We will be contacting you via phone or email!</Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            
        </>
    )
}

export default Formu


  