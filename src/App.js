import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./pages/public/PageNotFound/NotFoundPage";
import VillageProjectPage from "./pages/public/Landing/VillageProjectPage";
import ContractPage from "./pages/public/Landing/ContractPage";
import RegisterPage from "./pages/public/Landing/RegisterPage";
import DownloadApplication from "./pages/public/Landing/DownloadApplication";
import About from "./pages/public/Landing/About";
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
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/maplocation" component={VillageProjectPage} />
              <Route path="/contract" component={ContractPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/downloadapplication" component={DownloadApplication}/>
              <Redirect exact from="/" to="/home" />
              <Route component={PageNotFound} />
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
