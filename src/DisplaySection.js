import Shop from "./Shop.js"
import Suggest from "./Suggest.js"
import Cart from "./Cart"
import ProduceDisplayPage from "./ProduceDisplayPage"
import WrapUp from "./WrapUp.js"
import { Switch, Route } from 'react-router-dom'

function DisplaySection(){

    return (
        <div id="displaySection">
            Display Section
            <Switch>

                <Route exact path="/">
                    <Shop />
                </Route>

                <Route path="/suggest">
                    <Suggest />
                </Route>

                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/produce-display-page">
                    <ProduceDisplayPage />
                </Route>

                <Route path="/wrap-up">
                    <WrapUp />
                </Route>

            </Switch>
        </div>
    )
}

export default DisplaySection