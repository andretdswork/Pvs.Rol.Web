import ServiceBase from "./servicebase";

class SituacaoService {
    #service = null
    #url = 'Situacao'    

    constructor(){
        this.#service = new ServiceBase()
    }

    async Create(params) {        
        const response = await this.#service.Post(`${this.#url}/Create?idEmpresa=${params.idempresa}&status=${params.status}&datasituacao=${params.dataSituacao}`).then((response) => {
            return response
        })        
        return response
    }

    async getListStatus() {
        const response = await this.#service.Get(`${this.#url}/AllDescriptionsituation`).then((response) => {
            return response
        })        
        return response
    } 
}

export default SituacaoService