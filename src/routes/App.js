import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../containers/Home";

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default App;
