import { Container, Nav, Navbar } from 'react-bootstrap'



const Home = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Consulta Empresa</Nav.Link>
                            <Nav.Link href="#link">Empresa</Nav.Link>
                            <Nav.Link href="#link" className="justify-content-end">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Home