import { useContext } from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import LoginContext from '../../store/login-context'
import styles from './home.module.css'

const MainNavBar = (props) => {
    const loginCtx = useContext(LoginContext)
    const onLogoutHandler = () => {
        loginCtx.Logout()
    }

    return (
        <Navbar className={styles.mainNavColor}>
            <Container>
                <Navbar.Brand href="#home">PVS Rol</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Bem vindo: {loginCtx.userName}
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button type='button' variant='warning' onClick={onLogoutHandler}>Sair</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavBar