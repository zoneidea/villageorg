import React, { useContext, useEffect, useState } from "react"
import { connect } from 'react-redux'
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { GetProduct } from '../../../api/fetch/getProduct';
import { GetVillageInformation } from '../../../api/fetch/getVillageInformation';
import { GetLandmark } from '../../../api/fetch/getLandmark';
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
class Village extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            informationData: null,
            landmarkData: null,
            productData: null
        };
    }

    componentDidMount() {
        GetVillageInformation(id).then(data => this.setState({ informationData: data }));
        GetProduct(id).then(data => this.setState({ productData: data }));
        GetLandmark(id).then(data => this.setState({ landmarkData: data }));
    }
    render() {

        const informationData = this.state.informationData ? this.state.informationData.data[0] : null;
        const landmarkData = this.state.landmarkData ? this.state.landmarkData : null;
        const productData = this.state.productData ? this.state.productData : null;
        console.log("information = ", informationData);
        console.log("landmark = ", landmarkData);
        console.log("product = ", productData);
        return (
            <>
                {/* ABOUT PAGE */}
                {/* <NavBar />
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/2-420.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/เกี่ยวกับเชียงราย2.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/37-e1567742870223.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/2-420.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br> */}
                {informationData && landmarkData && productData && (
                    <Container>
                        <h3 className="text-center mt-0">ชุมชน....{id}</h3>
                    </Container>
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