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
class Shop extends React.Component {
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
    setActiveItemIndex = (activeItemIndex) => this.setState({ activeItemIndex });
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
        if (people > 0 && name != "" && tel != "" && email != "") {
            alert("จองสำเร็จ")
            this.setState((prevState) => ({
                modal: !prevState.modal,
            }));
        }
        else {
            alert("กรุณากรอกข้อมูลให้ครบ")
        }
    }
    render() {
        const { activeItemIndex } = this.state;
        const chevronWidth = 40;
        console.log(this.props);
        const shopNameData = this.props.shopNameData.ShopData[0];
        const productData = this.props.shopNameData.ProductData;
        const lang = localStorage.getItem("Lng");
        const reserve = this.state.foodSelect;
        // const urlBG = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3827984c-f6dd-4b12-968e-54c65827ba35/dc9ry6x-cc9f6cca-6630-4cc1-b6ae-1416192d228c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzgyNzk4NGMtZjZkZC00YjEyLTk2OGUtNTRjNjU4MjdiYTM1XC9kYzlyeTZ4LWNjOWY2Y2NhLTY2MzAtNGNjMS1iNmFlLTE0MTYxOTJkMjI4Yy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DuWtUsS54jTUJ4iwfpYrDI4TxHZkq5iqCv6mM9Kdj0E';
        const urlBG = 'https://www.thailandpostmart.com/files/banner_background/headershop-default.jpg';
        console.log("shopNameData = ", shopNameData);
        return (
            <>
                <Row>
                    <div className="coverShop">
                        <div className="clip">
                            {/* <div style={{ objectFit: 'cover', width: "100%", height: "100%", backgroundImage: `url(${hostname}/public/static/images/shopname/${shopNameData.shoppic1})`, backgroundPosition: 'center', backgroundPositionY: 'bottom' }}>
                            </div> */}
                            <div style={{ objectFit: 'cover', width: "100%", height: "100%", backgroundImage: `url(${urlBG})`, backgroundPosition: 'center' }} />
                        </div>
                    </div>
                    <div className="vertical-alignshop">
                        <div className="container main-shop">
                            <Row>
                                <Col md="12" xs="12">
                                    <div className="PromptFont">
                                        <h1 style={{ marginTop: "20px" }}>{shopNameData.name_shop_name}</h1>
                                        <h3>{shopNameData.province_shop}</h3>
                                        <button className="shareShop">แชร์ร้านค้า</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <div className="PromptFont" style={{ float: 'left', paddingLeft: "10px", marginTop: "20px" }}>
                                        <p className="locationShop-text">ตำแหน่งร้านค้า</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <div className="PromptFont" style={{ float: 'left', paddingLeft: "10px" }}>
                                        <p>
                                            {shopNameData.province_shop} {shopNameData.district_shop} {shopNameData.sub_district_shop} {shopNameData.post_shop_name}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="coverShop-footer" md="4">
                                    <div className="PromptFont">
                                        <p>เวลาเปิด-ปิด</p>
                                        <p>เปิดทุกวัน</p>
                                    </div>
                                </Col>
                                <Col className="coverShop-footer" md="4">
                                    <div className="PromptFont">
                                        <p>เบอร์โทรศัพท์</p>
                                        <p>{shopNameData.tel}</p>
                                    </div>
                                </Col>
                                <Col className="coverShop-footer" md="4">
                                    <div className="PromptFont">
                                        <p>ติดตามข่าวสาร</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="container">
                            <Row>
                                <Col md="12" className="PromptFont">
                                    <h3 style={{ float: "left", marginTop: "20px" }}>สินค้าขายดี</h3>
                                </Col>
                            </Row>
                            <Row>
                                <div className="filter-content row">
                                    {productData.map((item, index) => (
                                        <Col sm="3" md="3" className="item hotels gal-item">
                                            <div className="fig-landmark">
                                                <a className="black-hover" onClick={this.toggle.bind(this, item)}>
                                                    <div className="gal-item-icon">
                                                        <img className="img-landmark" src={`${hostname}/public/static/images/product/${item.productpic_1}`} alt="" />
                                                        <div className="tour-layer delay-1"></div>
                                                        <div className="vertical-align">
                                                            <span className="c-button small bg-white delay-2"><span>{lang == "th" ? "ซื้อสินค้า" : "Buy Product"}</span></span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="gal-item-desc delay-1 PromptFont">
                                                    <h4 style={{ marginTop: "10px", fontSize: "16px" }}><b>{item.name_product}</b></h4><br />
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </div>
                            </Row>
                        </div>
                    </div>
                </Row>
                {reserve && (<Modal show={this.state.modal} onHide={this.toggle} className="PromptFont">
                    <Modal.Header closeButton>
                        <Modal.Title >{lang == "th" ? reserve.name_product : reserve.name_product_en}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image style={{ width: "100%" }} src={`${hostname}/public/static/images/product/${reserve.productpic_1}`} alt="" />
                        <Form.Group controlId="PeopleRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="number" placeholder={lang == "th" ? "จำนวน" : "People"} />
                        </Form.Group>
                        <Form.Group controlId="NameRe" style={{ marginTop: "10px" }}>
                            <Form.Control type="text" placeholder={lang == "th" ? "ชื่อผู้สั่ง" : "Name"} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);