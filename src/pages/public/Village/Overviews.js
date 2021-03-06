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
import YouTube from 'react-youtube';
class Overviews extends React.Component {
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
        const opts = {
            height: '480',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
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
                    <div className="full-height">
                        <div className="clip">
                            <div style={{ objectFit: 'cover', width: "100%", height: "100%", backgroundImage: `url(${hostname}/public/static/images/village/${informationData.villagepic_1})`, backgroundPosition: 'center', backgroundPositionY: 'bottom' }}>
                            </div>
                        </div>
                        <div className="vertical-align">
                            <div className="container">
                                <Row>
                                    <Col md="12" xs="12">
                                        <div className="main-title PromptFont">
                                            <h1>{lang == "th" ? "ยินดีต้อนรับสู่" : "Welcome To"}<br /> {lang == "th" ? `ชุมชน ${informationData.villagename}` : informationData.villagename_en}</h1>
                                            <p>{lang == "th" ? informationData.description_village : informationData.description_village_en}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>

                <Row>
                    <Col md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <div class="item-block">
                            <div className="tour-layer delay-1"></div>
                            <div className="vertical-align">
                                <div className="container PromptFont" style={{ marginLeft: "5px" }}>
                                    <div className="video-container">
                                        {/* <h3>รู้จักชุมชน</h3>
                                    <p>ให้ท่านได้รู้จักชุมชน <b>{informationData.villagename}</b> จากการเล่าเรื่องด้วยภาพ</p>
                                    <a href="story.html" class="c-button small border-white Astyle"><span>เยี่ยมชม</span></a> */}
                                        {/* <YouTube videoId={informationData.village_youtube_url} opts={opts} /> */}
                                        <iframe className="video" video width="560" height="315" src={`//www.youtube.com/embed/${informationData.village_youtube_url}?autoplay=1&mute=1`} allow='autoplay' frameborder="0" allowfullscreen />
                                    </div>
                                </div>
                            </div>
                            <Image src={`${hostname}/public/static/images/village/${informationData.villagepic_1}`} alt="" className="pic2Col" />
                        </div>
                    </Col>
                    <Col md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <div class="item-block">
                            <div className="tour-layer delay-1"></div>
                            <div className="vertical-align">
                                <div className="container PromptFont">
                                    <h3>{lang == "th" ? "กิจกรรมในชุมชน" : "Activity"}</h3>
                                    <p>ให้ท่านได้รู้จักกิจกรรมในชุมชน <b>{lang == "th" ? informationData.villagename : informationData.villagename}</b> จากการเล่าเรื่องด้วยภาพ</p>
                                    <a href={`/Activity?id=${informationData.id_village}`} class="c-button small border-white Astyle"><span>{lang == "th" ? "เยี่ยมชม" : "View"}</span></a>
                                </div>
                            </div>
                            <Image src={`${hostname}/public/static/images/activity/${JSON.parse(activityData[0].image_activity)[0]}`} alt="" className="pic2Col" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    {foodData.slice(0, 6).map((item, index) => (
                        <Col md="4" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                            <div class="item-block">
                                <div className="tour-layer delay-1"></div>
                                <div className="vertical-align">
                                    <div className="container PromptFont">
                                        <div class="rate">
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                        </div>
                                        <h3>{lang == "th" ? item.name_food : item.name_food_en}</h3>
                                        <p style={{ fontSize: "14px" }}>{lang == "th" ? `ราคา ${item.food_price} บาท` : `Price ${item.food_price} Bath`}</p>
                                    </div>
                                </div>
                                <Image className="picFood" src={`${hostname}/public/static/images/food/${item.foodpic_1}`} alt="" />
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <div className="housepoint">
                        {/* <div className="clip">
                            <div style={{ width: "100%", height: "100%", backgroundImage: `url(${hostname}/public/static/images/village/${informationData.villagepic_1})` }}>
                            </div>
                        </div> */}
                        <div className="vertical-align">
                            <div className="container">
                                <Row>
                                    <Col md="12" xs="12">
                                        <div className="main-title PromptFont">
                                            <h1>{lang == "th" ? "กิจกรรมกลุ่ม" : "Activity Group"}</h1>
                                            <p style={{ fontSize: "58px" }}>House Point</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/village/${informationData.villagepic_1}`} alt="" />
                    </div>
                </Row>
                <Row>
                    <Col md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <div class="item-block">
                            <div className="tour-layer delay-1"></div>
                            <div className="vertical-align">
                                <div className="container PromptFont">
                                    <h3>{lang == "th" ? "จุดเที่ยวห้ามพลาด" : "Landmark"}</h3>
                                    <p>ให้ท่านได้รู้จักชุมชน <b>{informationData.villagename}</b> จากการเล่าเรื่องด้วยภาพ</p>
                                    <a href={`/Landmark?id=${informationData.id_village}`} class="c-button small border-white Astyle"><span>{lang == "th" ? "เยี่ยมชม" : "View"}</span></a>
                                </div>
                            </div>
                            <Image src={`${hostname}/public/static/images/landmark/${landmarkData[0].landmark_pic_1}`} alt="" className="pic2Col" />
                        </div>
                    </Col>
                    <Col md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <div class="item-block">
                            <div className="tour-layer delay-1"></div>
                            <div className="vertical-align">
                                <div className="container PromptFont">
                                    <h3>ประชุมสัมนา</h3>
                                    <p>ให้ท่านได้รู้จักชุมชน <b>{informationData.villagename}</b> จากการเล่าเรื่องด้วยภาพ</p>
                                    <a href="story.html" class="c-button small border-white Astyle"><span>เยี่ยมชม</span></a>
                                </div>
                            </div>
                            <Image src={`${hostname}/public/static/images/landmark/${landmarkData[1].landmark_pic_2}`} alt="" className="pic2Col" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="hotel-wrpp active">
                        <div className="clip">
                            <div style={{ width: "100%", height: "100%", backgroundImage: `url(${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_1})`, backgroundPositionY: 'bottom', backgroundPosition: 'center' }} />
                            {/* <Image src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_1}`}/> */}
                        </div>
                        <div className="container">
                            <Row>
                                <Col lg="6" md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }} />
                                <Col lg="6" md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                    <div className="hotel-choose hotel-choose-1" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                        <div className="fl w_100">
                                            <div className="title PromptFont">
                                                <h4>ราคาเริ่ม<b> 300บ.</b>ถึง<b> 3,500บ.</b></h4>
                                                <h3>ห้องพัก {informationData.villagename}</h3>
                                                <div className="rate-wrap">
                                                    <div className="rate">
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                    </div>
                                                </div>
                                                <p className="color-dark-2 palce-txt" style={{ float: "left" }}>2 Place de la Défense, Puteaux, Paris,
										France</p>
                                                <p style={{ textAlign: "left" }}>Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
										idporta nequetiam.</p>
                                                <a href={`/Accomodation?id=${informationData.id_village}`} className="c-button small border-white Astyle2"><span>ดูเพิ่มเติม</span></a>
                                            </div>
                                        </div>
                                        <Row className="row-5">
                                            <div className="full-width arrows arrows-3">
                                                <ItemsCarousel
                                                    requestToChangeActive={this.setActiveItemIndex}
                                                    activeItemIndex={activeItemIndex}
                                                    numberOfCards={3}
                                                    gutter={20}
                                                    leftChevron={<button className="Chevron">{'<'}</button>}
                                                    rightChevron={<button className="Chevron">{'>'}</button>}
                                                    outsideChevron
                                                    chevronWidth={chevronWidth}
                                                    infiniteLoop={true}
                                                >
                                                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_1}`} alt="" />
                                                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_2}`} alt="" />
                                                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_3}`} alt="" />
                                                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_4}`} alt="" />
                                                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_5}`} alt="" />
                                                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`${hostname}/public/static/images/accomodation/${accomodationData[0].accomodationpic_6}`} alt="" />
                                                </ItemsCarousel>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Row>
                <Row>
                    {productData.slice(0, 6).map((item, index) => (
                        <Col md="4" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                            <div class="item-block">
                                <div className="tour-layer delay-1"></div>
                                <div className="vertical-align">
                                    <div className="container PromptFont">
                                        <div class="rate">
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                            <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                        </div>
                                        {/* <h3>{item.name_product}</h3>
                                        <p style={{ fontSize: "14px" }}>ราคา {item.product_price} บาท</p> */}
                                        <h3>{lang == "th" ? item.name_product : item.name_product_en}</h3>
                                        <p style={{ fontSize: "14px" }}>{lang == "th" ? `ราคา ${item.product_price} บาท` : `Price ${item.product_price} Bath`}</p>
                                    </div>
                                </div>
                                <Image className="picFood" src={`${hostname}/public/static/images/product/${item.productpic_1}`} alt="" />
                            </div>
                        </Col>
                    ))}
                    {/* <div className="hotel-wrpp active">
                        <div className="clip">
                            <div style={{ width: "100%", height: "100%", backgroundImage: `url(${hostname}/public/static/images/product/${productData[0].productpic_1})` }} />
                        </div>
                        <div className="container">
                            <Row>
                                <Col lg="6" md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }} />
                                <Col lg="6" md="6" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                    <div className="hotel-choose hotel-choose-1" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                        <div className="fl w_100">
                                            <div className="title PromptFont">
                                                <h4>ราคาเริ่ม<b> 30บ.</b></h4>
                                                <h3>สินค้าเด่นในย่าน{informationData.villagename}</h3>
                                                <div className="rate-wrap">
                                                    <div className="rate">
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                        <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                                    </div>
                                                </div>
                                                <p className="color-dark-2 palce-txt" style={{ float: "left" }}>2 Place de la Défense, Puteaux, Paris,
										France</p>
                                                <p style={{ textAlign: "left" }}>Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
										idporta nequetiam.</p>
                                                <a href="story.html" className="c-button small border-white Astyle2"><span>ดูเพิ่มเติม</span></a>
                                            </div>
                                        </div>
                                        <Row className="row-5">
                                            <div className="full-width arrows arrows-3">
                                                <ItemsCarousel
                                                    requestToChangeActive={this.setActiveItemIndex}
                                                    activeItemIndex={activeItemIndex}
                                                    numberOfCards={3}
                                                    gutter={20}
                                                    leftChevron={<button className="Chevron">{'<'}</button>}
                                                    rightChevron={<button className="Chevron">{'>'}</button>}
                                                    outsideChevron
                                                    chevronWidth={chevronWidth}
                                                    infiniteLoop={true}
                                                >
                                                    <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${productData[0].productpic_1}`} alt="" />
                                                    <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${productData[0].productpic_1}`} alt="" />
                                                    <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${productData[0].productpic_1}`} alt="" />
                                                    <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${productData[0].productpic_1}`} alt="" />
                                                    <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${productData[0].productpic_1}`} alt="" />
                                                    <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${productData[0].productpic_1}`} alt="" />
                                                </ItemsCarousel>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div> */}
                </Row>
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Overviews);