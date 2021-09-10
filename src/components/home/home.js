import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BusinessIcon from '@material-ui/icons/Business'
import PeopleIcon from '@material-ui/icons/People'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import styles from './home.module.css'
import Situacao from '../situacao/situacao'
import Prolabore from '../prolabore/prolabore';
import Tributacao from '../tributacao/tributacao';
import Empresa from '../empresa/empresa';

const Home = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Consulta" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                                <NavDropdown.Item href="#action/3.1">
                                    <BusinessIcon fontSize='large'></BusinessIcon><span className={styles.subMenu}>Empresas</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider className={styles.divider} />
                                <NavDropdown.Item href="#action/3.2"><PeopleIcon fontSize='large'></PeopleIcon><span className={styles.subMenu}>Pessoas</span></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Manutenção" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                                <NavDropdown.Item href="/Empresa"><BusinessIcon fontSize='large'></BusinessIcon><span className={styles.subMenu}>Empresas</span></NavDropdown.Item>
                                <NavDropdown.Divider className={styles.divider} />
                                <NavDropdown.Item href="/Tributacao"><MonetizationOnIcon fontSize='large'></MonetizationOnIcon><span className={styles.subMenu}>Tributação</span></NavDropdown.Item>
                                <NavDropdown.Divider className={styles.divider} />
                                <NavDropdown.Item href="/Prolabore"><DonutSmallIcon fontSize='large'></DonutSmallIcon><span className={styles.subMenu}>Prolabore</span></NavDropdown.Item>
                                <NavDropdown.Divider className={styles.divider} />
                                <NavDropdown.Item href="/Situacao"><PriorityHighIcon fontSize='large'></PriorityHighIcon> <span to='/Situacao' className={styles.subMenu}>Situação</span></NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route path="/Situacao">
                        <Situacao />
                    </Route>
                    <Route path="/Prolabore">
                        <Prolabore />
                    </Route>
                    <Route path="/Tributacao">
                        <Tributacao />
                    </Route>
                    <Route path="/Empresa">
                        <Empresa />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Home