import ServiceBase from "./servicebase";

class TributacaoService extends ServiceBase{    

    constructor(){
        super('Tributacao')
    }    

    async Create(params) {
        const response = await super.Post(`Create/${params.companyId}/${params.codTributacao}/${params.dataTributacao}`)
        return response
    }

    async getListStatus() {
        const response = await super.Get(`AllDescriptionsituation`)
        return response
    } 
}

export default TributacaoService