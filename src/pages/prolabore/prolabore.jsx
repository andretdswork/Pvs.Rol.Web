import { useRef, useState } from "react"
import { Row, Form, Col, Button } from 'react-bootstrap'
import PvsCard from "../../UI/card/pvs-card"
import SelecionaEmpresa from "../../components/consulta/seleciona-empresa"
import PvsInput from "../../UI/input/pvsInput"
import { toast } from 'react-toastify'
import Validator from "../../service/validatorservice"
import ProlaboreService from "../../service/prolaboreservice"

const Prolabore = () => {
    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')
    const [isValidForm, setIsValidForm] = useState(null)

    const [cpfSocio, setCpfSocio] = useState('')
    const [anoReferencia, setAnoReferencia] = useState('')
    const [mesReferencia, setMesReferencia] = useState('')
    const [valorProlabore, setValorProlabore] = useState('')

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    const setCpfSocioHanlder = (value) => {
        setCpfSocio(value)
    }

    const setAnoReferenciaHanlder = (value) => {
        setAnoReferencia(value)
    }

    const setMesReferenciaHanlder = (value) => {        
        setMesReferencia(value)
    }

    const setValorProlaboreHanlder = (value) => {
        setValorProlabore(value)
    }

    const CriarProlabore = async (event) => {
        event.preventDefault();
        let validform = validateForm()        
        if (!validform) {            
            event.stopPropagation();
            setIsValidForm(validform)
            return
        }
        else {
            const service = new ProlaboreService()
            let params = {
                companyId : selectedCompany.idEmpresa,
                cpfSocio : cpfSocio,
                referenceYear : anoReferencia,
                referenceMonth  : mesReferencia,
                prolaboreValue : valorProlabore    
            }
            console.log('params')
            const response = await service.Create(params)
            toast.success(response.message)
            ClearForm()
        }    
        setIsValidForm(validform);
    }

    const ClearForm = () => {
        setSelectedCompany('')                
        setAnoReferencia('')
        setMesReferencia('')
        setValorProlabore('')
        setCpfSocio('')
        selecionaEmpresaRef.current.clear()
    }

    const validateForm = () => {
        let isValid = true
        const valitador = new Validator()
        if (!valitador.CpfIsValid(cpfSocio)){
            toast.warning('Cpf inválido')
            isValid = false
        }

        if (anoReferencia.length !== 4 || isNaN(anoReferencia)){
            toast.warning('Ano de Referência inválido')            
            isValid = false
        }

        if (mesReferencia.length !== 2 || isNaN(mesReferencia)) {
            toast.warning('Mes Referência inválido')
            isValid = false
        }

        if (valorProlabore.length === 0 || isNaN(valorProlabore)) {
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
                        <PvsInput type="text" placeHolder="Cpf do Sócio" onChange={setCpfSocioHanlder} value={cpfSocio} required={true} label="Cpf do Sócio" maxLength={11} />                        
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Ano Referência" onChange={setAnoReferenciaHanlder} value={anoReferencia} required={true} label="Ano Referência" maxLength={4} min={1999} max={2100}/>
                    </Col>
                    <Col>
                        <PvsInput type="number" placeHolder="Mes Referência" onChange={setMesReferenciaHanlder} value={mesReferencia} required={true} label="Mes Referência" maxLength={2} min={1} max={12}/>
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Valor" onChange={setValorProlaboreHanlder} value={valorProlabore} required={true} label="Valor Prolabore" />
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