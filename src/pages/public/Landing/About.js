import React from "react"
import { connect } from 'react-redux'
import Footer from '../../../components/footer';
import NavBar from '../../../components/navbar_other';
import { Carousel, Container, Row, Col, Image, Navbar, Nav,p } from 'react-bootstrap';
class About extends React.Component {
    render() {
        return (
            <>
                {/* ABOUT PAGE */}
                <NavBar />
                <Carousel>
                    <Carousel.Item style={{height: '33rem'}} >
                        <Image className="d-block w-100 bannerCenter"
                            src="http://www.villageinsight.org/static/media/001.5f001d7e.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 class="font-bold text-center "> เกี่ยวกับโครงการ DE Smart Village</h3>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:50}}>
                        <Col xs={12} md={12}>
                            <Image style={{  maxWidth: '100%' }}  src="http://www.villageinsight.org/static/media/about-banner.9c66b0a4.jpg" alt="about-banner" class="rounded" />
                        </Col>
                    </Row>
                    <Row style={{paddingTop:50}}>
                        <Col style={{textAlign:'left'}} xs={12} md={12}>
                            <p style={{fontSize:18}}>จากแนวนโยบายของชาติที่ต้องการให้มีพัฒนาเศรษฐกิจการค้าภายในประเทศด้วยการส่งเสริมการสร้าง อาชีพ พัฒนาธุรกิจท้องถิ่น จึงให้มีการปฏิรูป พัฒนา และส่งเสริมให้คนในชุมชนมีรายได้มีการสร้างงานและมีการ รวมตัวเป็นกลุ่มผู้ผลิตสินค้า มีองค์ความรู้ สร้างสินค้าหรือบริการที่มีคุณภาพ มีความเป็นธรรม และมีมาตรฐาน เพื่อเป็นการสร้างโอกาสและขยายช่องทางการตลาด พร้อมทั้งยกระดับความสามารถในการแข่งขันทางการค้า ให้กับกลุ่มผู้ผลิตในชุมชนชนบทของเอกลักษณ์และอัตลักษณ์ ด้วยการสร้างมูลค่าจากเทคโนโลยี นวัตกรรม และเศรษฐกิจ ภาคการค้าและบริการให้กับผู้ประกอบการชุมชนฐานรากอย่างครบวงจร</p>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:50}}>
                        <Col xs={12} md={12}>
                            <Image style={{  maxWidth: '100%' }}  src="http://www.villageinsight.org/static/media/about-banner2.28b34cc4.jpg" alt="about-banner" class="rounded" />
                        </Col>
                    </Row>
                    <Row style={{paddingTop:50}}>
                        <Col style={{textAlign:'left'}} xs={12} md={12}>
                            <p style={{fontSize:18}}>การแก้ไขปัญหาความยากจนดังกล่าวโดยใช้โมเดลหมู่บ้านเถาเป่าและเมืองเถาเป่าซึ่งเป็นโมเดลการประกอบธุรกิจด้วยโครงสร้างพื้นฐานทางการค้าที่ทันสมัย มีประสิทธิภาพ และสอดคล้องกับระบบสากลเพื่อให้ ภาคผู้บริโภคสามารถเข้าถึงและเกิดการยอมรับในสินค้าและบริการที่รัฐบาลจีนดำเนินการประสบผลสำเร็จมา สร้างโอกาสกับกลุ่มผู้นำชุมชนและสมาชิกในชุมชน โดยส่งเสริมให้กลุ่มผู้ผลิตสินค้าได้พัฒนาศักยภาพผ่าน กระบวนการส่งเสริมองค์ความรู้โดยเฉพาะการตลาดออนไลน์ที่ถือเป็นเรื่องจำเป็นสำหรับผู้นำชุมชนในยุคปัจจุบัน ภายใต้การพัฒนาชุมชนเดิมให้เกิดผลสัมฤทธิ์ใน นิเวศน์เศรษฐกิจชุมชนเพื่อการขับเคลื่อนเศรษฐกิจดิจิทัลฐานราก Thailand Local Content in DE Smart Village</p>
                        </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);