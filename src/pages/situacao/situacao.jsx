import { useRef, useState, useEffect } from 'react'
import ConsultaEmpresa from "../../components/consulta/consulta-empresa"
import { toast } from 'react-toastify'
import { Row, Form, FloatingLabel, Col, Button } from 'react-bootstrap'
import PvsCard from '../../UI/card/pvs-card'
import SituacaoService from '../../service/situacaoservice'
import PvsSelect from '../../UI/select/pvs-select'

const Situacao = () => {
    const [showConsultaEmpresa, setShowConsultaEmpresa] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState('')
    const [dataSituacao, setDataSituacao] = useState('')
    const [status, setStatus] = useState(1)
    const [lisStatus, setListStatus] = useState([])

    useEffect(() => {
        let service = new SituacaoService()
        setListStatus(service.getListStatus())
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
                selectInputRef.current.defaultValue(1)
            }
            else {
                toast.error('Erro ao salvar Situacao')
            }
        }
        else
            toast.warning('Os campos Data Situação, Status e Empresa')
    }

    const modalConsultaHandler = _ => {
        setShowConsultaEmpresa(!showConsultaEmpresa)
    }

    const selectCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    const setDataSituacaoHanlder = (event) => {
        setDataSituacao(event.target.value)
    }

    const setStatusHandler = (value) => {
        setStatus(value)
    }

    const selectInputRef = useRef()

    return (
        <>
            {
                showConsultaEmpresa && <ConsultaEmpresa key={1} show={showConsultaEmpresa} onClose={modalConsultaHandler} onSelectedCompany={selectCompanyHandler}></ConsultaEmpresa>
            }

            <PvsCard>
                <Form onSubmit={CriarSituacao}>
                    <Row className="g-3">
                        <Col style={{ 'textAlign': 'left' }}>
                            <Button onClick={modalConsultaHandler} size='sm' variant='light'>Escolher Empresa</Button>
                        </Col>
                        <div >
                            {
                                selectedCompany && <span style={{ 'float': 'left' }}>
                                    Empresa selecionada: <strong>{selectedCompany.razaoSocial} {selectedCompany.cnpj} </strong>
                                </span>
                            }
                        </div>
                    </Row>
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

export default Situacao