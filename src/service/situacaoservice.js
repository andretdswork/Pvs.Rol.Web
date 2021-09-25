import ServiceBase from "./servicebase";

class SituacaoService extends ServiceBase {   

    constructor(){
        super('Situacao')        
    }

    async Create(params) {        
        const response = await super.Post(`Create?idEmpresa=${params.idempresa}&status=${params.status}&datasituacao=${params.dataSituacao}`).then((response) => {
            return response
        })        
        return response
    }

    async getListStatus() {
        const response = await super.Get(`AllDescriptionsituation`).then((response) => {
            return response
        })        
        return response
    } 
}

export default SituacaoService