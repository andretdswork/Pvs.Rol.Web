import Menu from '../../components/menu/menu'
import {
    Switch,
    Route    
} from "react-router-dom";

import Situacao from '../situacao/situacao.jsx'
import Prolabore from '../prolabore/prolabore.jsx';
import Tributacao from '../tributacao/tributacao';
import Empresa from '../empresa/empresa';

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
            </Switch>

        </>
    )
}

export default Home