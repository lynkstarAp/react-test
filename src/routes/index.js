import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../views/Login";
import Four0Four from "../views/404";
import Search from "../views/search";

export default function Routes() {
    return (
        <Router>
            <switch>
                <Route path="/" exact>
                    <Login>

                    </Login>
                </Route>
                <Route path="/Search">
                    <Search></Search>
                </Route>
                <Route exact>
                    <Four0Four />
                </Route>

            </switch>
        </Router>
    );
}
