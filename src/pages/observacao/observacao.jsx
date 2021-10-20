import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { Form, Col, Button, Row } from 'react-bootstrap'
import PvsCard from "../../UI/card/pvs-card"
import PvsInput from "../../UI/input/pvsInput"
import SelecionaEmpresa from '../../components/consulta/seleciona-empresa'
import ObservacaoService from '../../service/observacaoservice'

const Observacao = (props) => {
    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')
    const [observacao, setObservacao] = useState('')

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    const Create = async (event) => {
        event.preventDefault()
        let validform = validateForm()
        if (!validform) {
            event.stopPropagation();            
            return
        }
        else {
            const service = new ObservacaoService()
            let params = {
                companyId: selectedCompany.idEmpresa,
                description: observacao
            }
            const response = await service.Create(params)
            toast.success(response.message)
            ClearForm()
        }
        validateForm()
    }

    const ClearForm = () => {
        setObservacao('')
        selecionaEmpresaRef.current.clear()
    }

    const validateForm = () => {
        let isValid = true

        if (!observacao) {
            toast.warning('Preencher a Observação')
            isValid = false
        }

        if (!selectedCompany) {
            toast.warning('Selecionar uma Empresa')
            isValid = false
        }
        return isValid
    }

    const setObservacaoHandler = ({value}) => {
        setObservacao(value)
    }

    return (
        <PvsCard title='Observação'>
            <SelecionaEmpresa onSelectedCompany={onSelectedCompanyHandler} ref={selecionaEmpresaRef} />
            <Form onSubmit={Create}>
                <Row className="g-2" md={1} xs={12}>
                    <Col>
                        <PvsInput type="text" placeHolder="Observação" name='observacao' onChange={setObservacaoHandler} value={observacao} required={true} label="Observação" maxLength={500} isTextArea={true} />
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

export default Observacao