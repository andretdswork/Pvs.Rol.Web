import { useState, useRef, useEffect } from 'react'
import PvsCard from "../../UI/card/pvs-card"
import PvsInput from '../../UI/input/pvsInput'
import PvsSelect from '../../UI/select/pvs-select'
import { Form, Row, Col } from 'react-bootstrap'
import ServiceUtils from '../../service/serviceutils'

const Empresa = () => {
    const selectedEstadoEnderecoRef = useRef()
    const [apelido, setApelido] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [ufEndereco, setUfEndereco] = useState('SP')
    const [ufsEndereco,setUfsEndereco] = useState([])

    useEffect(() => {
        const service = new ServiceUtils()
        const estados = service.getEstados()        
        setUfsEndereco(estados)        
    },[])

    const Create = (event) => {
        event.preventDefault()
    }

    const setApelidoHandler = (value) => {
        setApelido(value)
    }

    const setCnpjHandler = (value) => {
        setCnpj(value)
    }

    const setRazaoSocialHandler = (value) => {
        setRazaoSocial(value)
    }

    const setResponsavelHandler = (value) => {
        setResponsavel(value)
    }

    const setNomeFantasiaHandler = (value) => {
        setNomeFantasia(value)
    }

    const setCepHandler = (value) => {
        setCep(value)
    }

    const setRuaHandler = (value) => {
        setRua(value)
    }

    const setNumeroHandler = (value) => {
        setNumero(value)
    }
    const setComplementoHandler = (value) => {
        setComplemento(value)
    }
    const setBairroHandler = (value) => {
        setBairro(value)
    }
    const setCidadeHandler = (value) => {
        setCidade(value)
    }

    const setUfEnderecoHandler = (value) => {
        setUfEndereco(value)
    }

    const searchAddressHandler = async (value) => {
        let endereco = await new ServiceUtils().buscarEnderecoPorCep(value)
        if (endereco)
        {
            setRua(endereco.data.logradouro)
            setBairro(endereco.data.bairro)
            setCidade(endereco.data.localidade)
            setUfEnderecoHandler(endereco.uf)
        }
    }

    return (
        <PvsCard title='Empresa'>
            <Form onSubmit={Create}>
                <Row className='g-2' >
                    <Col lg={1}>
                        <PvsInput type="text" placeHolder="Apelido" onChange={setApelidoHandler} value={apelido} required={true} label="Apelido" maxLength={20} size='sm' />
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="text" placeHolder="CNPJ" onChange={setCnpjHandler} value={cnpj} required={true} label="CNPJ" maxLength={15} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Razão Social" onChange={setRazaoSocialHandler} value={razaoSocial} required={true} label="Razão Social" maxLength={60} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Nome Fantasia" onChange={setNomeFantasiaHandler} value={nomeFantasia} required={true} label="Nome Fantasia" maxLength={60} size='sm' />
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="text" placeHolder="Responsável" onChange={setResponsavelHandler} value={responsavel} required={true} label="Responsável" maxLength={60} size='sm' />
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-2">
                        <Col md={2} >
                            <PvsInput type="text" placeHolder="CEP" onChange={setCepHandler} value={cep} required={true} label="CEP" maxLength={8} onBlur={searchAddressHandler}/>
                        </Col>
                        <Col >
                            <PvsInput type="text" placeHolder="Rua" onChange={setRuaHandler} value={rua} required={true} label="Rua" maxLength={100} />
                        </Col >
                        <Col md={2} >
                            <PvsInput type="number" placeHolder="Número" onChange={setNumeroHandler} value={numero} required={true} label="Número" maxLength={5} />
                        </Col >
                        <Col >
                            <PvsInput type="text" placeHolder="Complemento" onChange={setComplementoHandler} value={complemento} required={true} label="Complemento" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PvsInput type="text" placeHolder="Bairro" onChange={setBairroHandler} value={bairro} required={true} label="Bairro" size='sm'/>
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Cidade" onChange={setCidadeHandler} value={cidade} required={true} label="Cidade" />
                        </Col>       
                        <Col>
                            <PvsSelect options={ufsEndereco} defaultValue={ufEndereco} onChangeHandler={setUfEnderecoHandler} ref={selectedEstadoEnderecoRef} label="Estado"></PvsSelect>
                        </Col>                 
                    </Row>

            </Form>
        </PvsCard>
    )
}

export default Empresa