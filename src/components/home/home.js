import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

const Home = (props) => {
    const onLogoutHandler = () => {
        props.onLogout()
    }

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Pvs Rol</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Bem vindo: {props.userName}
                        </Navbar.Text>                        
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">                        
                        <Navbar.Text>
                            <Button type='button' variant='warning' onClick={onLogoutHandler}>Sair</Button>
                        </Navbar.Text>                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Consulta Empresa</Nav.Link>
                            <Nav.Link href="#link">Empresa</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link href="#link" className="justify-content-end">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Home