import ServiceBase from "./servicebase";

class SituacaoService extends ServiceBase {   

    constructor(){
        super('Situacao')        
    }

    async Create(params) {        
        let response = await super.Post(`Create?idEmpresa=${params.idempresa}&status=${params.status}&datasituacao=${params.dataSituacao}`)
        return response
    }

    async getListStatus() {
        let response = await super.Get(`AllDescriptionsituation`)
        return response
    } 
}

export default SituacaoService