import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import PvsInput from '../../UI/input/pvsInput.jsx'

const Endereco = (props) => {
    let Endereco = {
        cep : '',
        rua : '',
        numero : '',
        complemento : '',
        bairro : '',
        cidade : ''
    }

    const [endereco, setEndereco] = useState(Endereco)

    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')

    const setCepHandler = (event) => {
        setEndereco((prev) => { return {...prev , cep = event.target.value }} )
    }

    const setRuaHandler = (event) => {
        setEndereco((prev) => {{ return {...prev , rua : event.target.value }}} )
    }

    const setNumeroHandler = (event) => {
        setEndereco((prev) => { return { ...prev , numero : event.target.value }})
    }
    const setComplementoHandler = (event) => {
        setEndereco((prev) => { return { ...prev , complemento : event.target.value } })
    }
    const setBairroHandler = (event) => {
        setEndereco((prev) => { return { ...prev , bairro : event.target.value }})
    }
    const setCidadeHandler = (event) => {
        setEndereco((prev) => {  return { ...prev , cidade : event.target.value } })
    }

    return (
        <>
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