import { useState } from 'react'
import { Modal, ModalBody, Row, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

const ConsultaEmpresa = () => {
    const [show, setShow] = useState(true)

    const handleShow = _ => setShow(true)
    const handleClose = _ => setShow(false)
    const handlerConsultar = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <ModalHeader closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Selecionar Empresa
                    </Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Form onSubmit={handlerConsultar}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button type='submit' variant="outline-secondary" id="btnConsultar">
                                    Consultar
                                </Button>
                            </InputGroup>
                        </Form>
                    </Row>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ConsultaEmpresa