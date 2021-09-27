import { useState, useRef } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import PvsCard from "../../UI/card/pvs-card"
import PvsInput from "../../UI/input/pvsInput"
import PvsSelect from '../../UI/select/pvs-select'
import styles from './pessoa.module.css'

const listSexo = [{
    key: 'M',
    label: 'Masculino'
}, {
    key: 'F',
    label: 'Feminino'
}]

const listNacionalidade = [{
    key: 'B',
    label: 'Brasileiro'
}, {
    key: 'E',
    label: 'Estrangeiro'
}]

const listEstadaCivil = [{
    key: 1,
    label: 'Solteiro'
}, {
    key: 2,
    label: 'Casado'
}, {
    key: 3,
    label: 'Divorciado'
}, {
    key: 4,
    label: 'Viúvo'
}, {
    key: 5,
    label: 'Desquitado'
}]

const Pessoa = (props) => {
    const selectInputRef = useRef()
    const [cpf, setCpf] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [primeiroNome, setPrimeiroNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [rg, setRg] = useState('')
    const [dataExpedicao, setDataExpedicao] = useState('')
    const [orgaoExpeditor, setOrgaoExpeditor] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [profissao, setProfissao] = useState('')
    const [estadoCivil, setEstadoCivil] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [ddd1, setDdd1] = useState('')
    const [tel1, setTel1] = useState('')
    const [ddd2, setDdd2] = useState('')
    const [tel2, setTel2] = useState('')
    const [pis, setPis] = useState('')
    const [tituloEleitor, setTituloEleitor] = useState('')

    const Create = (event) => {
        console.log('create pessoa')
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


    return (
        <>
            <PvsCard title='Cadastro de Pessoas'>
                <Form onSubmit={Create}>
                    <Row className="g-2" md={5} xs={12}>
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
                        <Col>
                            <PvsInput type="text" placeHolder="RG" onChange={setRgHandler} value={rg} required={true} label="RG" maxLength={9} size='sm' />
                        </Col>
                    </Row>
                    <br />
                    <Row className="g-2" md={5} xs={12} >
                        <Col>
                            <PvsInput type="date" placeHolder="Data Expedição" onChange={setDataExpedicaoHandler} value={dataExpedicao} size='sm' />
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
                        <Col>
                            <PvsInput type="text" placeHolder="Município" onChange={setMunicipioHandler} value={municipio} required={true} label="Município" size='sm' />
                        </Col>
                    </Row>
                    <br />
                    <Row className="g-2" md={5} xs={12}>
                        <Col>
                            <PvsInput type="text" placeHolder="Profissao" onChange={setProfissaoHandler} value={profissao} required={true} label="Profissão" size='sm' />
                        </Col>
                        <Col>
                            <PvsSelect options={listEstadaCivil} defaultValue={estadoCivil} onChangeHandler={setEstadoCivilHandler} ref={selectInputRef} Label='Estado Civil'></PvsSelect>
                        </Col>
                    </Row>
                    <br />
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
                    <br />
                    <Row className="g-2" md={4} xs={12}>
                        <Col>
                            <PvsInput type="number" placeHolder="PIS" onChange={setPisHandler} value={pis} required={true} label="PIS" size='sm' maxLength={11} />
                        </Col>
                        <Col>
                            <PvsInput type="number" placeHolder="Título Eleitor" onChange={setTituloEleitorHandler} value={tituloEleitor} required={true} label="Título Eleitor" size='sm' maxLength={13} />
                        </Col>
                    </Row>
                    <br />
                    <Row className="g-2" md={2} xs={12}>
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