import React from "react";
import { Switch, Route } from "react-router-dom";

import Tabs from "./component/Tabs";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Tabs} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
        </Switch>
    );
}

export default App;
