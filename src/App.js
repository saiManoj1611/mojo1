import "./styles.css";
import React from "react";
import Login from "./Login";
import Form from "./Form";
import Table from "./Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Table">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
