import React, { useContext, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { hostname } from "../../../api/host/hostname";
import NavBar from '../../../components/navbarvillage';
import { Carousel, Container, Row, Col, Image, Navbar, Nav, Modal, Button, Form } from 'react-bootstrap';
import { GetProduct } from '../../../api/fetch/getProduct';
import { GetVillageInformation } from '../../../api/fetch/getVillageInformation';
import { GetLandmark } from '../../../api/fetch/getLandmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ItemsCarousel from 'react-items-carousel';
import "../../../css/style.css"
class Food extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItemIndex: 0,
            modal: false,
            foodSelect: null
        };
    }
    componentDidMount() {
        // GetVillageInformation(id).then(data => this.setState({ informationData: data }));
        // GetProduct(id).then(data => this.setState({ productData: data }));
        // GetLandmark(id).then(data => this.setState({ landmarkData: data }));
    }
    toggle = (data) => {
        console.log("toggle", data);
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
        console.log("modal = ", this.state.modal);
        if (!this.state.modal) {
            this.setState({
                foodSelect: data
            })
        }
        else {
            this.setState({
                foodSelect: null
            })
        }
    }
    Reserve = () => {
        const people = document.getElementById("PeopleRe").value;
        const name = document.getElementById("NameRe").value;
        const tel = document.getElementById("TelRe").value;
        const email = document.getElementById("EmailRe").value;
        const date = document.getElementById("DateRe").value;
        if (people > 0 && name != "" && tel != "" && email != "" && date != "") {
            alert("จองสำเร็จ")
            this.setState((prevState) => ({
                modal: !prevState.modal,
            }));
        }
        else {
            alert("กรุณากรอกข้อมูลให้ครบ")
        }
    }
    navigator = (data) => {
        const lat = data.latitute;
        const lon = data.longtitute;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
        window.open(url);
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
        const reserve = this.state.foodSelect;
        console.log("Reserve = ", reserve);
        // console.log("information = ", informationData);
        // console.log("landmark = ", landmarkData);
        // console.log("product = ", productData);
        // console.log("food = ", foodData);
        // console.log("Activity = ", activityData);
        // console.log("pic activity = ", activityData)
        // console.log("alltopvillage = ", alltopvillageData);
        // console.log("accomodation = ", accomodationData);

        // console.log("URL = ", `http://www.villageinsight.org:8000/public/static/images/food/eciwoAKcO8CQHZDNUqABPI5TycUsYCff-1%20น่าชิม.jpg`)
        return (
            <>
                <Row>
                    <div className="housepoint">
                        <div className="clip">
                            <div style={{ objectFit: 'cover', width: "100%", height: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: /*`url(http://www.villageinsight.org:8000/public/static/images/food/eciwoAKcO8CQHZDNUqABPI5TycUsYCff-1%20น่าชิม.jpg)`*/ `url(${hostname}/public/static/images/food/${foodData[0].foodpic_1})`, backgroundPosition: 'center', backgroundPositionY: 'bottom' }}>
                            </div>
                        </div>
                        <div className="vertical-align">
                            <div className="container">
                                <Row>
                                    <Col md="12" xs="12">
                                        <div className="main-title-landmark PromptFont">
                                            {/* <p>อาหารใน ชุมชน {informationData.villagename}</p>
                                            <h1>อาหารที่น่าสนใจ</h1> */}
                                            <p>{lang == "th" ? `อาหารใน ชุมชน ${informationData.villagename}` : informationData.villagename_en}</p>
                                            <h1>{lang == "th" ? "อาหารที่น่าสนใจ" : "Food"}</h1>
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
                        {foodData.map((item, index) => (
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
                                                            <Image className="picPageFood" src={`${hostname}/public/static/images/food/${item.foodpic_1}`} alt="" />
                                                            <div className="price price-s-3 red tt">{lang == "th" ? "ราคาน่าสนใจ" : "hot price"}</div>
                                                            {/* <div className="price price-s-5 red tt">{lang == "th" ? "นำทาง" : "hot price"}</div> */}
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
                                                            <h4><b>{lang == "th" ? item.name_food : item.name_food_en}</b></h4>
                                                            {/* <span class="f-14 color-dark-2 grid-hidden">2 Place de la Sans Défense,
											Puteaux</span> */}
                                                            {/* <p class="f-14">Nunc cursus libero purus ac congue arcu cursus ut sed vitae
											pulvinar massa idporta nequetiam.</p> */}
                                                            <p className="f-14">{lang == "th" ? item.description_food : item.description_food_en}</p>
                                                            <a href="#"
                                                                className="c-button bg-dr-blue hv-dr-blue-o b-40 fl list-hidden">select</a>
                                                            <a href="#" className="c-button color-dr-blue hv-o b-40 fr list-hidden"><img
                                                                src="img/loc_icon_small_drak.png" alt="" />view on map</a>
                                                        </div>
                                                    </Col>
                                                    <Col md="4">
                                                        <div className="title bg-dr-blue clearfix PromptFont" style={{ height: "100%" }}>
                                                            <div className="vertical-align-food">
                                                                <div className="hotel-person color-white" style={{ color: "white", marginBottom: "20px" }}>{lang == "th" ? `ราคา ${item.food_price} บาท` : `Price ${item.food_price} Bath`}</div>
                                                                <a className="c-button b-40 bg-white color-dark-2 hv-dark-2-o grid-hidden"
                                                                    style={{ marginRight: "5px" }}
                                                                    onClick={this.toggle.bind(this, item)}>{lang == "th" ? "จองร้านอาหาร" : "reserve"}</a>
                                                                <a className="c-button b-40 bg-white color-dark-2 hv-dark-2-o grid-hidden"
                                                                    style={{ marginLeft: "5px" }}
                                                                    onClick={this.navigator.bind(this, item)}>{lang == "th" ? "นำทางไปร้าน" : "Navigation"}</a>
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
                {reserve && (<Modal show={this.state.modal} onHide={this.toggle} className="PromptFont">
                    <Modal.Header closeButton>
                        <Modal.Title>{lang == "th" ? reserve.name_food : reserve.name_food_en}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/food/${reserve.foodpic_1}`} alt="" />
                        <Form.Group controlId="PeopleRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="number" placeholder={lang == "th" ? "จำนวนคน" : "People"} />
                        </Form.Group>
                        <Form.Group controlId="NameRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="text" placeholder={lang == "th" ? "ชื่อผู้จอง" : "Name"} />
                        </Form.Group>
                        <Form.Group controlId="TelRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="text" placeholder={lang == "th" ? "เบอร์ติดต่อ" : "Tel"} />
                        </Form.Group>
                        <Form.Group controlId="EmailRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="email" placeholder={lang == "th" ? "อีเมลล์" : "E-mail"} />
                        </Form.Group>
                        <Form.Group controlId="DateRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="date" placeholder={lang == "th" ? "วันเวลา" : "Date Time"} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggle}>{lang == "th" ? "ปิด" : "Close"} </Button>
                        <Button variant="primary" onClick={this.Reserve}>{lang == "th" ? "จอง" : "Reserve"} </Button>
                    </Modal.Footer>
                </Modal>)}
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Food);