import React from "react"
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import NavBar from '../components/navbar_home';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { hostname } from "../api/host/hostname";
import { GetAllTopVillage } from "../api/fetch/getAllTopVillage";
import "../css/style.css";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alltopvillageData: null,
            lang: "th"
        };
    }
    changeLang = (lang) => {
        const { i18n } = this.props;
        const { value } = lang;
        this.setState({ lang });
        i18n.changeLanguage(value);
    };
    componentDidMount() {
        GetAllTopVillage().then(data => this.setState({ alltopvillageData: data }));
    }
    render() {
        const alltopvillageData = this.state.alltopvillageData ? this.state.alltopvillageData : null;
        const lang = localStorage.getItem("Lng");
        let detail = lang == "th" ? "ภายใต้การพัฒนาชุมชนเดิมให้เกิดผลสัมฤทธิ์ใน นิเวศน์เศรษฐกิจชุมชนเพื่อการขับเคลื่อนเศรษฐกิจดิจิทัลฐานราก Thailand Local Content in DE Smart Village จะเป็นการ สร้างโอกาสให้กับกลุ่มผู้นำชุมชนและสมาชิกในชุมชน โดยส่งเสริมให้กลุ่มผู้ผลิตสินค้าได้พัฒนาศักยภาพผ่าน กระบวนการส่งเสริมองค์ความรู้โดยเฉพาะการตลาดออนไลน์ที่ถือเป็นเรื่องจำเป็นสำหรับผู้นำชุมชนในยุคปัจจุบัน" : "Under the original community development to achieve success in Community economy to drive the digital economy, the foundation of Thailand Local Content in DE Smart Village will create opportunities for community leaders and members of the community. By encouraging product manufacturers to develop their potential through The process of promoting knowledge, especially online marketing, is essential for today's community leaders";
        return (
            <div>
                <NavBar />
                {/* <header class="masthead">
                
                </header> */}
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
                <br></br>
                <Container>
                    {/* <h3 className="text-center mt-0 PromptFont">ภายใต้การพัฒนาชุมชนเดิมให้เกิดผลสัมฤทธิ์ใน นิเวศน์เศรษฐกิจชุมชนเพื่อการขับเคลื่อนเศรษฐกิจดิจิทัลฐานราก Thailand Local Content in DE Smart Village  จะเป็นการ สร้างโอกาสให้กับกลุ่มผู้นำชุมชนและสมาชิกในชุมชน โดยส่งเสริมให้กลุ่มผู้ผลิตสินค้าได้พัฒนาศักยภาพผ่าน กระบวนการส่งเสริมองค์ความรู้โดยเฉพาะการตลาดออนไลน์ที่ถือเป็นเรื่องจำเป็นสำหรับผู้นำชุมชนในยุคปัจจุบัน</h3> */}
                    <h3 className="text-center mt-0 PromptFont">{detail}</h3>
                </Container>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="PromptFont" style={{ fontSize: 42, color: '#036ea8' }} ><strong>{lang == "th" ? "ชุมชนในโครงการ" : "Village"}</strong></h2>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    {alltopvillageData && (
                        <>
                            <Row>
                                {alltopvillageData.map((item, index) => (
                                    <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
                                        <div class="item-block villagefirst">
                                            <div className="tour-layer delay-1"></div>
                                            <div className="vertical-align">
                                                <div className="container PromptFont">
                                                    <h3>{lang == "th" ? `ชุมชน ${item.villagename}` : item.villagename_en} </h3>
                                                    <p style={{ fontSize: "16px", color: "white" }}> {lang == "th" ? ` จ. ${item.province_village}` : item.province_village_en}</p>
                                                    <a href={`/Villages?id=${item.id_village}`} class="c-button small border-white Astyle"><span>{lang == "th" ? "เยี่ยมชม" : "View"}</span></a>
                                                </div>
                                            </div>

                                            <Image className="image-home-card" src={`${hostname}/public/static/images/village/${item.villagepic_1}`} rounded />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </>
                    )}
                </div>
                {/* <Container>
                    <Row>
                        <Col xs={12} md={3} >
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village15.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village2.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village12.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village16.jpg" rounded />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={12} md={3} >
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village19.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village8.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village7.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village6.jpg" rounded />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={12} md={3} >
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village5.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village4.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village3.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village11.jpg" rounded />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={12} md={3} >
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village13.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village14.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village16.jpg" rounded />
                        </Col>
                        <Col xs={12} md={3}>
                            <Image className="image-home-card" src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/village17.jpg" rounded />
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h4 >Funded by</h4>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Image style={{ maxWidth: '100%' }} src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/05/Fuded-by.jpg" />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <h4 >Supported by</h4>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Image style={{ maxWidth: '100%' }} resizeMode='cover' src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/Logo-all_2.jpg" />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <h4 >Co Created by</h4>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Image style={{ maxWidth: '100%' }} src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/05/sps-1.jpg" />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <h4 >Media Partner by</h4>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Image style={{ maxWidth: '100%' }} src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/06/Logo2.png" />
                        </Col>
                    </Row>

                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps, withTranslation)(Home);