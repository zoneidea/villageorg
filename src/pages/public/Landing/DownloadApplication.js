import React from "react"
import { connect } from 'react-redux'
import Footer from '../../../components/footer'
import NavBar from '../../../components/navbar_other';
import MobileModel from "../../../assets/images/mobile.jpg";
import PlayerStore from "../../../assets/images/playstore-button.png";
import AppStore from "../../../assets/images/app-store-button.png";
import { Form, Button, sCarousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import "../../../css/style.css";
class DownloadApplication extends React.Component {
    render() {
        return (
            <>
                {/* Application */}
                <NavBar />
                <Container style={{ paddingTop: 120 }}>
                    <Row>
                        <Col md="6">
                            <Image style={{ width: "80%" }} src={MobileModel} />
                        </Col>
                        <Col md="6" className="PromptFont">
                            <h3 class="font-bold text-center " style={{ marginTop: "50px" }}>สามารถ Download ไฟล์เพื่อนำไปใช้งานกับ</h3>
                            <h2 class="font-bold text-center ">VillageInsight Mobile Application</h2>
                            <Row>
                                <Col md="6">
                                    <a href="http://www.villageinsight.org:8000/apk">
                                        <div style={{ borderStyle: "solid", borderColor: "blue", borderWidth: "thin" }}>
                                            <Image style={{ width: "80%" }} src={PlayerStore} />
                                        </div>
                                    </a>
                                </Col>
                                <Col md="6">
                                    <a href="#">
                                        <div style={{ borderStyle: "solid", borderColor: "blue", borderWidth: "thin" }}>
                                            <Image style={{ width: "80%" }} src={AppStore} />
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Footer style={{ bottom: "0px" }} />
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadApplication);