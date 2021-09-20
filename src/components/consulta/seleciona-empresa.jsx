import React, { useState, memo, useImperativeHandle, useRef } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ConsultaEmpresa from "../../components/consulta/consulta-empresa"

const SelecionaEmpresa = React.forwardRef((props, ref) => {    
    const selectionaEmpresaRef = useRef();
    const [showConsultaEmpresa, setShowConsultaEmpresa] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState('')

    const modalConsultaHandler = _ => {
        setShowConsultaEmpresa(!showConsultaEmpresa)
    }

    const selectCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
        props.onSelectedCompany(empresa)
    }
    
    const clearSelectedCompany = () => {
        setSelectedCompany('')
    }

    useImperativeHandle(ref,() => ({
        clear : clearSelectedCompany
    }))

    return <div ref={selectionaEmpresaRef}>
        {
            showConsultaEmpresa && <ConsultaEmpresa key={1} show={showConsultaEmpresa} onClose={modalConsultaHandler} onSelectedCompany={selectCompanyHandler}></ConsultaEmpresa>
        }

        <Row className="g-3">
            <Col style={{ 'textAlign': 'left' }}>
                <Button onClick={modalConsultaHandler} size='sm' variant='light'>Escolher Empresa</Button>
            </Col>
            <div >
                {
                    selectedCompany && <span style={{ 'float': 'left' }}>
                        Empresa selecionada: <strong>{selectedCompany.nomeFantasia} - {selectedCompany.razaoSocial} {selectedCompany.apelido} </strong>
                    </span>
                }
            </div>
        </Row>
    </div>
})

export default memo(SelecionaEmpresa)