import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap'
import styles from './login.module.css'
import { useState } from 'react'

const Login = (props) => {
    const [password, setPassword] = useState(null)
    const [login, setLogin]= useState(null)

    const onLoginHandler = (event) => {
        event.preventDefault()
        props.onLogin(login, password)
    }

    const loginChangeHandler = (event) => {
        setLogin(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Container fluid>
            <Row className={styles.logincenter}>
                <Col md={4} xs={12} className={styles.loginCenter}>
                    <Card className={styles.textleft} >
                        <Card.Header className={styles.cardheader}>
                            Login Pvs Rol
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onLoginHandler}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={styles.labelTitle}>Login</Form.Label>
                                    <Form.Control type="text" placeholder="Nome de Usuário" onChange={loginChangeHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className={styles.labelTitle}>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Senha" onChange={passwordChangeHandler} />
                                </Form.Group>
                                <Button type='submit' variant='primary' className={styles.floatright}>Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login