import React, {useEffect} from "react";

import './contact.css'
import {AiFillFacebook, AiFillPhone} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {TbSquareRoundedLetterZ} from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration:2000}, [])
    })
    return (
        <section id="contact" className="contact">       
            <div className="mainContent">
                <div className="textDiv">
                    <div className="pagePadding">
                        <div className="setTitle">
                            <div className="title">Liên hệ</div>
                            <div className="line"></div>
                        </div>
                        <div className="setContent flex">
                            <div className="Content flex">
                                <div data-aos="fade-right" className="leftContent">  
                                    <div className="setText">
                                        <h1>Liên hệ để được hỗ trợ báo giá chính xác nhất</h1>
                                        <p>Nếu bạn có câu hỏi nào cần được giải đáp về thiết kế, hay mức giá, hãy liên hệ qua Zalo, Facebook hoặc Gmail dưới đây.</p>
                                    </div>
                                    <div className="logoIcon">
                                        <a data-aos="fade-right" href="https://www.facebook.com/profile.php?id=100007706773422"><AiFillFacebook className="icon"/></a>
                                        <a data-aos="fade-right" href="mailto:huynhmica88@gmail.com"><SiGmail className="icon" /></a>
                                        <a data-aos="fade-right" href="tel:0912788780"><AiFillPhone className="icon" /></a>
                                        <a data-aos="fade-right" href="https://zalo.me/0912788780"><TbSquareRoundedLetterZ className="icon" /></a>
                                    </div>
                                </div>
                                <div className="rightContent">
                                    <div data-aos="fade-up" className="fContent">
                                        <h2>Địa chỉ</h2>
                                        <div className="content">
                                            <a href="tel:0912788780">+84 912788780</a>
                                            <a href="mailto:huynhmica88@gmail.com">huynhmica88@gmail.com</a>                                   
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" className="sContent">
                                        <h3>Cơ sở chính</h3>
                                        <p>Kios 61 Lương Hữu Khánh, Quận 1</p>
                                        <p className="small">HO CHI MINH CITY</p>
                                    </div>
                                    <div data-aos="fade-up" className="sContent">
                                        <h3>Cơ sở phụ</h3>
                                        <p>565/13 Lê Văn Thọ, Gò Vấp</p>
                                        <p className="small">HO CHI MINH CITY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
