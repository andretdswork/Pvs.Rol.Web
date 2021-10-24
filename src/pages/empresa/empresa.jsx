import { useState, useRef, useEffect } from 'react'
import PvsCard from "../../UI/card/pvs-card"
import PvsInput from '../../UI/input/pvsInput'
import PvsSelect from '../../UI/select/pvs-select'
import { Form, Row, Col } from 'react-bootstrap'
import ServiceUtils from '../../service/serviceutils'

const Empresa = () => {
    const initialState = {
        apelido: '',
        cnpj: '',
        dataCnpj: '',
        razaoSocial: '',
        responsavel: '',
        nomeFantasia: '',
        inscricaoEstadual: '',
        tipoEmpresa: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        ufEndereco: 'SP',
        telefoneFixo: '',
        celular: '',
        emailPrincipal: '',
        emailAdicional: '',
        senhaEcac: '',
        dtValEcac: '',
        codAcessoEcac: '',
        ramoAtividade: '',
        canaePrincipal: '',
        capitalSocial: ''
    }
    const [empresa, setEmpresa] = useState(initialState)

    const setEmpresaHandler = (name, value) => {
        setEmpresa((prev) => { return { ...prev, [name]: value } })
    }

    const selectedEstadoEnderecoRef = useRef()
    const selectedTipoEmpresaRef = useRef()
    const [ufsEndereco, setUfsEndereco] = useState([])
    const [tiposEmpresa, setTiposEmpresa] = useState([])

    useEffect(() => {
        const service = new ServiceUtils()
        const estados = service.getEstados()
        const tiposEmpresa = service.getTiposEmpresa()
        setUfsEndereco(estados)
        setTiposEmpresa(tiposEmpresa)
    }, [])

    const Create = (event) => {
        event.preventDefault()
    }

    const searchAddressHandler = async (value) => {
        let endereco = await new ServiceUtils().buscarEnderecoPorCep(value)
        if (endereco) {
            setEmpresa((prev) => { return { ...prev, rua: endereco.data.logradouro, bairro: endereco.data.bairro, cidadeEndereco: endereco.data.localidade, ufEndereco: endereco.data.uf } })
        }
    }

    return (
        <PvsCard title='Empresa'>
            <Form onSubmit={Create}>
                <Row className='g-2' >
                    <Col lg={1}>
                        <PvsInput type="text" placeHolder="Apelido" name='apelido' onChange={setEmpresaHandler} value={empresa.apelido} required={true} label="Apelido" maxLength={20} size='sm' />
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="text" placeHolder="CNPJ" name='cnpj' onChange={setEmpresaHandler} value={empresa.cnpj} required={true} label="CNPJ" maxLength={15} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="date" placeHolder="Data CNPJ" name='dataCnpj' onChange={setEmpresaHandler} value={empresa.dataCnpj} required={true} label="Data CNPJ" maxLength={15} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Razão Social" name='razaoSocial' onChange={setEmpresaHandler} value={empresa.razaoSocial} required={true} label="Razão Social" maxLength={60} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Nome Fantasia" name='nomeFantasia' onChange={setEmpresaHandler} value={empresa.nomeFantasia} required={true} label="Nome Fantasia" maxLength={60} size='sm' />
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="text" placeHolder="Responsável" name='responsavel' onChange={setEmpresaHandler} value={empresa.responsavel} required={true} label="Responsável" maxLength={60} size='sm' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PvsSelect options={tiposEmpresa} defaultValue={empresa.tipoEmpresa} onChange={setEmpresaHandler} ref={selectedTipoEmpresaRef} label="Tipo Empresa"></PvsSelect>
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="number" placeHolder="Incrição Estadual" name='inscricaoEstadual' onChange={setEmpresaHandler} value={empresa.inscricaoEstadual} required={true} label="Inscrição Estadual" maxLength={12} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Ramo Atividade" name='ramoAtividade' onChange={setEmpresaHandler} value={empresa.ramoAtividade} required={true} label="Ramo Atividade" maxLength={60} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="number" placeHolder="Capital Social" name='capitalSocial' onChange={setEmpresaHandler} value={empresa.capitalSocial} required={true} label="Capital Social" size='sm' />
                    </Col>
                </Row>
                <Row style={{ 'textAlign': 'left' }}>
                    <h5>Endereço</h5>
                </Row>
                <Row xs={1} md={3} className="g-2">
                    <Col md={2} >
                        <PvsInput type="number" placeHolder="CEP" name='cep' onChange={setEmpresaHandler} value={empresa.cep} required={true} label="CEP" maxLength={8} onBlur={searchAddressHandler} size='sm' />
                    </Col>
                    <Col >
                        <PvsInput type="text" placeHolder="Rua" name='rua' onChange={setEmpresaHandler} value={empresa.rua} required={true} label="Rua" maxLength={100} size='sm' />
                    </Col >
                    <Col md={2} >
                        <PvsInput type="number" placeHolder="Número" name='numero' onChange={setEmpresaHandler} value={empresa.numero} required={true} label="Número" maxLength={5} size='sm' />
                    </Col >
                    <Col >
                        <PvsInput type="text" placeHolder="Complemento" name='complemento' onChange={setEmpresaHandler} value={empresa.complemento} required={true} label="Complemento" size='sm' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PvsInput type="text" placeHolder="Bairro" name='bairro' onChange={setEmpresaHandler} value={empresa.bairro} required={true} label="Bairro" size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Cidade" name='cidade' onChange={setEmpresaHandler} value={empresa.cidade} required={true} label="Cidade" size='sm' />
                    </Col>
                    <Col>
                        <PvsSelect options={ufsEndereco} defaultValue={empresa.ufEndereco} onChange={setEmpresaHandler} ref={selectedEstadoEnderecoRef} label="Estado"></PvsSelect>
                    </Col>
                </Row>
                <Row style={{ 'textAlign': 'left' }}>
                    <h5>Dados de Contato</h5>
                </Row>
                <Row>
                    <Col>
                        <PvsInput type="text" placeHolder="Tel. Fixo" name='telefoneFixo' onChange={setEmpresaHandler} value={empresa.telefoneFixo} required={true} label="Tel. Fixo" size='sm' maxLength={8} />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Celular" name='celular' onChange={setEmpresaHandler} value={empresa.celular} required={true} label="Celular" size='sm' maxLength={11} />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Email Principal" name='emailPrincipal' onChange={setEmpresaHandler} value={empresa.emailPrincipal} required={true} label="Email Principal" size='sm' maxLength={60} />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Email Adicional" name='emailAdicional' onChange={setEmpresaHandler} value={empresa.emailAdicional} required={true} label="Email Adicional" size='sm' maxLength={60} />
                    </Col>
                </Row>
                <Row style={{ 'textAlign': 'left' }}>
                    <h5>ECAC</h5>
                </Row>
                <Row>
                    <Col>
                        <PvsInput type="text" placeHolder="Senha ECAC" name='senhaEcac' onChange={setEmpresaHandler} value={empresa.senhaEcac} required={true} label="Senha ECAC" size='sm' maxLength={15} />
                    </Col>
                    <Col>
                        <PvsInput type="date" placeHolder="Dt. Val ECAC" name='dtValEcac' onChange={setEmpresaHandler} value={empresa.dtValEcac} required={true} label="Dt. Val. ECAC" size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Codigo Acesso ECAC" name='codAcessoEcac' onChange={setEmpresaHandler} value={empresa.codAcessoEcac} required={true} label="Codigo Acesso ECAC" size='sm' maxLength={60} />
                    </Col>
                </Row>
            </Form>
        </PvsCard>
    )
}

export default Empresa