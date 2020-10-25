import React, { useContext, useEffect, useState } from "react"
import { connect } from 'react-redux'
import NavBar from '../../../components/navbarvillage';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { GetProduct } from '../../../api/fetch/getProduct';
import { GetVillageInformation } from '../../../api/fetch/getVillageInformation';
import { GetLandmark } from '../../../api/fetch/getLandmark';
import { GetFood } from '../../../api/fetch/getFood';
import { GetActivity } from "../../../api/fetch/getActicity";
import { GetAllTopVillage } from "../../../api/fetch/getAllTopVillage";
import { GetAccomodation } from "../../../api/fetch/getAccomodation";
import Overviews from "./Overviews"
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
class Village extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            informationData: null,
            landmarkData: null,
            productData: null,
            foodData: null,
            activityData: null,
            alltopvillageData: null,
            accomodationData: null
        };
    }

    componentDidMount() {
        GetVillageInformation(id).then(data => this.setState({ informationData: data }));
        GetProduct(id).then(data => this.setState({ productData: data }));
        GetLandmark(id).then(data => this.setState({ landmarkData: data }));
        GetFood(id).then(data => this.setState({ foodData: data }));
        GetActivity(id).then(data => this.setState({ activityData: data }));
        GetAllTopVillage(id).then(data => this.setState({ alltopvillageData: data }));
        GetAccomodation(id).then(data => this.setState({ accomodationData: data }));
    }
    render() {

        const informationData = this.state.informationData ? this.state.informationData.data[0] : null;
        const landmarkData = this.state.landmarkData ? this.state.landmarkData : null;
        const productData = this.state.productData ? this.state.productData : null;
        const foodData = this.state.foodData ? this.state.foodData : null;
        const activityData = this.state.activityData ? this.state.activityData : null;
        const alltopvillageData = this.state.alltopvillageData ? this.state.alltopvillageData : null;
        const accomodationData = this.state.accomodationData ? this.state.accomodationData : null;
        // console.log("information = ", informationData);
        // console.log("landmark = ", landmarkData);
        // console.log("product = ", productData);
        return (
            <>
                {/* ABOUT PAGE */}

                {informationData && landmarkData && productData && foodData && activityData && accomodationData &&(
                    <>
                        <NavBar data={informationData} />
                        <Overviews informationData={informationData} landmarkData={landmarkData} alltopvillageData={alltopvillageData} accomodationData={accomodationData} activityData={activityData} productData={productData} foodData={foodData} />
                    </>
                )}
                {!informationData && (
                    <Container>
                        <h3 className="text-center mt-0">not found....</h3>
                    </Container>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Village);