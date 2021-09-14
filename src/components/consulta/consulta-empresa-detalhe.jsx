import { useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import DataTable from 'react-data-table-component'

const columns = [
    {
        name: 'Apelido',
        selector: row => row.apelido,
        sortable: true,
    },
    {
        name: 'CNPJ',
        selector: row => row.cnpj,
        sortable: true,
    },
    {
        name: 'Nome Fantasia',
        selector: row => row.nomeFantasia,
        sortable: true,
    },
    {
        name: 'Razão Social',
        selector: row => row.razaoSocial,
        sortable: true,
    }
]


const ConsultaEmpresaDetalhe = (props) => {
    const [data, setData] = useState(props.listaEmpresa)

    
    const paginationComponentOptions = {
        rowsPerPageText: 'Itens por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    
    const onRowClickedHandle = (empresa) => {
        props.onEmpresaSelecionada(empresa)
    }

    return (
        
        <DataTable 
            columns={columns}
            data={data}
            pagination
		    paginationComponentOptions={paginationComponentOptions}
            onRowClicked={onRowClickedHandle}
            striped={true}
            highlightOnHover={true}
            />        
    )
}

export default ConsultaEmpresaDetalhe