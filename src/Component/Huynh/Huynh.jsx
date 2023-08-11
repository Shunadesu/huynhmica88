import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import slide1 from "../../Assets/img/sieucapvippro.jpg"
import slide2 from "../../Assets/img/napcatxe.jpg"
import slide3 from "../../Assets/img/ky-niem-chuong-mica-khac-laser.jpg"
import slide4 from "../../Assets/img/HUYNH.jpg"
import slide5 from "../../Assets/img/tagname3.jpg"
import slide6 from "../../Assets/img/banner2.jpg"


//blog1
import blog1 from "../../Assets/img/khac-mica.jpg"
import blog2 from "../../Assets/img/bangten.jpg"
import blog3 from "../../Assets/img/slidelaser.jpg"
import blog4 from "../../Assets/img/condau.jpg"

//blog2
import blog1_2 from "../../Assets/img/khac-mica5.png"
import blog2_2 from "../../Assets/img/banghieu.jpg"
import blog3_2 from "../../Assets/img/lasercatmica.jpg"
import blog4_2 from "../../Assets/img/bang-menu-khac-mica.jpg"

//blog3
import blog1_3 from "../../Assets/img/khac-mica3.jpg"
import blog2_3 from "../../Assets/img/HUYNH.jpg"
import blog3_3 from "../../Assets/img/logo.png"
import blog4_3 from "../../Assets/img/bienphongban2.png"

//blog4
import blog1_4 from "../../Assets/img/condauchuki.jpg"
import blog2_4 from "../../Assets/img/HUYNH.jpg"
import blog3_4 from "../../Assets/img/logo.png"
import blog4_4 from "../../Assets/img/bienphongban2.png"


import 'swiper/css';
import './huynh.css'

const DataSlide =[
    {
        id:1,
        imgSrc: slide1,
    },

    {
        id:2,
        imgSrc: slide2,
    },

    {
        id:3,
        imgSrc: slide3,
    },

    {
        id:4,
        imgSrc: slide4,
    },

    {
        id:5,
        imgSrc: slide5,
    },
    {
        id:6,
        imgSrc: slide6,
    },
]

const DataBlog =[
    {
        id:1,
        imgSrc: slide1,
        decs: 'Chuyên gia công sản phẩn MICA theo yêu cầu',
    },

    {
        id:2,
        imgSrc: slide2,
        decs: 'Nhận đặt và giao mica trong khu vực Hồ Chí Minh',
    },

    {
        id:3,
        imgSrc: slide3,
        decs: 'Cắt LASER, CNC, Mài bóng Mica chuyên nghiệp!',
    },

    {
        id:4,
        imgSrc: slide4,
        decs: 'Nhận làm bảng tên, con dấu các loại sỉ và lẻ',
    },
]

const DataBlog1 =[
    {
        id:1,
        imgSrc: blog1,
        decs: 'Chuyên gia công sản phẩn MICA theo yêu cầu.',
    },

    {
        id:2,
        imgSrc: blog2,
        decs: 'Nhận đặt và thiết kế bảng tên nhân viên trong công ty.',
    },

    {
        id:3,
        imgSrc: blog3,
        decs: 'Cắt LASER, CNC, Mài bóng Mica chuyên nghiệp!',
    },

    {
        id:4,
        imgSrc: blog4,
        decs: 'Nhận làm các loại con dấu các loại sỉ và lẻ.',
    },
]

const DataBlog2 =[
    {
        id:1,
        imgSrc: blog1_2,
        decs: 'Chuyên gia công sản phẩn MICA led theo yêu cầu.',
    },

    {
        id:2,
        imgSrc: blog2_2,
        decs: 'Thiết kế nắp hộp mica theo nhu cầu khách hàng.',
    },

    {
        id:3,
        imgSrc: blog3_2,
        decs: 'Cắt LASER, CNC, Mài bóng Mica chuyên nghiệp!',
    },

    {
        id:4,
        imgSrc: blog4_2,
        decs: 'Nhận làm các loại bảng hiệu, khắc mica chữ nổi bẳng laser',
    },
]

const DataBlog3 =[
    {
        id:1,
        imgSrc: blog1_3,
        decs: 'Chuyên gia công sản phẩn MICA led theo yêu cầu.',
    },

    {
        id:2,
        imgSrc: blog2_3,
        decs: 'Địa chỉ: 61 Lương Hữu Khánh, Quận 1.',
    },

    {
        id:3,
        imgSrc: blog3_3,
        decs: 'Thiết kế mica theo ý của quý khách hàng',
    },

    {
        id:4,
        imgSrc: blog4_3,
        decs: 'Nhận làm các loại bảng hiệu, khắc mica chữ nổi bẳng laser',
    },
]

