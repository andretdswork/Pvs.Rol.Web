import Menu from '../../components/menu/menu'
import {
    Switch,
    Route    
} from "react-router-dom";

import Situacao from '../situacao/situacao.jsx'
import Prolabore from '../prolabore/prolabore.jsx';
import Tributacao from '../tributacao/tributacao.jsx';
import Empresa from '../empresa/empresa';
import Observacao from '../observacao/observacao';

const Home = (props) => {
    return (
        <>
            <Menu></Menu>
            <Switch>
                <Route path="/Situacao">
                    <Situacao />
                </Route>
                <Route path="/Prolabore">
                    <Prolabore />
                </Route>
                <Route path="/Tributacao">
                    <Tributacao />
                </Route>
                <Route path="/Empresa">
                    <Empresa />
                </Route>
                <Route path="/Observacao">
                    <Observacao />
                </Route>
            </Switch>

        </>
    )
}

export default Home