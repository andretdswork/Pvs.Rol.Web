import { Table } from "react-bootstrap"

const ConsultaEmpresaDetalhe = (props) => {
    const onSelectCompany = (event) => {
        console.log(event.target)
    }

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Apelido</th>
                        <th>CNPJ</th>
                        <th>Razão Social</th>
                        <th>Nome Fantasia</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaEmpresa.map((item) => {
                            return <tr onClick={onSelectCompany} key={item.cnpj}>
                                <td>{item.apelido}</td>
                                <td>{item.cnpj}</td>
                                <td>{item.razaoSocial}</td>
                                <td>{item.nomeFantasia}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ConsultaEmpresaDetalhe