const DataBlog4 =[
    {
        id:1,
        imgSrc: blog1_4,
        decs: 'Nhận làm các loại con dấu sỉ và lẻ.',
    },

    {
        id:2,
        imgSrc: blog4_4,
        decs: 'Nhận làm các loại bảng hiệu, khắc mica chữ nổi bẳng laser',
    },

    {
        id:3,
        imgSrc: blog3_4,
        decs: 'Thiết kế mica theo ý của quý khách hàng',
    },

    {
        id:4,
        imgSrc: blog2_4,
        decs: 'Địa chỉ: 61 Lương Hữu Khánh, Quận 1.',
    },
]


const Huynh = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();
    return (
        <section className="huynh" id="huynh">
            <div className="pagePadding">
                <div className="textDiv">
                    <div className="title">Blog của Huỳnh</div>
                    <div className="line"></div>
                </div>
                <div className="mainContent">
                    <div className="leftContent">
                        <div className="slideContent">
                            <div className="imgDiv">
                                <Swiper
                                modules={[Grid, Pagination, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}

                                autoplay={{
                                    delay: 10000,
                                    disableOnInteraction: false,
                                }}

                                loop={true}
                                >
                                {
                                    DataSlide.map(({id, imgSrc})=>{
                                        return(
                                            
                                                <SwiperSlide id={id}>
                                                    <img src={imgSrc} alt="slide" />
                                                </SwiperSlide>
                                            
                                        )
                                    })
                                }
                                </Swiper>
                            </div>
                        </div>
                    
                        {/* <div className="iconContent">
                            <div className="semiContent">
                                <div className="icon">

                                </div>
                                <div className="textContent">
                                    <h3>Hỗ trợ 24/7</h3>
                                    <p>Hỗ trợ khách hàng mọi ngày trong tuần, bất cứ lúc nào</p>
                                </div>
                            </div>
                            <div className="semiContent">
                                <div className="icon">

                                </div>
                                <div className="textContent">
                                    <h3>Chính sách chất lượng</h3>
                                    <p>Hoàn trả 100% nếu sản phẩm không đạt tiêu chuẩn</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="rightContent">                      
                            <div className="blog">
                            <Swiper
                            modules={[Grid, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}

                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}

                            loop={true}
                            >
                            {
                            DataBlog1.map(({id, imgSrc, decs})=>{
                                return(
                                    <SwiperSlide id={id}>
                                        <div className="blogContent">
                                            <div className="imgDiv">
                                                <img src={imgSrc} alt="img"/>
                                            </div>
                                            <div className="blogTextDiv">
                                                <h3>{decs}</h3>
                                                <p>{date}/{month}/{year}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                            </Swiper>
                            </div>
                            <div className="blog">
                            <Swiper
                            modules={[Grid, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}

                            autoplay={{
                                delay: 6500,
                                disableOnInteraction: false,
                            }}

                            loop={true}
                            >
                            {
                            DataBlog2.map(({id, imgSrc, decs})=>{
                                return(
                                    <SwiperSlide id={id}>
                                        <div className="blogContent">
                                            <div className="imgDiv">
                                                <img src={imgSrc} alt="img"/>
                                            </div>
                                            <div className="blogTextDiv">
                                                <h3>{decs}</h3>
                                                <p>{date}/{month}/{year}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                            </Swiper>
                            </div>
                            <div className="blog">
                            <Swiper
                            modules={[Grid, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}

                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}

                            loop={true}
                            >
                            {
                            DataBlog3.map(({id, imgSrc, decs})=>{
                                return(
                                    <SwiperSlide id={id}>
                                        <div className="blogContent">
                                            <div className="imgDiv">
                                                <img src={imgSrc} alt="img"/>
                                            </div>
                                            <div className="blogTextDiv">
                                                <h3>{decs}</h3>
                                                <p>{date}/{month}/{year}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                            </Swiper>
                            </div>
                            <div className="blog">
                            <Swiper
                            modules={[Grid, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}

                            autoplay={{
                                delay: 7500,
                                disableOnInteraction: false,
                            }}

                            loop={true}
                            >
                            {
                            DataBlog4.map(({id, imgSrc, decs})=>{
                                return(
                                    <SwiperSlide id={id}>
                                        <div className="blogContent">
                                            <div className="imgDiv">
                                                <img src={imgSrc} alt="img"/>
                                            </div>
                                            <div className="blogTextDiv">
                                                <h3>{decs}</h3>
                                                <p>{date}/{month}/{year}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                            </Swiper>
                            </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Huynh