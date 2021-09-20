import { useRef, useState } from "react"
import { Row, Form, FloatingLabel, Col, Button } from 'react-bootstrap'
import PvsCard from "../../UI/card/pvs-card"
import SelecionaEmpresa from "../../components/consulta/seleciona-empresa"

const Prolabore = () => {
    const selecionaEmpresaRef = useRef()
    const [selectedCompany, setSelectedCompany] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)

    const [cpdSocio, setCpfSocio] = useState('')
    const [anoReferencia, setAnoReferencia] = useState('')
    const [mesReferencia, setMesReferencia] = useState('')
    const [valorProlabore, setValorProlabore] = useState('')

    const onSelectedCompanyHandler = (empresa) => {
        setSelectedCompany(empresa)
    }

    const setCpfSocioHanlder = (event) => {
        setCpfSocio(event.target.value)
    }

    const setAnoReferenciaHanlder = (event) => {
        setAnoReferencia(event.target.value)
    }

    const setMesReferenciaHanlder = (event) => {
        if (event.target.value)
            setMesReferencia(event.target.value)
    }

    const setValorProlaboreHanlder = (event) => {
        setValorProlabore(event.target.value)
    }

    const CriarProlabore = (event) => {
        const form = event.currentTarget;
        if (formIsValid()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setIsValidForm(true);
    }


    const formIsValid = () => {
        let isValid = true
        isValid = (mesReferencia < 0 || mesReferencia > 12 || mesReferencia === '') && (anoReferencia < 0 || anoReferencia === '')
        return isValid
    }


    return (
        <PvsCard>
            <SelecionaEmpresa onSelectedCompany={onSelectedCompanyHandler} ref={selecionaEmpresaRef} />
            <Form onSubmit={CriarProlabore} validated={isValidForm}>
                <Row className="g-2" md={4} xs={12}>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Cpf Sócio">
                            <Form.Control type="number" placeholder="Cpf do Sócio" onChange={setCpfSocioHanlder} value={cpdSocio} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Ano Referência">
                            <Form.Control type="text" placeholder="Ano Referência" onChange={setAnoReferenciaHanlder} value={anoReferencia} maxLength={4} isValid={anoReferencia > 0 && anoReferencia < 13} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Mes Referência">
                            <Form.Control type="text" placeholder="Mes Referência" onChange={setMesReferenciaHanlder} value={mesReferencia} maxLength={2} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Valor">
                            <Form.Control type="text" placeholder="Valor" onChange={setValorProlaboreHanlder} value={valorProlabore} />
                        </FloatingLabel>
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