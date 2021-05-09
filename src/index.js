import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ListTask from "./pages/ListTask";
import CreateTask from "./pages/CreateTask";
import BulkDelete from "./pages/BulkDelete";
var hist = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Redirect to="/list-task" />;
                    }}
                />
                <Route exact path="/list-task">
                    <ListTask />
                </Route>
                <Route path="/create-task">
                    <CreateTask />
                </Route>
                <Route path="/bulk-delete">
                    <BulkDelete />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
