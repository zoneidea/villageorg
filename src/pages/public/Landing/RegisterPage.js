import React from "react"
import { connect } from 'react-redux'
import Footer from '../../../components/footer';
import NavBar from '../../../components/navbar_other';
import {Button,Form, Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
class RegisterPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                {/* สมัครสมาชิก */}
                <Container style={{paddingTop:120}}>
                    <Row>
                        <Col>
                            <h2 class="font-bold text-center ">ผู้จัดการชุมชน</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Control size="lg" type="text" placeholder="ชุมชน * " />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="อีเมล์ *" />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="รหัสผ่าน * " />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="ชื่อ *" />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="นามสกุล *" />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="เบอร์โทรศัพท์ *" />
                                <br />
                                <Button variant="primary" size="lg" block>
                                    สมัครสมาชิก
                                </Button>
                            </Form.Group>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    
                </Container>
                <Footer/>
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);