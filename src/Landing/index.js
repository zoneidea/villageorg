import React, { Image } from "react"
import { connect } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import Navigationbar from '../components/navigationBar'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <img src={'http://www.villageinsight.org/static/media/001.5f001d7e.jpg'} />
                <article>
                    <section style={{ margin: 15, padding: 15 }}>
                        <p>{`ภายใต้การพัฒนาชุมชนเดิมให้เกิดผลสัมฤทธิ์ใน นิเวศน์เศรษฐกิจชุมชนเพื่อการขับเคลื่อนเศรษฐกิจดิจิทัลฐานราก Thailand Local Content in DE Smart Village จะเป็นการ สร้างโอกาสให้กับกลุ่มผู้นำชุมชนและสมาชิกในชุมชน โดยส่งเสริมให้กลุ่มผู้ผลิตสินค้าได้พัฒนาศักยภาพผ่าน กระบวนการส่งเสริมองค์ความรู้โดยเฉพาะการตลาดออนไลน์ที่ถือเป็นเรื่องจำเป็นสำหรับผู้นำชุมชนในยุคปัจจุบัน`}</p>
                    </section>
                    <section>
                        <h2 class="text-center">ชุมชนในโครงการ</h2>
                    </section>
                </article>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);