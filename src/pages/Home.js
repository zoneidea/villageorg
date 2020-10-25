import React from "react"
import { connect } from 'react-redux'
import NavBar from '../components/navbar_home';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap'; 
class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
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
                    <h3 class="text-center mt-0">Thailand Village Academy has selected 22 incredible villages around the country that pride themselves on their rich culture, fascinating history and traditional legacy, all of which have been preserved for worldwide youth travelers to explore and meet with local “masters”. These community experts will be able to form a connection to the history, culture and local wisdom of each destination. You will see the authentic way of life and gain and a unique experience away from Thailand’s more popular tourist destinations.
Once you have explored the community of your choice through the Village Academy, we are sure that you will learn and discover many new things and gain new perspectives on life, opening up a whole new chapter of your life while creating unforgettable memories from Thailand.</h3>

                </Container>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <h2 style={{ fontSize: 42, color: '#036ea8' }} ><strong>Cultural Village Tourism</strong></h2>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>

                <Container>
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
                            <Image src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/05/Fuded-by.jpg" />
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
                            <Image style={{  maxWidth: '100%' }} resizeMode = 'cover' src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/09/Logo-all_2.jpg" />
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
                            <Image src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/05/sps-1.jpg" />
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
                            <Image src="https://www.thailandvillageacademy.com/wp-content/uploads/2019/06/Logo2.png" />
                        </Col>
                    </Row>

                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);