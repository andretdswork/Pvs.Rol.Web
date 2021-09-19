import { Row, Col, Button } from 'react-bootstrap'

const SelecionaEmpresa = (props) => {
    const [showConsultaEmpresa, setShowConsultaEmpresa] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState('')

    const modalConsultaHandler = _ => {
        setShowConsultaEmpresa(!showConsultaEmpresa)
    }

    return <>
        {
            showConsultaEmpresa && <ConsultaEmpresa key={1} show={showConsultaEmpresa} onClose={modalConsultaHandler} onSelectedCompany={selectCompanyHandler}></ConsultaEmpresa>
        }
        
        <Row className="g-3">
            <Col style={{ 'textAlign': 'left' }}>
                <Button onClick={modalConsultaHandler} size='sm' variant='light'>Escolher Empresa</Button>
            </Col>
            <div >
                {
                    selectedCompany && <span style={{ 'float': 'left' }}>
                        Empresa selecionada: <strong>{selectedCompany.razaoSocial} {selectedCompany.cnpj} </strong>
                    </span>
                }
            </div>
        </Row>
    </>
}

export default SelecionaEmpresa