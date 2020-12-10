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
class Product extends React.Component {
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
    render() {
        const { activeItemIndex } = this.state;
        const chevronWidth = 40;
        const informationData = this.props.informationData;
        const landmarkData = this.props.landmarkData;
        const productData = this.props.productData;
        const foodData = this.props.foodData;
        const activityData = this.props.activityData;
        const alltopvillageData = this.props.alltopvillageData;
        const accomodationData = this.props.accomodationData;
        const lang = localStorage.getItem("Lng");
        console.log("information = ", informationData);
        console.log("landmark = ", landmarkData);
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
                            <div style={{ objectFit: 'cover', width: "100%", height: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url(${hostname}/public/static/images/product/${productData[0].productpic_1})`, backgroundPosition: 'center', backgroundPositionY: 'bottom' }}>
                            </div>
                        </div>
                        <div className="vertical-align">
                            <div className="container">
                                <Row>
                                    <Col md="12" xs="12">
                                        <div className="main-title-landmark PromptFont">
                                            {/* <p>สินค้าใน ชุมชน {informationData.villagename}</p>
                                            <h1>สินค้าที่น่าสนใจ</h1> */}
                                            <p>{lang == "th" ? `สินค้าใน ชุมชน ${informationData.villagename}` : informationData.villagename_en}</p>
                                            <h1>{lang == "th" ? "สินค้าที่น่าสนใจ" : "Product"}</h1>
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
                                    <li><a href="#tours" data-filter=".tours">วัฒนธรรม</a></li>
                                    <li><a href="#cruises" data-filter=".cruises">ศิลปะ</a></li>
                                    <li><a href="#flights" data-filter=".flights">ศาสนา</a></li>
                                    <li><a href="#hotels" data-filter=".hotels">พัฒนาทีม</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="list-wrapper bg-grey-2">
                    <div class="container">
                        {productData.map((item, index) => (
                            <Row>
                                <Col md="12">
                                    <div className="list-content clearfix">
                                        <div className="list-item-entry">
                                            <div className="hotel-item style-8 bg-white">
                                                <Row style={{ marginBottom: "25px" }}>
                                                    <Col md="4">
                                                        {/* <div class="radius-top cell-view">
                                                            <img className="picfood" src={`${hostname}/public/static/images/food/${item.foodpic_1}`} alt="" />
                                                            <div className="price price-s-3 red tt">hot price</div>
                                                        </div> */}
                                                        <div class="item-block">
                                                            <Image className="picPageFood" src={`${hostname}/public/static/images/product/${item.productpic_1}`} alt="" />
                                                            <div className="price price-s-3 red tt">{lang == "th" ? "ราคาน่าสนใจ" : "hot price"}</div>
                                                        </div>
                                                    </Col>
                                                    <Col md="4">
                                                        <div className="title clearfix cell-view PromptFont vertical-align-food">
                                                            <div className="hotel-person color-dark-2 list-hidden">from <span>$273</span></div>
                                                            <div className="rate-wrap">
                                                                <div className="rateNew">
                                                                    <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                                    <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                                    <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                                    <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                                    <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                                </div>
                                                            </div>
                                                            <h4><b>{lang == "th" ? item.name_product : item.name_product_en}</b></h4>
                                                            {/* <span class="f-14 color-dark-2 grid-hidden">2 Place de la Sans Défense,
											Puteaux</span> */}
                                                            {/* <p class="f-14">Nunc cursus libero purus ac congue arcu cursus ut sed vitae
											pulvinar massa idporta nequetiam.</p> */}
                                                            <p className="f-14">{lang == "th" ? item.description_shop_name : item.description_shop_name_en}</p>
                                                            <a href="#"
                                                                className="c-button bg-dr-blue hv-dr-blue-o b-40 fl list-hidden">select</a>
                                                            <a href="#" className="c-button color-dr-blue hv-o b-40 fr list-hidden"><img
                                                                src="img/loc_icon_small_drak.png" alt="" />view on map</a>
                                                        </div>
                                                    </Col>
                                                    <Col md="4">
                                                        <div className="title bg-dr-blue clearfix PromptFont" style={{ height: "100%" }}>
                                                            <div className="vertical-align-food">
                                                                <div className="hotel-person color-white" style={{ color: "white", marginBottom: "20px" }}>{lang == "th" ? `ราคา ${item.product_price} บาท` : `Price ${item.product_price} Bath`}</div>
                                                                <a className="c-button b-40 bg-white color-dark-2 hv-dark-2-o grid-hidden"
                                                                    href={`/Shop?id=${item.id_shop_name}&type=product`} target="_blank" >{lang == "th" ? "รายละเอียด" : "view more"}</a>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);