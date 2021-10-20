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

const Pessoa = () => {
    const initialState = {
        cpf : '',
        nomeCompleto : '',
        primeiroNome : '',
        sexo : '1',
        rg : '',
        DataExpedicaoRg : '',
        orgaoExpeditor : '',
        dataNascimento : '',
        nacionalidade : '1',
        municipio : '',
        profissao : '',
        estadoCivil : '1',
        email1 : '',
        email2 : '',
        ddd1 : '',
        telefone1 : '',
        ddd2 : '',
        telefone2 : '',
        pis : '',
        tituloEleitor : '',
        cep : '',
        rua : '',
        numero : '',
        complemento : '',
        bairro : '',
        cidadeEndereco : '',
        uf : 'SP',
        ufEndereco : 'SP'
    }

    const [pessoa,setPessoa] = useState(initialState)

    const setPessoaHandler =(name, value) => {        
        setPessoa((prev) => { return { ...prev, [name] : value}} )
    }

    const selectInputRef = useRef()
    const selectedEstadoRef = useRef()
    const selectedEstadoEnderecoRef = useRef()
    const [ufs, setUfs] = useState([])
    const [ufsEndereco,setUfsEndereco] = useState([])
    const [listEstadoCivil, setListEstadoCivil] = useState([])

    const Create = async (event) => {
        event.preventDefault()        
        
        const service = new PessoaService()        
        const response = await service.Create(pessoa)        
        if (response.error) {
            toast.error(response.message)
        }
        else {
            toast.success(response.message)
            ClearForm()
        }        
    } 

    const ClearForm = () => {
        setPessoa(initialState)
        selectInputRef.current.defaultValue('SP')
        selectedEstadoRef.current.defaultValue('SP')
        selectedEstadoEnderecoRef.current.defaultValue('SP')
    }

    useEffect(() => {
        const service = new ServiceUtils()
        const estados = service.getEstados()
        setUfs(estados)
        setUfsEndereco(estados)
        const listaEstadoCivil = service.getEstadoCivil()
        setListEstadoCivil(listaEstadoCivil)
    },[])

    const searchAddressHandler = async (value) => {
        let endereco = await new ServiceUtils().buscarEnderecoPorCep(value)
        if (endereco)
        {
            setPessoa((prev) => { return {...prev, rua : endereco.data.logradouro, bairro: endereco.data.bairro, cidadeEndereco : endereco.data.localidade, ufEndereco: endereco.data.uf} })
        }
    }

    return (
        <>
            <PvsCard title='Pessoas'>
                <Form onSubmit={Create}>
                    <Row className='g-2' lg={4} md={2} xs={1}>
                        <Col>
                            <PvsInput type="number" placeHolder="Cpf" name='cpf' onChange={setPessoaHandler} value={pessoa.cpf} required={true} label="Cpf" maxLength={11} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Nome Completo" name='nomeCompleto' onChange={setPessoaHandler} value={pessoa.nomeCompleto} required={true} label="Nome Completo" maxLength={60} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Primeiro Nome" name='primeiroNome' onChange={setPessoaHandler} value={pessoa.primeiroNome} required={true} label="Primeiro Nome" maxLength={20} size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listSexo} name='sexo' defaultValue={pessoa.sexo} onChange={setPessoaHandler} ref={selectInputRef} Label='Sexo'></PvsSelect>
                        </Col>
                    </Row>
                    <Row className="g-2" lg={5} md={4} xs={1} >
                        <Col>
                            <PvsInput type="text" placeHolder="RG" name='rg' onChange={setPessoaHandler} value={pessoa.rg} required={true} label="RG" maxLength={9} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="date" placeHolder="Data Expedição" name='DataExpedicaoRg' onChange={setPessoaHandler} value={pessoa.DataExpedicaoRg} label='Data Expedição' size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="text" placeHolder="Orgão Expeditor" name='orgaoExpeditor' onChange={setPessoaHandler} value={pessoa.orgaoExpeditor} required={true} label="Orgão Expeditor" maxLength={10} size='sm' />
                        </Col>
                        <Col>
                            <PvsInput type="date" placeHolder="Data Nascimento" name='dataNascimento' onChange={setPessoaHandler} value={pessoa.dataNascimento} required={true} label="Data Nascimento" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listNacionalidade} name='nacionalidade' defaultValue={pessoa.nacionalidade} onChange={setPessoaHandler} ref={selectInputRef} Label='Nacionalidade'></PvsSelect>
                        </Col>
                    </Row>
                    <Row className="g-2" md={5} xs={12}>
                        <Col>
                            <PvsInput type="text" placeHolder="Município" name='municipio' onChange={setPessoaHandler} value={pessoa.municipio} required={true} label="Município" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={ufs} name='uf' defaultValue={pessoa.uf} onChange={setPessoaHandler} ref={selectedEstadoRef} label="Estado"></PvsSelect>
                        </Col>
                        <Col>
                            <PvsInput type="text" name='profissao' placeHolder="Profissao" onChange={setPessoaHandler} value={pessoa.profissao} required={true} label="Profissão" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listEstadoCivil} defaultValue={pessoa.estadoCivil} onChange={setPessoaHandler} ref={selectInputRef} Label='Estado Civil'></PvsSelect>
                        </Col>
                    </Row>
                    <Row className="g-2" xs={12}>
                        <Col md={3}>
                            <PvsInput type="email" name='email1' placeHolder="E-mail" onChange={setPessoaHandler} value={pessoa.email1} required={true} label="Email" size='sm' maxLength={60} />
                        </Col>
                        <Col md={3}>
                            <PvsInput type="email" name='email2' placeHolder="E-mail" onChange={setPessoaHandler} value={pessoa.email2} required={true} label="Email" size='sm' maxLength={60} />
                        </Col>
                        <Col md={1}>
                            <PvsInput type="DDD" name='ddd1' placeHolder="DDD" onChange={setPessoaHandler} value={pessoa.ddd1} required={true} label="DDD" size='sm' maxLength={2} />
                        </Col>
                        <Col md={2}>
                            <PvsInput type="text" name='telefone1' placeHolder="Telefone" onChange={setPessoaHandler} value={pessoa.telefone1} required={true} label="Telefone" size='sm' maxLength={10} />
                        </Col>
                        <Col md={1}>
                            <PvsInput type="text" name='ddd2' placeHolder="DDD" onChange={setPessoaHandler} value={pessoa.ddd2} required={true} label="DDD" size='sm' maxLength={2} />
                        </Col>
                        <Col md={2}>
                            <PvsInput type="text" name='telefone2' placeHolder="Telefone" onChange={setPessoaHandler} value={pessoa.telefone2} required={true} label="Telefone" size='sm' maxLength={10} />
                        </Col>
                    </Row>
                    <Row className="g-2" md={4} xs={12}>
                        <Col>
                            <PvsInput type="number" name='pis' placeHolder="PIS" onChange={setPessoaHandler} value={pessoa.pis} required={true} label="PIS" size='sm' maxLength={11} />
                        </Col>
                        <Col>
                            <PvsInput type="number" name='tituloEleitor' placeHolder="Título Eleitor" onChange={setPessoaHandler} value={pessoa.tituloEleitor} required={true} label="Título Eleitor" size='sm' maxLength={13} />
                        </Col>
                    </Row>
                    <Row style={{ 'textAlign': 'left' }}>
                        <h5>Endereço</h5>
                    </Row>
                    <Row xs={1} md={3} className="g-2">
                        <Col md={2} >
                            <PvsInput type="text" name='cep' placeHolder="CEP" onChange={setPessoaHandler} value={pessoa.cep} required={true} label="CEP" maxLength={8} onBlur={searchAddressHandler} size='sm'/>
                        </Col>
                        <Col >
                            <PvsInput type="text" name='rua' placeHolder="Rua" onChange={setPessoaHandler} value={pessoa.rua} required={true} label="Rua" maxLength={100} size='sm'/>
                        </Col >
                        <Col md={2} >
                            <PvsInput type="number" name='numero' placeHolder="Número" onChange={setPessoaHandler} value={pessoa.numero} required={true} label="Número" maxLength={5} size='sm'/>
                        </Col >
                        <Col >
                            <PvsInput type="text" name='complemento' placeHolder="Complemento" onChange={setPessoaHandler} value={pessoa.complemento} required={true} label="Complemento" size='sm'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PvsInput type="text" name='bairro' placeHolder="Bairro" onChange={setPessoaHandler} value={pessoa.bairro} required={true} label="Bairro" size='sm'/>
                        </Col>
                        <Col>
                            <PvsInput type="text" name='cidadeEndereco' placeHolder="Cidade" onChange={setPessoaHandler} value={pessoa.cidadeEndereco} required={true} label="Cidade" size='sm'/>
                        </Col>
                        <Col>
                            <PvsSelect options={ufsEndereco} name='ufEndereco' defaultValue={pessoa.ufEndereco} onChange={setPessoaHandler} ref={selectedEstadoEnderecoRef} label="Estado" size='sm'></PvsSelect>
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