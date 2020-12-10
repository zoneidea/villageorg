import React from "react"
import { connect } from 'react-redux'
import NavBar from '../../../components/navbar_other';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Footer from '../../../components/footer';
import { Carousel, Container, Row, Col, Image, Navbar, Nav, Figure } from 'react-bootstrap';
import { hostname } from "../../../api/host/hostname";
import { GetAllTopVillage } from "../../../api/fetch/getAllTopVillage";
/* OLMAP */
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
// import control from "ol/control"
import Feature from "ol/Feature";
import { Point, Polygon } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer.js";
import VectorSource from "ol/source/Vector.js";
import { Icon, Style, Stroke, Fill } from "ol/style.js";
import * as ol from "ol";
import { transform } from "ol/proj.js";
import PositionIcon from "../../../assets/images/marker/village.png";
/* OLMAP */
import "../../../css/style.css"

class VillageProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alltopvillageData: null,
            center: [11131949.08, 1459732.27],
            zoom: 7
        };
        this.myInput = React.createRef();
        this.olmap = new OlMap({
            target: null,
            layers: [
                new OlLayerTile({
                    source: new OlSourceOSM(),
                }),
            ],
            view: new OlView({
                center: this.state.center,
                zoom: this.state.zoom,
            }),
            controls: [],
        });
    }
    updateMap() {
        if (this.myInput.current) {
            this.olmap.setSize([
                this.myInput.current.offsetWidth,
                this.myInput.current.offsetHeight,
            ]);
        }
        this.olmap.getView().setCenter(this.state.center);
        this.olmap.getView().setZoom(this.state.zoom);
    }
    componentDidMount() {
        this.olmap.setSize(
            this.myInput.current.offsetWidth,
            this.myInput.current.offsetHeight
        );
        this.olmap.setTarget("map");
        this.updateMap();
        let allvillage = this.state.alltopvillageData;
        GetAllTopVillage().then(data => (
            this.setState({ alltopvillageData: data }),
            this.setMarker(data)
        ));
    }
    setMarker(data) {
        let lenData = data.length;
        for (let i = 0; i < lenData; i++) {
            let latNow = data[i].latitute;
            let lngNow = data[i].longtitute;
            var coordinateNow = [lngNow, latNow];
            var transformCoordNow = transform(
                coordinateNow,
                "EPSG:4326",
                "EPSG:3857"
            );
            console.log("transformCoord = ", transformCoordNow);
            var iconFeatureNow = new Feature({
                geometry: new Point(transformCoordNow),
            });
            var iconStyleNow = new Style({
                image: new Icon({
                    anchor: [0.5, 46],
                    anchorXUnits: "fraction",
                    anchorYUnits: "pixels",
                    offset: [0, 0],
                    size: [58, 100],
                    src: PositionIcon,
                }),
            });
            iconFeatureNow.setStyle(iconStyleNow);
            var vectorSourceNow = new VectorSource({
                features: [iconFeatureNow],
            });
            var vectorLayerNow = new VectorLayer({
                source: vectorSourceNow,
                zIndex: 999,
            });
            var layerDrawNow = this.olmap.getLayers();
            layerDrawNow.insertAt(1, vectorLayerNow);
        }
    }
    render() {
        const alltopvillageData = this.state.alltopvillageData ? this.state.alltopvillageData : null;
        const lang = localStorage.getItem("Lng");
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
                        <Image className="d-block w-100 bannerCenter" src="http://www.villageinsight.org/static/media/002.e2dab618.jpg" alt="about-banner" rounded={true} />
                    </Carousel.Item>
                </Carousel>

                <br></br>
                <br></br>
                <Container style={{ maxWidth: '90%' }}>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 class="font-bold text-center PromptFont"> {lang == "th" ? "สถานที่ชุมชนในโครงการทั้งหมด" : "Village Location"}</h3>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col className="sectionMap">
                            {/* {map} */}
                            <div id="map" className="map" ref={this.myInput} />
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col xs={12} md={12}>
                            <h3 class="font-bold text-center PromptFont">{lang == "th" ? "ชุมชนในโครงการ" : "Village"}</h3>
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
                                            <div className="tour-layer delay-1"></div>
                                            <div className="vertical-align">
                                                <div className="container PromptFont">
                                                    <h3>{lang == "th" ? `ชุมชน ${item.villagename}` : item.villagename_en} </h3>
                                                    <p style={{ fontSize: "16px", color: "white" }}>{lang == "th" ? ` จ. ${item.province_village}` : item.province_village_en}</p>
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