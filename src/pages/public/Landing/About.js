import React from "react"
import { connect } from 'react-redux'
import NavBar from '../../../components/navbar';
import { Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
class About extends React.Component {
    render() {
        return (
            <>
                {/* ABOUT PAGE */}
                <NavBar />
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://www.villageinsight.org/static/media/001.5f001d7e.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
                <Container>
                    <h3 class="font-bold text-center "> เกี่ยวกับโครงการ DE Smart Village</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);