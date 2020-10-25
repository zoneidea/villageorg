import React from "react"
import { connect } from 'react-redux'
import NavBar from '../../../components/navbar_other';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Footer from '../../../components/footer';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { hostname } from "../../../api/host/hostname";
import { GetAllTopVillage } from "../../../api/fetch/getAllTopVillage";
import "../../../css/style.css"
class VillageProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alltopvillageData: null,
        };
    }
    componentDidMount() {
        GetAllTopVillage().then(data => this.setState({ alltopvillageData: data }));
    }
    render() {
        const alltopvillageData = this.state.alltopvillageData ? this.state.alltopvillageData : null;
        console.log("alltop village = ", alltopvillageData)
        const map = (
            <Map
                center={[13.7563, 100.5018]}
                zoom={6}
                style={{ width: "100%", height: "90%" }}
            // onClick={onMapClick}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={[13.7563, 100.5018]}
                //     key={index}
                //  icon={iconvillage}
                >
                    <Popup>
                        {'ชื่อหมู่บ้าน'}
                        <img
                            // src={`${hostname}/public/static/images/village/${item.villagepic_1}`}
                            alt=""
                        />
                        <br />

                    </Popup>
                </Marker>
                {/* {latlngdata.map((item, index) => (
                <Marker
                  position={[item.latitute, item.longtitute]}
                  key={index}
                  icon={iconvillage}
                >
                  <Popup>
                    {item.villagename}
                    <img
                      src={`${hostname}/public/static/images/village/${item.villagepic_1}`}
                      alt=""
                    />
                    <br />
                    <Link
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${item.latitute},${item.longtitute}`
                        )
                      }
                    >
                      <DirectionsIcon />
                      Go to Direction
                    </Link>
                  </Popup>
                </Marker>
              ))} */}
            </Map>
        );
        return (
            <>
                {/* ชุมชนโครงการ */}
                <NavBar />
                <Carousel>
                    <Carousel.Item style={{ height: '33rem' }} >
                        <Image className="d-block w-100 bannerCenter" src="http://www.villageinsight.org/static/media/002.e2dab618.jpg" alt="about-banner" class="rounded" />
                    </Carousel.Item>
                </Carousel>

                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 class="font-bold text-center "> สถานที่ชุมชนในโครงการทั้งหมด</h3>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col className="sectionMap">
                            {map}
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col xs={12} md={12}>
                            <h3 class="font-bold text-center "> ชุมชนในโครงการ</h3>
                        </Col>
                    </Row>

                </Container>
                <Container style={{ maxWidth: '90%', paddingTop: 50 }}>
                    {alltopvillageData && (
                        <>
                            <Row>
                                {alltopvillageData.map((item, index) => (
                                    <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
                                        <div class="item-block villagefirst">
                                            <div className="tour-layer delay-1" style={{opacity:1}}></div>
                                            <div className="vertical-align">
                                                <div className="container">
                                                    <h3 style={{color:"#ff6600"}}>ชุมชน {item.villagename} </h3>
                                                    <p style={{ fontSize: "16px",color:"white" }}>จ. {item.province_village}</p>
                                                    <a href={`/Villages?id=${item.id_village}`} class="c-button small border-white Astyle"><span>เยี่ยมชม</span></a>
                                                </div>
                                            </div>
                                            <Image className="image-home-card" src={`${hostname}/public/static/images/village/${item.villagepic_1}`} rounded />
                                        </div>

                                    </Col>
                                ))}
                            </Row>
                        </>
                    )}

                    {/* <Row>
                        <Col xs={12} md={4} >
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={12} md={4} >
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={12} md={4} >
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image className="image-home-card" src="http://www.villageinsight.org:8000/public/static/images/village/cXLnXYsVZzuS7btuTW0LmZRoSMbYEC73-1.jpg" rounded />
                        </Col>
                    </Row>
                    <br></br> */}
                </Container>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(VillageProjectPage);