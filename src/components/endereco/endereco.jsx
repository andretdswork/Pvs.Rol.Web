import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import PvsInput from '../../UI/input/pvsInput.jsx'

const Endereco = (props) => {
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')

    const setCepHandler = (event) => {
        setCep(event.target.value)
    }

    const setRuaHandler = (event) => {
        setRua(event.target.value)
    }

    const setNumeroHandler = (event) => {
        setNumero(event.target.value)
    }
    const setComplementoHandler = (event) => {
        setComplemento(event.target.value)
    }
    const setBairroHandler = (event) => {
        setBairro(event.target.value)
    }
    const setCidadeHandler = (event) => {
        setCep(event.target.value)
    }    

    return (
        <>
            <Row style={{'textAlign':'left'}}>
                <h4>Endereco</h4>
            </Row>
            <Row>
                <Col md={2}>
                    <PvsInput type="text" placeHolder="CEP" onChange={setCepHandler} value={cep} required={true} label="CEP" maxLength={8} />
                </Col>
                <Col >
                    <PvsInput type="text" placeHolder="Rua" onChange={setRuaHandler} value={rua} required={true} label="Rua" maxLength={100} />
                </Col >
                <Col md={2}>
                    <PvsInput type="number" placeHolder="Número" onChange={setNumeroHandler} value={numero} required={true} label="Número" maxLength={5} />
                </Col >
                <Col >
                    <PvsInput type="text" placeHolder="Complemento" onChange={setComplementoHandler} value={complemento} required={true} label="Complemento" />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <PvsInput type="text" placeHolder="Bairro" onChange={setBairroHandler} value={bairro} required={true} label="Bairro" />
                </Col>
                <Col>
                    <PvsInput type="text" placeHolder="Cidade" onChange={setCidadeHandler} value={cidade} required={true} label="Cidade" />
                </Col>
            </Row>
        </>
    )
}

export default Endereco