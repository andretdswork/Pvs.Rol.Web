import ServiceBase from "./servicebase";

class ObservacaoService extends ServiceBase{

    constructor() {
        super('Observacao')
    }

    async Create(params) {
        return super.Post('Create',params)
    }
}

export default ObservacaoService