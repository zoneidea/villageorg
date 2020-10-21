import React from "react"
import { connect } from 'react-redux'

import { FaBars } from "react-icons/fa"

const menu = [
    { name: "หน้าแรก", href: "/Landing" },
    { name: "เกี่ยวกับโครงการ", href: "/About" },
    { name: "ชุมชนในโครงการ", href: "/MapLocation" },
    { name: "ติดต่อเรา", href: "/Contact" },
    { name: "สมัครสมาชิก", href: "/Register" },
    { name: "แอพพลิเคชั่น", href: "/DownloadApplication" },
    // { name: "เข้าสู่ระบบ", href: "/Admin/Login" }
    { name: "เข้าสู่ระบบ", href: "http://villageinsight.org:8001/" }
];

class NavigationBar extends React.Component {

    state = {
        navbarOpen: false
    }

    render() {
        return (
            <>
                <nav className="fixed w-full top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-xl mb-3 shadow-lg bg-white">
                    <div className="container-xl px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap " ref="#pablo" >
                                <span className="inline text-blue-600">Village</span>
                                <span className="text-green-600">Insight</span>
                                <span className="text-black-100">.org</span>
                            </a>
                            <button
                                className=" cursor-pointer text-xl leading-none px-3 py-1 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })}>
                                <FaBars />
                            </button>
                        </div>
                        <div className={
                            "lg:flex flex-grow items-center" +
                            (this.state.navbarOpen ? " flex" : " hidden")
                        }
                            id="example-navbar-danger" >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                {
                                    menu.map((link, index) => (
                                        <li className="nav-item">
                                            <a className="px-3 py-2 flex items-center text-sm leading-snug hover:opacity-75" href={link.href}>
                                                {
                                                    link.name
                                                }
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducers
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);