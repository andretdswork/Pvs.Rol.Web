import ServiceBase from "./servicebase";

class TributacaoService extends ServiceBase{    

    constructor(){
        super('Tributacao')
    }    

    async Create(params) {
        const response = await super.Post(`Create`,params)
        return response
    }
}

export default TributacaoService