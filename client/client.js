import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import { Router, Route, IndexRoute, hashHistory } from "react-router";
render(<App/>, document.getElementById('app'));

import About from "../About";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={About}>
      <Route path="archives" component={Settings}></Route>

    </Route>
  </Router>,
app);
