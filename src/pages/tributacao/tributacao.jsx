import { useRef, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Row, Form, Col, Button } from 'react-bootstrap'
import PvsCard from '../../UI/card/pvs-card'
import PvsSelect from '../../UI/select/pvs-select'
import PvsInput from '../../UI/input/pvsInput'
import SelecionaEmpresa from '../../components/consulta/seleciona-empresa'
import TributacaoService from '../../service/tributacaoservice'

const Tributacao = () => {

    const selectInputRef = useRef()
    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')
    const [dataTributacao, setDataTributacao] = useState('')
    const [status, setStatus] = useState(0)
    const [lisStatus, setListStatus] = useState([])    

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    useEffect( () => {
        let service = new TributacaoService()
        const fetch =  async function FetchData() {
            const response = await service.getListStatus().then( (data) => {return data})
            setListStatus(response)            
        }
        fetch()
    }, [])


    const Create = async (event) => {
        event.preventDefault()
        let validform = validateForm()
        if (!validform)
        {
            event.stopPropagation();            
            return
        }
        else 
        {
            const service = new TributacaoService()
            let params = {
                companyId : selectedCompany.idEmpresa,
                codTributacao : status,
                dataTributacao : dataTributacao
            }
            const response = await service.Create(params)
            toast.success(response.message)
            ClearForm()
        }
    }

    const ClearForm = () => {
        setSelectedCompany('')                
        setDataTributacao('')
        setStatus('')        
        selecionaEmpresaRef.current.clear()
        selectInputRef.current.defaultValue(0)
    }

    const setDataTributacaoHanlder = (value) => {
        setDataTributacao(value)
    }

    const setStatusHandler = (value) => {
        setStatus(value)
    }

    const validateForm = () => {
        let isValid = true

        if (!dataTributacao){
            toast.warning('Data Situação')
            isValid = false
        }        

        if (!status) {
            toast.warning('Cod. Situação Inválido')
            isValid = false
        }

        if (!selectedCompany) {
            toast.warning('Selecionar uma Empresa')
            isValid = false
        }
        return isValid
    }

    return (
        <PvsCard title='Tributação'>
            <SelecionaEmpresa onSelectedCompany={onSelectedCompanyHandler} ref={selecionaEmpresaRef}/>
            <Form onSubmit={Create}>                   
                <Row className="g-2" md={2} xs={12}>
                    <Col>
                        <PvsInput type='date' placeholder='Data Tributação' onChange={setDataTributacaoHanlder} value={dataTributacao}> </PvsInput>
                    </Col>
                    <Col>
                        <PvsSelect options={lisStatus} defaultValue={status} onChangeHandler={setStatusHandler} ref={selectInputRef} Label='Escolha a Situação'></PvsSelect>
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

export default Tributacao