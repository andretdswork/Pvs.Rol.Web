import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Business from '@material-ui/icons/Business';
import People from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Assignment from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import styles from './menu.module.css'
import {
    Link
} from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.marginBottom10}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Consulta" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                            <NavDropdown.Item href="#action/3.1">
                                <Business fontSize='large'></Business><span className={styles.subMenu}>Empresas</span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={styles.divider} />
                            <NavDropdown.Item href="#action/3.2"><People fontSize='large'></People><span className={styles.subMenu}>Pessoas</span></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Manutenção" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                            <NavDropdown.Item>
                                <Business fontSize='large'></Business>
                                <Link to='/Empresa' className={styles.subMenu}>
                                    Empresas
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={styles.divider} />
                            <NavDropdown.Item >
                                <MonetizationOnIcon fontSize='large'></MonetizationOnIcon>
                                <Link to='/Tributacao' className={styles.subMenu}>
                                    Tributação
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={styles.divider} />
                            <NavDropdown.Item >
                                <DonutSmallIcon fontSize='large'></DonutSmallIcon>
                                <Link to='/Prolabore' className={styles.subMenu}>
                                    Prolabore
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={styles.divider} />
                            <NavDropdown.Item>
                                <PriorityHighIcon fontSize='large'></PriorityHighIcon>
                                <Link to='/Situacao' className={styles.subMenu}>
                                    Situação
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={styles.divider} />
                            <NavDropdown.Item>
                                <Assignment fontSize='large'></Assignment>
                                <Link to='/Observacao' className={styles.subMenu}>
                                    Observação
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Financeiro" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                            <NavDropdown.Item>
                                <PeopleIcon fontSize='large'></PeopleIcon>
                                <Link to='/Pessoa' className={styles.subMenu}>
                                    Pessoas
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu