import React from "react"
import { connect } from 'react-redux'
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
class NavBar extends React.Component {
    state = {
        bg: "transparent"
    };

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bg: "dark" });
        } else {
            this.setState({ bg: "transparent" });
        }
    };
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    render() {
        return (
            <>
                <Navbar  /* class="navbar navbar-expand-lg navbar-light fixed-top py-3"*/ bg={this.state.bg} expand="md" fixed="top" id="mainNav" expand="lg" >
                    <Container>
                        <Navbar.Brand href="/" style={{ color: '#ffffff', fontWeight: 'bold' }} >VillageInside.org</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="/" style={{ color: '#ffffff', fontWeight: 'bold' }}>หน้าแรก</Nav.Link>
                                <Nav.Link href="/about" style={{ color: '#ffffff', fontWeight: 'bold' }}>เกี่ยวกับโครงการ</Nav.Link>
                                <Nav.Link href="/maplocation" style={{ color: '#ffffff', fontWeight: 'bold' }}>ชุมชนในโครงการ</Nav.Link>
                                <Nav.Link href="/contract" style={{ color: '#ffffff', fontWeight: 'bold' }}>ติดต่อเรา</Nav.Link>
                                <Nav.Link href="/register" style={{ color: '#ffffff', fontWeight: 'bold' }}>สมัครสมาชิก</Nav.Link>
                                <Nav.Link href="/downloadapplication" style={{ color: '#ffffff', fontWeight: 'bold' }}>แอพพลิเคชัน</Nav.Link>
                                <Nav.Link href="http://villageinsight.org:8001/" style={{ color: '#ffffff', fontWeight: 'bold' }}>เข้าสู่ระบบ</Nav.Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);