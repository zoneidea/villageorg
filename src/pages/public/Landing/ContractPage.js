import React from "react"
import { connect } from 'react-redux'
import NavBar from '../../../components/navbar';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
class ContractPage extends React.Component {
    render() {
        return (
            <>
                {/* ติดต่อเรา */}
                <NavBar />
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
                <Container>
                    <h3 class="text-center mt-0">ติดต่อเรา</h3>
                </Container>
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