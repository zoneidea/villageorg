import React from "react"
import { connect } from 'react-redux'
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import THLogo from "../assets/images/language/th.jpg";
import UNLogo from "../assets/images/language/un.jpg";
class NavBarOther extends React.Component {
    state = {
        bg: "transparent"
    };

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bg: "white" });
        } else {
            this.setState({ bg: "transparent" });
        }
    };
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }
    changeLang = (type) => {
        console.log("changelang = ", type);
        localStorage.setItem("Lng", type);
        window.location.reload();
    }
    render() {
        const lang = localStorage.getItem("Lng");
        return (
            <>
                <Navbar className="PromptFont"  /* class="navbar navbar-expand-lg navbar-light fixed-top py-3"*/ bg={'white'} expand="md" fixed="top" id="mainNav" expand="lg" >
                    <Container>
                        <Navbar.Brand href="/" style={{ color: 'grey', fontWeight: 'bold' }} ><span style={{ color: "#0099CC", fontSize: "24px" }}>Village</span><span style={{ color: "#009966", fontSize: "24px" }}>Insight.org</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                            <Nav>
                                {/* <Nav.Link href="/" style={{ color: 'grey', fontWeight: 'bold' }}>หน้าแรก</Nav.Link>
                                <Nav.Link href="/about" style={{ color: 'grey', fontWeight: 'bold' }}>เกี่ยวกับโครงการ</Nav.Link>
                                <Nav.Link href="/maplocation" style={{ color: 'grey', fontWeight: 'bold' }}>ชุมชนในโครงการ</Nav.Link>
                                <Nav.Link href="/contract" style={{ color: 'grey', fontWeight: 'bold' }}>ติดต่อเรา</Nav.Link>
                                <Nav.Link href="/register" style={{ color: 'grey', fontWeight: 'bold' }}>สมัครสมาชิก</Nav.Link>
                                <Nav.Link href="/downloadapplication" style={{ color: 'grey', fontWeight: 'bold' }}>แอพพลิเคชัน</Nav.Link>
                                <Nav.Link href="http://villageinsight.org:8001/" style={{ color: 'grey', fontWeight: 'bold' }}>เข้าสู่ระบบ</Nav.Link> */}
                                <Nav.Link href="/" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "หน้าแรก" : "Home"}</Nav.Link>
                                <Nav.Link href="/about" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "เกี่ยวกับโครงการ" : "About"}</Nav.Link>
                                <Nav.Link href="/maplocation" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "ชุมชนในโครงการ" : "Village"}</Nav.Link>
                                <Nav.Link href="/contract" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "ติดต่อเรา" : "Contract"}</Nav.Link>
                                <Nav.Link href="/register" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "สมัครสมาชิก" : "Register"}</Nav.Link>
                                <Nav.Link href="/downloadapplication" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "แอพพลิเคชัน" : "Application"}</Nav.Link>
                                <Nav.Link href="http://villageinsight.org:8001/" style={{ color: 'grey', fontWeight: 'bold' }}>{lang == "th" ? "เข้าสู่ระบบ" : "Login"}</Nav.Link>
                                <Nav.Link onClick={() => this.changeLang("th")}>
                                    <Image src={THLogo} style={{ width: "50px", height: "30px", marginTop: "-10px" }} />
                                </Nav.Link>
                                <Nav.Link onClick={() => this.changeLang("en")}>
                                    <Image src={UNLogo} style={{ width: "50px", height: "30px", marginTop: "-10px" }} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Thailand Village</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto my-2 my-lg-0">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Home</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">e-Brochure</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Winner Announcement</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Blogs</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">English</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Facebook</a></li>
                            </ul>
                        </div> */}
                    </Container>
                </Navbar >
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarOther);