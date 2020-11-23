import React from "react"
import { connect } from 'react-redux'
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import QRCode from "qrcode.react";
import { hostnoport } from "../api/host/hostname";
class NavBarVillage extends React.Component {


    state = {
        bg: "light",
        fixTop: "top"
    };

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bg: "light" });
            // this.setState({ fixTop: "top" });
        } else {
            this.setState({ bg: "light" });
            // this.setState({ fixTop: "none" });
        }
    };
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    render() {
        const informationData = this.props.data;
        // console.log(informationData);
        // console.log(informationData.villagename);
        // let options = arrayOfData.map(data => (
        //     <option key={data} value={data}>
        //         {data}
        //     </option>
        // ));
        return (
            <div>
                <Navbar className="PromptFont" style={{ backgroundColor: "rgba(255,255,255,.9)" }} /* class="navbar navbar-expand-lg navbar-light fixed-top py-3"*/ expand="md" fixed={this.state.fixTop} id="mainNav" expand="lg" >
                    <Container>
                        <Navbar.Brand href={`/Villages?id=${informationData.id_village}`} style={{ width: "21%", color: '#000000', fontWeight: 'bold' }} ><p className="PromptFont" style={{ textAlign: "left", marginTop: "-10px", marginBottom: "-10px" }}><span style={{ color: "#FF0066" }}>ชุมชน </span><span style={{ color: "#006400", fontSize: "30px" }}>{informationData.villagename}</span></p><p style={{ textAlign: "right", marginBottom: "-5px" }}>VillageInsight.org</p></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href={`/Villages?id=${informationData.id_village}`} style={{ color: '#000000', fontWeight: 'bold' }}>หน้าแรก</Nav.Link>
                                <Nav.Link href={`/Landmark?id=${informationData.id_village}`} style={{ color: '#000000', fontWeight: 'bold' }}>จุดเที่ยว</Nav.Link>
                                <Nav.Link href={`/Activity?id=${informationData.id_village}`} style={{ color: '#000000', fontWeight: 'bold' }}>กิจกรรม</Nav.Link>
                                <Nav.Link href={`/Food?id=${informationData.id_village}`} style={{ color: '#000000', fontWeight: 'bold' }}>น่าชิม</Nav.Link>
                                <Nav.Link href={`/Accomodation?id=${informationData.id_village}`} style={{ color: '#000000', fontWeight: 'bold' }}>น่าพัก</Nav.Link>
                                <Nav.Link href={`/Product?id=${informationData.id_village}`} style={{ color: '#000000', fontWeight: 'bold' }}>น่าซื้อ</Nav.Link>
                                {/* <Nav.Link href="#six" style={{ color: '#000000', fontWeight: 'bold' }}>ติดต่อ</Nav.Link> */}
                                <Nav.Link href="/" style={{ color: '#000000', fontWeight: 'bold' }}>กลับหน้าหลัก</Nav.Link>
                                <QRCode
                                    value={`${hostnoport}/Villages?id=${informationData.id_village}`}
                                    size={32}
                                    bgColor={"#ffffff"}
                                    fgColor={"#000000"}
                                    level={"L"}
                                    includeMargin={false}
                                    renderAs={"jpg"}
                                />
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar >
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarVillage);