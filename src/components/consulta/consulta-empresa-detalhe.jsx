import { memo } from 'react'

import DataTable from 'react-data-table-component'

const columns = [
    {
        name: '',
        selector: row => row.idempresa,
        omit : true
    },
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
    },
    {
        name: 'Último Status',
        selector: row => row.ultimoStatus,
        sortable: true,
    }
]


const ConsultaEmpresaDetalhe = (props) => {
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
            data={props.listaEmpresa}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            onRowClicked={onRowClickedHandle}
            striped={true}
            highlightOnHover={true}
        />


    )
}

export default memo(ConsultaEmpresaDetalhe)