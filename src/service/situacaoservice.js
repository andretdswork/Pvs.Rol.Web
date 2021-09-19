import ServiceBase from "./servicebase";

class SituacaoService {
    #service = null
    #url = 'Situacao'
    #listStatus = [
        {
            value : 0,
            label: 'Ativa'
        },
        {
            value : 1,
            label: 'Inativa'
        },
        {
            value : 2,
            label: 'Encerrada'
        },
        {
            value : 3,
            label: 'Distrato'
        },
        {
            value : 4,
            label: 'Lista Negra'
        }
    ]

    constructor(){
        this.#service = new ServiceBase()
    }

    async Create(params) {        
        const response = await this.#service.Post(`${this.#url}/Create?idEmpresa=${params.idempresa}&status=${params.status}&datasituacao=${params.dataSituacao}`).then((response) => {
            return response
        })        
        return response
    }

    getListStatus() {
        return this.#listStatus
    } 
}

export default SituacaoService