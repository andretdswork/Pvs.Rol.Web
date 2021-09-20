import { useRef, useState, useEffect, memo } from 'react'
import { toast } from 'react-toastify'
import { Row, Form, FloatingLabel, Col, Button } from 'react-bootstrap'
import PvsCard from '../../UI/card/pvs-card'
import SituacaoService from '../../service/situacaoservice'
import PvsSelect from '../../UI/select/pvs-select'
import SelecionaEmpresa from '../../components/consulta/seleciona-empresa'

const Situacao = () => {
    const selectInputRef = useRef()
    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')
    const [dataSituacao, setDataSituacao] = useState('')
    const [status, setStatus] = useState(0)
    const [lisStatus, setListStatus] = useState([])

    useEffect( () => {
        let service = new SituacaoService()        
        const fetch =  async function FetchData() {
            const response = await service.getListStatus().then( (data) => {return data})
            setListStatus(response)            
        }
        fetch()
    }, [])

    const CriarSituacao = async (event) => {
        event.preventDefault()
        let service = new SituacaoService()
        if (selectedCompany && dataSituacao && status) {
            let filter = {
                idempresa: selectedCompany.idEmpresa,
                dataSituacao: dataSituacao,
                status: status
            }
            const response = await service.Create(filter).then((data) => {
                return data
            })
            if (response) {
                toast.success('Situacao salvo com sucesso!!')
                setSelectedCompany('')                
                setDataSituacao('')
                selecionaEmpresaRef.current.clear()
                selectInputRef.current.defaultValue(0)
            }
            else {
                toast.error('Erro ao salvar Situacao')
            }
        }
        else
            toast.warning('Os campos Data Situação, Status e Empresa')
    }

    const setDataSituacaoHanlder = (event) => {        
        setDataSituacao(event.target.value)
    }

    const setStatusHandler = (value) => {        
        setStatus(value)
    }

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    return (
        <>
            <PvsCard>
                <SelecionaEmpresa onSelectedCompany={onSelectedCompanyHandler} ref={selecionaEmpresaRef}/>
                <Form onSubmit={CriarSituacao}>                   
                    <Row className="g-2" md={2} xs={12}>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="Data Situação">
                                <Form.Control type="date" placeholder="name@example.com" onChange={setDataSituacaoHanlder} value={dataSituacao} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <PvsSelect options={lisStatus} defaultValue={status} onChangeHandler={setStatusHandler} ref={selectInputRef}></PvsSelect>                            
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" style={{ 'float': 'left' }}>
                                Salvar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </PvsCard>
        </>
    )
}

export default memo(Situacao)