import React from "react"
import { connect } from 'react-redux'
import Footer from '../../../components/footer'
import NavBar from '../../../components/navbar_other';
import {Form, Button ,sCarousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
class ContractPage extends React.Component {
    render() {
        return (
            <>
                {/* ติดต่อเรา */}
                <NavBar />
                <Container style={{paddingTop:120}}>
                    <Row>
                        <Col>
                            <h3 class="font-bold text-center ">ส่งข้อความ</h3>
                            <h2 class="font-bold text-center ">ติดต่อกับเรา</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Control size="lg" type="text" placeholder="ชื่อ" />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="นามสกุล" />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="Email" />
                                <br />
                                <Form.Control size="lg" type="text" placeholder="โทรศัพท์" />
                                <br />
                                <Form.Control size="lg" as="textarea" placeholder="คำแนะนำ/ติชม" />
                                <br />
                                <Button variant="danger" size="lg" block>
                                    ส่งข้อความ
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

export default connect(mapStateToProps, mapDispatchToProps)(ContractPage);