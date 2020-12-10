import React, { useContext, useEffect, useState } from "react"
import { connect } from 'react-redux'
import NavBar from '../../../components/navbarvillage';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { GetShopName } from '../../../api/fetch/getShopName';

import Shop from "./Shop"
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const type = params.get("type");
class FoodIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shopNameData: null
        };
    }

    componentDidMount() {
        GetShopName(id,type).then(data => this.setState({ shopNameData: data }));
    }
    render() {
        const shopNameData = this.state.shopNameData ? this.state.shopNameData : null;
        console.log("shopNameData = ", shopNameData);
        // console.log("information = ", informationData);
        // console.log("landmark = ", landmarkData);
        // console.log("product = ", productData);
        return (
            <>
                {/* ABOUT PAGE */}

                {shopNameData && (type == 'product') && (
                    <>
                        {/* <NavBar data={informationData} /> */}
                        <Shop shopNameData={shopNameData} />
                    </>
                )}
                {shopNameData && (type == 'food') && (
                    <>
                        {/* <NavBar data={informationData} /> */}
                        <p>restname</p>
                    </>
                )}
                {/* {!informationData && (
                    <Container>
                        <h3 className="text-center mt-0">not found....</h3>
                    </Container>
                )} */}
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FoodIndex);