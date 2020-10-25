import React from "react"
import { connect } from 'react-redux'
import {div, Carousel, Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
class Footer extends React.Component {

   
    componentDidMount() {

    }

    render() {
        return (
            <>
                <Row style={{paddingTop:50,margin:0}}>
                    <Col style={{padding:0}} md={12}>
                        <Image style={{maxWidth:'100%'}} src="http://www.villageinsight.org/static/media/footer.d17f8bb8.png" alt="about-banner" class="rounded" />
                    </Col>
                </Row>
                <Row style={{paddingTop:20,margin:0}}>
                    <Col md={12}>
                        <p style={{fontSize:16}}>villageinsight.org</p>
                    </Col>
                </Row>
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);