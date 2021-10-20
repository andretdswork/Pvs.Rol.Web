import { useRef, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Row, Form, Col, Button } from 'react-bootstrap'
import PvsCard from '../../UI/card/pvs-card'
import PvsSelect from '../../UI/select/pvs-select'
import PvsInput from '../../UI/input/pvsInput'
import SelecionaEmpresa from '../../components/consulta/seleciona-empresa'
import TributacaoService from '../../service/tributacaoservice'

const Tributacao = () => {
    const initialState = {
        dataTributacao : '',
        status : 0
    }

    const [tributacao, setTributacao] = useState(initialState)

    const selectInputRef = useRef()
    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')
    const [lisStatus, setListStatus] = useState([])

    const setTributacaoHandler = ({name, value}) => {
        setTributacao((prev) => { return { ...prev, [name] : value}} )
    }    

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
                codTributacao : tributacao.status,
                dataTributacao : tributacao.dataTributacao
            }
            const response = await service.Create(params)
            toast.success(response.message)
            ClearForm()
        }
    }

    const ClearForm = () => {
        setTributacao(initialState)
        selecionaEmpresaRef.current.clear()
        selectInputRef.current.defaultValue(0)
    }

    const validateForm = () => {
        let isValid = true

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
                        <PvsInput type='date'  name='dataTributacao' placeholder='Data Tributação' onChange={setTributacaoHandler} required={true} value={tributacao.dataTributacao}> </PvsInput>
                    </Col>
                    <Col>
                        <PvsSelect options={lisStatus} name='status' defaultValue={tributacao.status} onChange={setTributacaoHandler} required={true} ref={selectInputRef} Label='Escolha a Situação'></PvsSelect>
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