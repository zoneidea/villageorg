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
import Detail from "./Detail";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const type = params.get("type");
const index = params.get("index");
console.log("village = ", index);
console.log("id = ", id);
class DetailIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            informationData: null,
            landmarkData: null,
            activityData: null,
        };
    }

    componentDidMount() {
        GetVillageInformation(id).then(data => this.setState({ informationData: data }));
        GetLandmark(id).then(data => this.setState({ landmarkData: data }));
        GetActivity(id).then(data => this.setState({ activityData: data }));
    }
    render() {

        const informationData = this.state.informationData ? this.state.informationData.data[0] : null;
        const landmarkData = this.state.landmarkData ? this.state.landmarkData[index] : null;
        console.log("landmark = ", landmarkData);
        // console.log("product = ", productData);
        return (
            <>
                {/* ABOUT PAGE */}

                {landmarkData && (
                    <>
                        <NavBar data={informationData} />
                        <Detail informationData={informationData} landmarkData={landmarkData} />
                    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailIndex);