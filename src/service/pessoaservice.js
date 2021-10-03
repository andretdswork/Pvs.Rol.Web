import ServiceBase from "./servicebase";

class PessoaService extends ServiceBase {
    constructor(){
        super('Pessoa')
    }

    async Create(params) {
        const response = await super.Post(`Create`, params)
        return response
    }
}

export default PessoaService