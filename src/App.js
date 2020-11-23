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
import VillageRoute from "./pages/public/Village/index";
import LandmarkRoute from "./pages/public/Landmark/index";
import ActivityRoute from "./pages/public/Activity/index";
import ShopRoute from "./pages/public/Shop/index";
import FoodRoute from "./pages/public/Food/index";
import AccomodationRoute from "./pages/public/Accomodation/index";
import ProductRoute from "./pages/public/Product/index";
import DetailLandmarkRoute from "./pages/public/DetailLandmark/index";
import './App.css';

// import { LanguageContext } from "./utils/context/LangaugeContext";

import Home from './pages/Home'
import Product from './pages/public/Product/Product';

//const hist = createBrowserHistory();
// console.log("Hist = ",hist);
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/Village">
          {/* <Router history={hist}> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/maplocation" component={VillageProjectPage} />
            <Route path="/contract" component={ContractPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/downloadapplication" component={DownloadApplication} />
            {/* Village */}
            <Route path="/Villages" component={VillageRoute} />
            <Route path="/Landmark" component={LandmarkRoute} />
            <Route path="/Activity" component={ActivityRoute} />
            <Route path="/Food" component={FoodRoute} />
            <Route path="/Accomodation" component={AccomodationRoute} />
            <Route path="/Product" component={ProductRoute} />
            <Route path="/Shop" component={ShopRoute} />
            <Route path="/DetailLandmark" component={DetailLandmarkRoute} />
            {/* Village */}
            <Redirect exact from="/" to="/home" />
            <Route component={PageNotFound} />
          </Switch>
          {/* </Router> */}
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
