import { useRef, useState } from "react"
import { Row, Form, Col, Button } from 'react-bootstrap'
import PvsCard from "../../UI/card/pvs-card"
import SelecionaEmpresa from "../../components/consulta/seleciona-empresa"
import PvsInput from "../../UI/input/pvsInput"
import { toast } from 'react-toastify'
import Validator from "../../service/validatorservice"
import ProlaboreService from "../../service/prolaboreservice"

const Prolabore = () => {
    const inititalState = {
        cpfSocio : '',
        anoReferencia : '',
        mesReferencia : '',
        valorProlabore : ''
    }

    const [prolabore, setProlabore] = useState(inititalState)

    const setProlaboreHandler = (name, value) => {
        setProlabore((prev) => { return { ...prev, [name] : value}} )
    }

    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')    

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }    

    const CriarProlabore = async (event) => {
        event.preventDefault();
        let validform = validateForm()        
        if (!validform) {            
            event.stopPropagation();            
            return
        }
        else {
            const service = new ProlaboreService()
            let params = {
                companyId : selectedCompany.idEmpresa,
                cpfSocio : prolabore.cpfSocio,
                referenceYear : prolabore.anoReferencia,
                referenceMonth  : prolabore.mesReferencia,
                prolaboreValue : prolabore.valorProlabore    
            }
            const response = await service.Create(params)
            toast.success(response.message)
            ClearForm()
        }
    }

    const ClearForm = () => {
        setProlabore(inititalState)
        selecionaEmpresaRef.current.clear()
    }

    const validateForm = () => {
        let isValid = true
        const valitador = new Validator()
        if (!valitador.CpfIsValid(prolabore.cpfSocio)){
            toast.warning('Cpf inválido')
            isValid = false
        }

        if (prolabore.anoReferencia.length !== 4 || isNaN(prolabore.anoReferencia)){
            toast.warning('Ano de Referência inválido')            
            isValid = false
        }

        if (prolabore.mesReferencia.length !== 2 || isNaN(prolabore.mesReferencia)) {
            toast.warning('Mes Referência inválido')
            isValid = false
        }

        if (prolabore.valorProlabore.length === 0 || isNaN(prolabore.valorProlabore)) {
            toast.warning('Valor Prolabore inválido')
            isValid = false
        }

        if (!selectedCompany) {
            toast.warning('Selecionar uma Empresa')
            isValid = false
        }
        return isValid
    }

    return (
        <PvsCard title='Prolabore'>
            <SelecionaEmpresa onSelectedCompany={onSelectedCompanyHandler} ref={selecionaEmpresaRef} />
            <Form onSubmit={CriarProlabore} >
                <Row className="g-2" md={4} xs={12}>
                    <Col >
                        <PvsInput type="text" placeHolder="Cpf do Sócio" name='cpfSocio' onChange={setProlaboreHandler} value={prolabore.cpfSocio} required={true} label="Cpf do Sócio" maxLength={11} />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Ano Referência" name='anoReferencia' onChange={setProlaboreHandler} value={prolabore.anoReferencia} required={true} label="Ano Referência" maxLength={4} min={1999} max={2100}/>
                    </Col>
                    <Col>
                        <PvsInput type="number" placeHolder="Mes Referência" name='mesReferencia' onChange={setProlaboreHandler} value={prolabore.mesReferencia} required={true} label="Mes Referência" maxLength={2} min={1} max={12}/>
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Valor" name='valorProlabore' onChange={setProlaboreHandler} value={prolabore.valorProlabore} required={true} label="Valor Prolabore" />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" style={{ 'float': 'left' }}>
                            Salvar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </PvsCard>
    )
}

export default Prolabore