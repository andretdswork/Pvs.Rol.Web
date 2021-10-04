import { useState, useRef, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import PvsCard from "../../UI/card/pvs-card"
import PvsInput from "../../UI/input/pvsInput"
import PvsSelect from '../../UI/select/pvs-select'
import ServiceUtils from '../../service/serviceutils'
import PessoaService from '../../service/pessoaservice'
import styles from './pessoa.module.css'


const listSexo = [{
    key: 'M',
    label: 'Masculino'
}, {
    key: 'F',
    label: 'Feminino'
}]

const listNacionalidade = [{
    key: '1',
    label: 'Brasileiro'
}, {
    key: '2',
    label: 'Estrangeiro'
}]

const Pessoa = (props) => {
    const selectInputRef = useRef()
    const selectedEstadoRef = useRef()
    const selectedEstadoEnderecoRef = useRef()
    const [cpf, setCpf] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [primeiroNome, setPrimeiroNome] = useState('')
    const [sexo, setSexo] = useState('1')
    const [rg, setRg] = useState('')
    const [dataExpedicao, setDataExpedicao] = useState('')
    const [orgaoExpeditor, setOrgaoExpeditor] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [nacionalidade, setNacionalidade] = useState('1')
    const [municipio, setMunicipio] = useState('')
    const [profissao, setProfissao] = useState('')
    const [estadoCivil, setEstadoCivil] = useState('1')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [ddd1, setDdd1] = useState('')
    const [tel1, setTel1] = useState('')
    const [ddd2, setDdd2] = useState('')
    const [tel2, setTel2] = useState('')
    const [pis, setPis] = useState('')
    const [tituloEleitor, setTituloEleitor] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf,setUf] = useState('SP')
    const [ufs, setUfs] = useState([])
    const [ufEndereco, setUfEndereco] = useState('SP')
    const [ufsEndereco,setUfsEndereco] = useState([])
    const [listEstadoCivil, setListEstadoCivil] = useState([])

    const Create = async (event) => {
        event.preventDefault()
        
        let params = {
            Cpf : cpf,
            NomeCompleto : nomeCompleto,
            PrimeiroNome : primeiroNome,
            Genero : sexo,
            Rg : rg,
            DataExpedicaoRg : dataExpedicao,
            OrgaoExpeditor : orgaoExpeditor,
            DataNascimento : dataNascimento,
            Nacionalidade : nacionalidade,
            Cidade : municipio,
            Uf : uf,
            Profissao : profissao,
            EstadoCivil : estadoCivil,
            Email1 : email1,
            Email2 : email2,
            DDD1 : ddd1,
            Telefone1: tel1,
            DDD2 : ddd2,
            Telefone2 : tel2,
            PIS : pis,
            TituloEleitor : tituloEleitor,
            Cep : cep,
            Rua : rua,
            Numero : numero,
            Complemento : complemento,
            Bairro : bairro,
            CidadeEndereco : cidade,            
            UfEndereco : ufEndereco
        }
        const service = new PessoaService()
        const response = await service.Create(params)
        toast.success(response.message)
        ClearForm()
    } 

    const ClearForm = () => {
        setCpf('')
        setNomeCompleto('')
        setPrimeiroNome('')
        setSexo('')
        useState('')
        setDataExpedicao('')
        setOrgaoExpeditor('')
        setDataNascimento('')
        setNacionalidade('')
        setMunicipio('')
        setProfissao('')
        setEstadoCivil('')
        setEmail1('')
        setEmail2('')
        setDdd1('')
        setTel1('')
        setDdd2('')
        setTel2('')
        setPis('')
        setTituloEleitor('')
        setCep('')
        setRua('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setCidade('')
        setUf('SP')    
        setUfEndereco('SP')
    }

    useEffect(() => {
        const service = new ServiceUtils()
        const estados = service.getEstados()
        setUfs(estados)
        setUfsEndereco(estados)
        const listaEstadoCivil = service.getEstadoCivil()
        setListEstadoCivil(listaEstadoCivil)
    },[])

    const setUfHandler = (value) => {
        setUf(value)
    }

    const setCpfHandler = (value) => {
        setCpf(value)
    }

    const setNomeCompletoHandler = (value) => {
        setNomeCompleto(value)
    }

    const setPrimeiroNomeHandler = (value) => {
        setPrimeiroNome(value)
    }

    const setSexoHandler = (value) => {
        setSexo(value)
    }

    const setRgHandler = (value) => {
        setRg(value)
    }

    const setDataExpedicaoHandler = (value) => {
        setDataExpedicao(value)
    }

    const setOrgaoExpeditorHandler = (value) => {
        setOrgaoExpeditor(value)
    }

    const setDataNascimentoHandler = (value) => {
        setDataNascimento(value)
    }

    const setNacionalidadeHandler = (value) => {
        setNacionalidade(value)
    }

    const setMunicipioHandler = (value) => {
        setMunicipio(value)
    }

    const setProfissaoHandler = (value) => {
        setProfissao(value)
    }

    const setEstadoCivilHandler = (value) => {
        setEstadoCivil(value)
    }

    const setEmail1Handler = (value) => {
        setEmail1(value)
    }

    const setEmail2Handler = (value) => {
        setEmail2(value)
    }

    const setDdd1Handler = (value) => {
        setDdd1(value)
    }

    const setTel1Handler = (value) => {
        setTel1(value)
    }

    const setDdd2Handler = (value) => {
        setDdd2(value)
    }

    const setTel2Handler = (value) => {
        setTel2(value)
    }

    const setPisHandler = (value) => {
        setPis(value)
    }

    const setTituloEleitorHandler = (value) => {
        setTituloEleitor(value)
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
        <>
            <PvsCard title='Pessoas'>
                <Form onSubmit={Create}>
                    <Row className='g-2' lg={4} md={2} xs={1}>
                        <Col>
                            <PvsInput type="text" placeHolder="Cpf" onChange={setCpfHandler} value={cpf} required={true} label="Cpf" maxLength={11} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Nome Completo" onChange={setNomeCompletoHandler} value={nomeCompleto} required={true} label="Nome Completo" maxLength={60} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Primeiro Nome" onChange={setPrimeiroNomeHandler} value={primeiroNome} required={true} label="Primeiro Nome" maxLength={20} size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listSexo} defaultValue={sexo} onChangeHandler={setSexoHandler} ref={selectInputRef} Label='Sexo'></PvsSelect>
                        </Col>
                    </Row>
                    <Row className="g-2" lg={5} md={4} xs={1} >
                        <Col>
                            <PvsInput type="text" placeHolder="RG" onChange={setRgHandler} value={rg} required={true} label="RG" maxLength={9} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="date" placeHolder="Data Expedição" onChange={setDataExpedicaoHandler} value={dataExpedicao} label='Data Expedição' size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Orgão Expeditor" onChange={setOrgaoExpeditorHandler} value={orgaoExpeditor} required={true} label="Orgão Expeditor" maxLength={10} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="date" placeHolder="Data Nascimento" onChange={setDataNascimentoHandler} value={dataNascimento} required={true} label="Data Nascimento" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listNacionalidade} defaultValue={nacionalidade} onChangeHandler={setNacionalidadeHandler} ref={selectInputRef} Label='Nacionalidade'></PvsSelect>
                        </Col>
                    </Row>
                    <Row className="g-2" md={5} xs={12}>
                        <Col>
                            <PvsInput type="text" placeHolder="Município" onChange={setMunicipioHandler} value={municipio} required={true} label="Município" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={ufs} defaultValue={uf} onChangeHandler={setUfHandler} ref={selectedEstadoRef} label="Estado"></PvsSelect>
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Profissao" onChange={setProfissaoHandler} value={profissao} required={true} label="Profissão" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listEstadoCivil} defaultValue={estadoCivil} onChangeHandler={setEstadoCivilHandler} ref={selectInputRef} Label='Estado Civil'></PvsSelect>
                        </Col>
                    </Row>
                    <Row className="g-2" xs={12}>
                        <Col md={3}>
                            <PvsInput type="email" placeHolder="E-mail" onChange={setEmail1Handler} value={email1} required={true} label="Email" size='sm' maxLength={60} />
                        </Col>
                        <Col md={3}>
                            <PvsInput type="email" placeHolder="E-mail" onChange={setEmail2Handler} value={email2} required={true} label="Email" size='sm' maxLength={60} />
                        </Col>
                        <Col md={1}>
                            <PvsInput type="DDD" placeHolder="DDD" onChange={setDdd1Handler} value={ddd1} required={true} label="DDD" size='sm' maxLength={2} />
                        </Col>
                        <Col md={2}>
                            <PvsInput type="text" placeHolder="Telefone" onChange={setTel1Handler} value={tel1} required={true} label="Telefone" size='sm' maxLength={10} />
                        </Col>
                        <Col md={1}>
                            <PvsInput type="text" placeHolder="DDD" onChange={setDdd2Handler} value={ddd2} required={true} label="DDD" size='sm' maxLength={2} />
                        </Col>
                        <Col md={2}>
                            <PvsInput type="text" placeHolder="Telefone" onChange={setTel2Handler} value={tel2} required={true} label="Telefone" size='sm' maxLength={10} />
                        </Col>
                    </Row>
                    <Row className="g-2" md={4} xs={12}>
                        <Col>
                            <PvsInput type="number" placeHolder="PIS" onChange={setPisHandler} value={pis} required={true} label="PIS" size='sm' maxLength={11} />
                        </Col>
                        <Col>
                            <PvsInput type="number" placeHolder="Título Eleitor" onChange={setTituloEleitorHandler} value={tituloEleitor} required={true} label="Título Eleitor" size='sm' maxLength={13} />
                        </Col>
                    </Row>
                    <Row style={{ 'textAlign': 'left' }}>
                        <h5>Endereço</h5>
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
                    <Row className="g-2" md={1} xs={12}>
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

export default Pessoa