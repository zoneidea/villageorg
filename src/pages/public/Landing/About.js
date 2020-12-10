import React from "react"
import { connect } from 'react-redux'
import Footer from '../../../components/footer';
import NavBar from '../../../components/navbar_other';
import { Carousel, Container, Row, Col, Image, Navbar, Nav, p } from 'react-bootstrap';
class About extends React.Component {
    render() {
        const lang = localStorage.getItem("Lng");
        let head = lang == "th" ? "เกี่ยวกับโครงการ DE Smart Village" : "About DE Smart Village";
        let detail1 = lang == "th" ? "จากแนวนโยบายของชาติที่ต้องการให้มีพัฒนาเศรษฐกิจการค้าภายในประเทศด้วยการส่งเสริมการสร้าง อาชีพ พัฒนาธุรกิจท้องถิ่น จึงให้มีการปฏิรูป พัฒนา และส่งเสริมให้คนในชุมชนมีรายได้มีการสร้างงานและมีการ รวมตัวเป็นกลุ่มผู้ผลิตสินค้า มีองค์ความรู้ สร้างสินค้าหรือบริการที่มีคุณภาพ มีความเป็นธรรม และมีมาตรฐาน เพื่อเป็นการสร้างโอกาสและขยายช่องทางการตลาด พร้อมทั้งยกระดับความสามารถในการแข่งขันทางการค้า ให้กับกลุ่มผู้ผลิตในชุมชนชนบทของเอกลักษณ์และอัตลักษณ์ ด้วยการสร้างมูลค่าจากเทคโนโลยี นวัตกรรม และเศรษฐกิจ ภาคการค้าและบริการให้กับผู้ประกอบการชุมชนฐานรากอย่างครบวงจร" : "From the policy of the nation that wants to have economic development, domestic trade by promoting the creation of occupations, local business development Therefore, there will be reform, development and promotion of people in the community to earn income, create jobs and Form a group of manufacturers Have knowledge Create a quality product or service There is fairness and standard to create opportunities and expand marketing channels. Along with enhancing the competitiveness of the trade To producer groups in rural communities of identity and identity By creating value from technology, innovation and economy, trade and service sectors, to entrepreneurs, community foundations, a full range";
        let detail2 = lang == "th" ? "การแก้ไขปัญหาความยากจนดังกล่าวโดยใช้โมเดลหมู่บ้านเถาเป่าและเมืองเถาเป่าซึ่งเป็นโมเดลการประกอบธุรกิจด้วยโครงสร้างพื้นฐานทางการค้าที่ทันสมัย มีประสิทธิภาพ และสอดคล้องกับระบบสากลเพื่อให้ ภาคผู้บริโภคสามารถเข้าถึงและเกิดการยอมรับในสินค้าและบริการที่รัฐบาลจีนดำเนินการประสบผลสำเร็จมา สร้างโอกาสกับกลุ่มผู้นำชุมชนและสมาชิกในชุมชน โดยส่งเสริมให้กลุ่มผู้ผลิตสินค้าได้พัฒนาศักยภาพผ่าน กระบวนการส่งเสริมองค์ความรู้โดยเฉพาะการตลาดออนไลน์ที่ถือเป็นเรื่องจำเป็นสำหรับผู้นำชุมชนในยุคปัจจุบัน ภายใต้การพัฒนาชุมชนเดิมให้เกิดผลสัมฤทธิ์ใน นิเวศน์เศรษฐกิจชุมชนเพื่อการขับเคลื่อนเศรษฐกิจดิจิทัลฐานราก Thailand Local Content in DE Smart Village" : "To resolve this poverty problem, using the Taopao Village and Taobao Township model, which is a modern commercial infrastructure model. Efficient And in accordance with the international system so that The consumer sector is able to reach and gain acceptance of the products and services that the Chinese government has accomplished. Creating opportunities with community leaders and members of the community By encouraging product manufacturers to develop their potential through The process of promoting knowledge, especially online marketing, is essential for today's community leaders. Under the original community development to achieve success in Community economy for driving the digital economy, founding Thailand Local Content in DE Smart Village";
        return (
            <>
                {/* ABOUT PAGE */}
                <NavBar />
                <Carousel>
                    <Carousel.Item style={{ height: '33rem' }} >
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
                            <h3 class="font-bold text-center "> {head}</h3>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col xs={12} md={12}>
                            <Image style={{ maxWidth: '100%' }} src="http://www.villageinsight.org/static/media/about-banner.9c66b0a4.jpg" alt="about-banner" class="rounded" />
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col style={{ textAlign: 'left' }} xs={12} md={12}>
                            <p style={{ fontSize: 18 }}>{detail1}</p>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col xs={12} md={12}>
                            <Image style={{ maxWidth: '100%' }} src="http://www.villageinsight.org/static/media/about-banner2.28b34cc4.jpg" alt="about-banner" class="rounded" />
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 50 }}>
                        <Col style={{ textAlign: 'left' }} xs={12} md={12}>
                            <p style={{ fontSize: 18 }}>{detail2}</p>
                        </Col>
                    </Row>


                </Container>
                <Footer />
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