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
        razaoSocial: '',
        responsavel: '',
        nomeFantasia: '',
        inscricaoEstadual: '',
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
        senhaECAC: '',
        dataValidacaoECAC: '',
        ramoAtividade: '',
        canaePrincipal: '',
        capitalSocial: ''
    }
    const [empresa, setEmpresa] = useState(initialState)

    const setEmpresaHandler = (name, value) => {
        setEmpresa((prev) => { return { ...prev, [name]: value } })
    }

    const selectedEstadoEnderecoRef = useRef()
    const [ufsEndereco, setUfsEndereco] = useState([])

    useEffect(() => {
        const service = new ServiceUtils()
        const estados = service.getEstados()
        setUfsEndereco(estados)
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
                        <PvsInput type="text" placeHolder="Razão Social" name='razaoSocial' onChange={setEmpresaHandler} value={empresa.razaoSocial} required={true} label="Razão Social" maxLength={60} size='sm' />
                    </Col>
                    <Col>
                        <PvsInput type="text" placeHolder="Nome Fantasia" name='nomeFantasia' onChange={setEmpresaHandler} value={empresa.nomeFantasia} required={true} label="Nome Fantasia" maxLength={60} size='sm' />
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="text" placeHolder="Responsável" name='responsavel' onChange={setEmpresaHandler} value={empresa.responsavel} required={true} label="Responsável" maxLength={60} size='sm' />
                    </Col>
                    <Col lg={2}>
                        <PvsInput type="number" placeHolder="Incrição Estadual" name='inscricaoEstadual' onChange={setEmpresaHandler} value={empresa.inscricaoEstadual} required={true} label="Inscrição Estadual" maxLength={12} size='sm' />
                    </Col>
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
                <Row>
                    
                </Row>
            </Form>
        </PvsCard>
    )
}

export default Empresa