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

    const showMenuHandler = () => {
        console.log(`mouseover`)
    }

    return (
        <Navbar bg="light" expand="lg" className={styles.marginBottom}>
            <Container>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <a href='#'>Consultas</a>
                            <ul>
                                <li>
                                    <Business fontSize='large'></Business>
                                    <Link to='/Empresa'>Empresa</Link>
                                </li>
                                <li>
                                    <PeopleIcon fontSize='large'></PeopleIcon>
                                    <Link to='/Pessoa'>Pessoa</Link>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href='#'>Manutenção</a>
                            <ul>
                                <li >
                                    <Business fontSize='large'></Business>
                                    <Link to='/Empresa'>  Empresa</Link>
                                </li>
                                <li >
                                    <MonetizationOnIcon fontSize='large'></MonetizationOnIcon>
                                    <Link to='/Tributacao'>Tributação</Link>
                                </li>
                                <li >
                                    <DonutSmallIcon fontSize='large'></DonutSmallIcon>
                                    <Link to='/Prolabore'>Prolabore</Link>
                                </li>
                                <li >
                                    <PriorityHighIcon fontSize='large'></PriorityHighIcon>
                                    <Link to='/Observacao'>Observação</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>Financeiro</a>
                            <ul>
                                <li>
                                    <PeopleIcon fontSize='large'></PeopleIcon>
                                    <Link to='/Pessoa'>Pessoa</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Navbar>



    )

    /*return (
        <Navbar bg="light" expand="lg" className={styles.marginBottom10}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Consulta" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                            <NavDropdown.Item href="/Empresa">
                                <Business fontSize='large'></Business><span className={styles.link}>Empresas</span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={styles.divider} />
                            <NavDropdown.Item href="#action/3.2"><People fontSize='large'></People><span className={styles.link}>Pessoas</span></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Manutenção" id="basic-nav-dropdown" className={styles.dropdownMenu} onMouseOver={showMenuHandler}>
                            <div className={styles.submenu}>
                                <Business fontSize='large'></Business>
                                <Link to='/Empresa' className={styles.link}>
                                    Empresas
                                </Link>
                            </div>
                            <NavDropdown.Divider className={styles.divider} />
                            <div className={styles.submenu}>
                                <MonetizationOnIcon fontSize='large'></MonetizationOnIcon>
                                <Link to='/Tributacao' className={styles.link}>
                                    Tributação
                                </Link>
                            </div>
                            <NavDropdown.Divider className={styles.divider} />
                            <div className={styles.submenu}>
                                <DonutSmallIcon fontSize='large'></DonutSmallIcon>
                                <Link to='/Prolabore' className={styles.link}>
                                    Prolabore
                                </Link>
                            </div>
                            <NavDropdown.Divider className={styles.divider} />
                            <div className={styles.submenu}>
                                <PriorityHighIcon fontSize='large'></PriorityHighIcon>
                                <Link to='/Situacao' className={styles.link}>
                                    Situação
                                </Link>
                            </div>
                            <NavDropdown.Divider className={styles.divider} />
                            <div className={styles.submenu}>
                                <Assignment fontSize='large'></Assignment>
                                <Link to='/Observacao' className={styles.link}>
                                    Observação
                                </Link>
                            </div>
                        </NavDropdown>
                        <NavDropdown title="Financeiro" id="basic-nav-dropdown" className={styles.dropdownMenu}>
                            <NavDropdown.Item>
                                <PeopleIcon fontSize='large'></PeopleIcon>
                                <Link to='/Pessoa' className={styles.link}>
                                    Pessoas
                                </Link>
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )*/
}

export default Menu