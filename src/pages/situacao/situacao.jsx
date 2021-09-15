import { useState } from 'react'
import ConsultaEmpresa from "../../components/consulta/consulta-empresa"
import { Container, Row, Form, FloatingLabel, Col, Card, Button } from 'react-bootstrap'

const Situacao = () => {
    const [showConsultaEmpresa, setShowConsultaEmpresa] = useState(false)
    const submitHandler = (event) => {
        event.preventDefault()
    }

    const modalConsultaHandler = _ => {
        setShowConsultaEmpresa(!showConsultaEmpresa)
    }

    return (
        <>            
            {
                showConsultaEmpresa && <ConsultaEmpresa key={1} show={showConsultaEmpresa} onClose={modalConsultaHandler}></ConsultaEmpresa>
            }
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={6} >
                        <Card>
                            <Card.Body>
                                <Card.Title>Situação</Card.Title>
                                <Form onSubmit={submitHandler}>
                                    <Row className="g-1" style={{ 'marginBottom': '1%'}}>
                                        <Col style={{ 'textAlign': 'left'}}>
                                            <Button onClick={modalConsultaHandler}>Escolher Empresa</Button>
                                        </Col>                                        
                                    </Row>
                                    <Row className="g-2">                                         
                                        <Form.Group as={Col}>
                                            <FloatingLabel controlId="floatingInputGrid" label="Data Situação">
                                                <Form.Control type="date" placeholder="name@example.com" />
                                            </FloatingLabel>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <FloatingLabel controlId="floatingSelect" label="Escolha a Situação">
                                                <Form.Select aria-label="">
                                                    <option value="0">Ativa</option>
                                                    <option value="1">Inativa</option>
                                                    <option value="2">Encerrada</option>
                                                    <option value="3">Distrato</option>
                                                    <option value="4">Lista Negra</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                            <Card.Footer style={{ 'textAlign': 'right', 'backgroundColor': 'white'}}>
                                <Button variant="primary" type="submit">
                                    Salvar
                                </Button>
                            </Card.Footer>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Situacao