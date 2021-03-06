import { useState } from 'react'
import { Modal, ModalBody, Row, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import EmpresaService from '../../service/empresaservice'
import styles from './consulta-empresa.module.css'
import { toast } from 'react-toastify'
import ConsultaEmpresaDetalhe from './consulta-empresa-detalhe'

const ConsultaEmpresa = (props) => {    
    const [show] = useState(props.show)
    const [filter, setFilter] = useState()
    const [listaEmpresa, setListaEmpresa] = useState()
    const [empresaSelecionada, setEmpresaSelecionada] = useState('')    

    const handleClose = _ => {
        props.onSelectedCompany(empresaSelecionada)
        props.onClose()
    } 

    const handlerConsultar = async (event) => {
        event.preventDefault()
        let service = new EmpresaService()
        if (filter) {            
            const response = await service.SearchByfilter(filter).then((data) => {
                return data
            })            
            setListaEmpresa(response)            
        }
        else
            toast.warning('Preencher consulta')        
    }    

    const onFilterChangeHandler = (event) => {
        setFilter(event.target.value)
    }

    const modalOverlayElement = document.getElementById('overlay-root')

    const setEmpresaSelecionadaHandler = (empresa) => {
        setEmpresaSelecionada(empresa)
    }

    return (
        <>
            {
                ReactDOM.createPortal(
                    <Modal show={show} onHide={handleClose} size="lg" backdrop='static' dialogClassName={styles.modalSize}>
                        <ModalHeader closeButton>
                            <h4>
                                Selecionar Empresa
                                <div>
                                    <span className={styles.empresaSelecionada}>{empresaSelecionada.razaoSocial}</span>                                    
                                </div>
                            </h4>
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Form onSubmit={handlerConsultar}>
                                    <InputGroup className="mb-3" onChange={onFilterChangeHandler} >
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
                            <Row>
                                {listaEmpresa && <>
                                    <ConsultaEmpresaDetalhe listaEmpresa={listaEmpresa} onEmpresaSelecionada={setEmpresaSelecionadaHandler}/>                                    
                                </>
                                
                                }
                            </Row>
                        </ModalBody>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal>, modalOverlayElement)
            }
        </>
    )
}

export default ConsultaEmpresa