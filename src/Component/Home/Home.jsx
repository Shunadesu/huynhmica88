import React, {useEffect} from "react";
import './home.css'
import video from '../../Assets/video/video-home.mp4';
import HUYNH from '../../Assets/img/HUYNH.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000}, [])
    })

    return (
        <section id="home" className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        HUYNH MICA
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Chuyên Thiết kế và thi công Mica
                    </h1>
                </div>
                <div data-aos="fade-right" className="cardDiv pagePadding">
                    <div data-aos="fade-up" className="leftContent">
                        <h1 className="Title">
                            Gia công sản phẩm theo thiết kế của khách hàng
                        </h1>
                        <p>Bằng tâm huyết của mình, HUYNH luôn thiết kế tỉ mỉ, chỉnh chu theo đúng tính chất của vật liệu mica, theo ý muốn của quý khách, từ những chiếc hộp vuông, đến những chiếc gương góc cạnh.</p>   
                        <a href="tel:0912788780" className="btn">Gọi đặt hàng ngay!!</a>
                    </div>

                    <div className="middleContent">
                        <h1 className="Title">
                            Đặt những thiết kế được dựng sẵn thông qua miêu tả
                        </h1>
                        <p>Những sản phẩm có nhu cầu sử dụng cao như bảng hiệu, hay những con dấu nhỏ gọn, hay những kệ hàng trong suốt tỉ mỉ, cho đến những chiếc bảng tên, quý khách hàng có thể nhận chỉ sau 1 ngày.</p>   
                        <a href="mailto:huynhmica88@gmail.com" className="btn">Liên hệ qua Email!!</a>
                    </div>

                    <div className="rightContent">
                        <img src={HUYNH} alt="Bảng Hiệu" />
                        <div className="emailPhoneContact">
                            <div className="email">@huynhmica88@gmail.com</div>
                            <div className="phone">@0912788780</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
