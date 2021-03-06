import { useRef, useState, useEffect, memo } from 'react'
import { toast } from 'react-toastify'
import { Row, Form, Col, Button } from 'react-bootstrap'
import PvsCard from '../../UI/card/pvs-card'
import PvsInput from '../../UI/input/pvsInput.jsx'
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
            let response = await service.getListStatus()
            console.log(response)
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
            const response = await service.Create(filter)
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

    const setDataSituacaoHanlder = ({value}) => {        
        setDataSituacao(value)
    }

    const setStatusHandler = (value) => {        
        setStatus(value)
    }

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    return (
        <>
            <PvsCard title='Situação'>
                <SelecionaEmpresa onSelectedCompany={onSelectedCompanyHandler} ref={selecionaEmpresaRef}/>
                <Form onSubmit={CriarSituacao}>                   
                    <Row className="g-2" md={2} xs={12}>
                        <Col>                            
                            <PvsInput type='Date'
                            placeholder='Data Situação'
                            onChange={setDataSituacaoHanlder}                            
                            value={dataSituacao}                            
                            required={true}
                            name='dataSituacao'></PvsInput>
                        </Col>
                        <Col>
                            <PvsSelect options={lisStatus} name='status' defaultValue={status} onChange={setStatusHandler} ref={selectInputRef} Label='Escolha a Situação'></PvsSelect>
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