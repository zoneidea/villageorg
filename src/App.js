import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import './App.css';

// import { LanguageContext } from "./utils/context/LangaugeContext";

import Home from './pages/Home'

const hist = createBrowserHistory();

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/Village">
          <Router history={hist}>
            <Switch>
              <Route exact path="/Home" component={Home} />
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
