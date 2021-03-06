import React, { useContext, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { hostname } from "../../../api/host/hostname";
import NavBar from '../../../components/navbarvillage';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { GetProduct } from '../../../api/fetch/getProduct';
import { GetVillageInformation } from '../../../api/fetch/getVillageInformation';
import { GetLandmark } from '../../../api/fetch/getLandmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ItemsCarousel from 'react-items-carousel';
import "../../../css/style.css"
class Landmark extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItemIndex: 0
        };
    }
    componentDidMount() {
        // GetVillageInformation(id).then(data => this.setState({ informationData: data }));
        // GetProduct(id).then(data => this.setState({ productData: data }));
        // GetLandmark(id).then(data => this.setState({ landmarkData: data }));
    }
    setActiveItemIndex = (activeItemIndex) => this.setState({ activeItemIndex });
    filterLandmark = (type) => {
        console.log("Type Landmark = ", type);
    }
    render() {
        const { activeItemIndex } = this.state;
        const chevronWidth = 40;
        const informationData = this.props.informationData;
        const landmarkData = this.props.landmarkData;
        const landmarkType = this.props.landmarkType;
        const productData = this.props.productData;
        const foodData = this.props.foodData;
        const activityData = this.props.activityData;
        const alltopvillageData = this.props.alltopvillageData;
        const accomodationData = this.props.accomodationData;
        const lang = localStorage.getItem("Lng");
        console.log("information = ", informationData);
        console.log("landmark = ", landmarkData);
        console.log("landmarkType = ", landmarkType);
        console.log("product = ", productData);
        console.log("food = ", foodData);
        console.log("Activity = ", activityData);
        console.log("pic activity = ", activityData)
        console.log("alltopvillage = ", alltopvillageData);
        console.log("accomodation = ", accomodationData);
        return (
            <>
                <Row>
                    <div className="housepoint">
                        <div className="clip">
                            <div style={{ width: "100%", height: "100%", backgroundImage: `url(${hostname}/public/static/images/village/${informationData.villagepic_1})` }}>
                            </div>
                        </div>
                        <div className="vertical-align">
                            <div className="container">
                                <Row>
                                    <Col md="12" xs="12">
                                        <div className="main-title-landmark PromptFont">
                                            <p>{lang == "th" ? `สถานที่เด่นใน ชุมชน ${informationData.villagename}` : informationData.villagename_en}</p>
                                            <h1>{lang == "th" ? "จุดเที่ยวห้ามพลาด" : "Landmark"}</h1>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                <div className="container">
                    <Row>
                        <Col xs="12">

                            <div className="filter style-2">
                                <ul className="filter-nav PromptFont">
                                    <li className="selected"><a href="#all" data-filter="*">all</a></li>
                                    {landmarkType.map((item, index) => (
                                        <li onClick={() => this.filterLandmark(item.type_landmark)}><a data-filter={item.id_type_landmark}>{item.type_landmark}</a></li>
                                    ))}

                                    {/* <li><a href="#tours" data-filter=".tours">วัฒนธรรม</a></li>
                                    <li><a href="#cruises" data-filter=".cruises">ศิลปะ</a></li>
                                    <li><a href="#flights" data-filter=".flights">ศาสนา</a></li>
                                    <li><a href="#hotels" data-filter=".hotels">พัฒนาทีม</a></li> */}
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <div className="filter-content row">
                            {landmarkData.map((item, index) => (
                                <Col sm="4" md="4" className="item hotels gal-item">
                                    <div className="fig-landmark">
                                        <a className="black-hover" href={`/DetailLandmark?id=${item.id_village}&index=${index}`}>
                                            <div className="gal-item-icon">
                                                <img className="img-landmark" src={`${hostname}/public/static/images/landmark/${item.landmark_pic_1}`} alt="" />
                                                <div className="tour-layer delay-1"></div>
                                                <div className="vertical-align">
                                                    <span className="c-button small bg-white delay-2"><span>view more</span></span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="gal-item-desc delay-1 PromptFont">
                                            <h4 style={{ marginTop: "10px", fontSize: "16px" }}><b>{lang == "th" ? item.name_landmark : item.name_landmark_en}</b></h4>
                                            <h5 style={{ fontSize: "14px" }}></h5><br />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            {/* <Col sm="4" md="4" className="item hotels gal-item">
                                <div className="fig-landmark">
                                    <a className="black-hover" href="#">
                                        <div className="gal-item-icon">
                                            <img className="img-full img-responsive" style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[0].landmark_pic_1}`} alt="" />
                                            <div className="tour-layer delay-1"></div>
                                            <div className="vertical-align">
                                                <span className="c-button small bg-white delay-2"><span>view more</span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="gal-item-desc delay-1">
                                        <h4><b>River Bars</b></h4>
                                        <h5>sea tours</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" md="4" className="item hotels gal-item">
                                <div className="fig-landmark">
                                    <a className="black-hover" href="#">
                                        <div className="gal-item-icon">
                                            <img className="img-full img-responsive" style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[0].landmark_pic_1}`} alt="" />
                                            <div className="tour-layer delay-1"></div>
                                            <div className="vertical-align">
                                                <span className="c-button small bg-white delay-2"><span>view more</span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="gal-item-desc delay-1">
                                        <h4><b>River Bars</b></h4>
                                        <h5>sea tours</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" md="4" className="item hotels gal-item">
                                <div className="fig-landmark">
                                    <a className="black-hover" href="#">
                                        <div className="gal-item-icon">
                                            <img className="img-full img-responsive" style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[0].landmark_pic_1}`} alt="" />
                                            <div className="tour-layer delay-1"></div>
                                            <div className="vertical-align">
                                                <span className="c-button small bg-white delay-2"><span>view more</span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="gal-item-desc delay-1">
                                        <h4><b>River Bars</b></h4>
                                        <h5>sea tours</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" md="4" className="item hotels gal-item">
                                <div className="fig-landmark">
                                    <a className="black-hover" href="#">
                                        <div className="gal-item-icon">
                                            <img className="img-full img-responsive" style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[0].landmark_pic_1}`} alt="" />
                                            <div className="tour-layer delay-1"></div>
                                            <div className="vertical-align">
                                                <span className="c-button small bg-white delay-2"><span>view more</span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="gal-item-desc delay-1">
                                        <h4><b>River Bars</b></h4>
                                        <h5>sea tours</h5>
                                    </div>
                                </div>
                            </Col> */}
                        </div>
                        {/* <Col md="4">
                            <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[0].landmark_pic_1}`} alt="" />
                        </Col>
                        <Col md="4">
                            <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[1].landmark_pic_1}`} alt="" />
                        </Col>
                        <Col md="4">
                            <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/landmark/${landmarkData[2].landmark_pic_1}`} alt="" />
                        </Col> */}
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Landmark);