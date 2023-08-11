import React,{useEffect} from "react";
import './footer.css'
import {FiChevronRight, FiSend} from "react-icons/fi"
import {AiOutlineClockCircle} from "react-icons/ai"
import video2 from "../../Assets/video/video-home.mp4"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();


    useEffect(()=>{
        Aos.init({duration:2000}, [])
    })

    return (
        <section data-aos="fade-up" className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>


            <div className="secContent pagePadding">
                <div className="footerCard flex">

                    <div className="footerInfo flex">
                        <div data-aos="fade-up"  className="contactDiv flex">
                        <div className="text">
                            <small>ĐẶT HÀNG LÀM NGAY</small>
                            <h2>Huynh Mica Designer</h2>
                        </div>

                        <div className="inputDiv flex">
                            <input type="email" placeholder="Hãy nhập email vào đây" id="email" />
                            <a href="http://zalo.me/0912788780"></a>
                            <button className="btn flex" type="submit">
                                <FiSend className="icon" /> Đặt hàng ngay
                            </button>

                        </div>
                    </div>
                    </div>

                    <div className="footerLinks">
                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Liên hệ Huynh
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="https://www.facebook.com/profile.php?id=100007706773422"> Facebook </a>
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="#">Instagram</a>
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="http://zalo.me/0912788780">Zalo</a>
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="tel:0912788780">Phone</a>
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="mailto:huynhmica88@gmail.com">Gmail</a>
                            </li>
                        </div>

                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Địa chỉ cơ sở
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="https://goo.gl/maps/d1ttvjUmPjUj9oaNA">61 Lương Hữu Khánh, Quận 1</a> 
                            </li>

                            <li className="footerList flex time">
                                <AiOutlineClockCircle className="icon"/>
                                Thời gian: 8am - 20pm
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                <a href="https://goo.gl/maps/bK1zWoL9Ju3RPpau7">565/13 Lê Văn Thọ, Gò Vấp</a>
                            </li>

                            <li className="footerList flex time">
                                <AiOutlineClockCircle className="icon"/>
                                @24/7 - Liên lạc 
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Hôm nay: {date}/{month}/{year}
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>HUYNH MICA DESIGNER WEBSITE</small>
                        <small>@COPYRIGHTS RESERVE - SUNNY - {month}/{year}</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer