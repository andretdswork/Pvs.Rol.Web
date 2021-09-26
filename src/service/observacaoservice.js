import ServiceBase from "./servicebase";

class ObservacaoService extends ServiceBase{

    constructor() {
        super('Observacao')
    }

    async Create(params) {
        console.log('create observacao')
    }
}

export default ObservacaoService