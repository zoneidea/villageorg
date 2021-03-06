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
import ImageGallery from 'react-image-gallery';
import "../../../css/style.css"
import "react-image-gallery/styles/css/image-gallery.css";
class Detail extends React.Component {
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
        const lang = localStorage.getItem("Lng");
        const images = [
            {
                original: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_1}`,
                thumbnail: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_1}`,
            },
            {
                original: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_2}`,
                thumbnail: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_2}`
            },
            {
                original: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_3}`,
                thumbnail: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_3}`
            },
            {
                original: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_4}`,
                thumbnail: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_4}`
            },
            {
                original: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_5}`,
                thumbnail: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_5}`
            },
            {
                original: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_6}`,
                thumbnail: `${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_6}`
            },
        ]
        return (
            <>
                <Row>
                    <div className="full-height">
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
                        <Col md="12">
                            <center><p className="PromptFont detail-landmark" style={{ marginTop: "20px" }}>{lang == "th" ? landmarkData.name_landmark : landmarkData.name_landmark_en}</p></center>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            {/* <Image className="img-landmark" src={`${hostname}/public/static/images/landmark/${landmarkData.landmark_pic_1}`} alt="" rounded thumbnail /> */}
                            <div style={{ width: '100%', height: '100%' }}>
                                <ImageGallery className="img-landmark" items={images} autoPlay={true} />
                            </div>
                        </Col>
                        <Col md="6">
                            <h3 className="PromptFont" style={{ textAlign: "left" }}>{lang == "th" ? "ประเภท : " : "Type : "} {lang == "th" ? landmarkData.type_landmark : landmarkData.type_landmark_en}</h3>
                            <h4 className="PromptFont" style={{ textAlign: "left" }}>{lang == "th" ? "ตำบล : " : "Sub District : "} {lang == "th" ? landmarkData.sub_district_landmark : landmarkData.sub_district_en}</h4>
                            <p className="PromptFont" style={{ textAlign: "left" }}><span style={{ fontSize: "20px" }}>{lang == "th" ? "รายละเอียด : " : "Detail : "}</span> {lang == "th" ? landmarkData.description_landmark : landmarkData.description_landmark_en}</p>
                        </Col>
                    </Row>
                    <Row>
                        <br /><br /><br />
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);