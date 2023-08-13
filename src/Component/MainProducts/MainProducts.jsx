import React,{useEffect} from "react";
import './mainproducts.css';
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import {AiOutlineShoppingCart} from "react-icons/ai"


import banghieucamhutthuoc from '../../Assets/img/banghieu3.jpg'


//import data 
import condauchuki from '../../Assets/img/condauchuki.jpg'
import condauten from '../../Assets/img/condauten.jpg'
import condaumasothue from '../../Assets/img/condaumasothue.jpg'
import condaudathutien from '../../Assets/img/condaudathutien.jpg'

import bienphongban from '../../Assets/img/bienphongban.jpg';
import bienphongban2 from '../../Assets/img/bienphongban2.png';


import banner from '../../Assets/img/banner.jpg'
import banner2 from '../../Assets/img/banner2.jpg'
import bangten from '../../Assets/img/bangten.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[
    {
        id:1,
        imgSrc: condauchuki,
        destTitle: 'Con dấu',
        location: 'Chữ theo thiết kế',
        fees:'@50.000VND',
        description: 'Làm con dấu: chữ ký tên theo thiết kế của khách hàng, giúp tiết kiệm không ít thời gian, tiện lợi trong quá trình sử dụng'
    },

    {
        id:2,
        imgSrc: condauten,
        destTitle: 'Con dấu',
        location: 'Chữ theo thiết kế',
        fees:'@50.000VND',
        description: 'Làm con dấu: chữ ký tên theo thiết kế của khách hàng, giúp tiết kiệm không ít thời gian, tiện lợi trong quá trình sử dụng'    
    },

    {
        id:3,
        imgSrc: condaumasothue,
        destTitle: 'Con dấu',
        location: 'Chữ theo thiết kế',
        fees:'@50.000VND',
        description: 'Con dấu mã số thuế giúp doanh nghiệp tiết kiệm không ít thời gian và tiện lợi trong quá trình sử dụng.'    
    },

    {
        id:4,
        imgSrc: condaudathutien,
        destTitle: 'Con dấu',
        location: 'Chữ theo thiết kế',
        fees:'@50.000VND',
        description: 'Con dấu xác nhận được sử dụng bởi bộ phận kế toán, bán hàng và bộ phận thu ngân của doanh nghiệp.'
    },


    {
        id:5,
        imgSrc: banner,
        destTitle: 'Bảng quảng cáo',
        location: 'Chất liệu: mica',
        fees:'@50.000',
        description: 'Dùng cho các nhà hàng, quán ăn chứa chiến lược marketing, khuyến mãi. Là điểm nhấn giúp khách hàng chú ý đến.'
    },

    {
        id:6,
        imgSrc: banner2,
        destTitle: 'Bảng quảng cáo',
        location: 'Chất liệu: mica Thiết kế theo yêu cầu' ,
        fees:'@50.000',
        description: 'Thiết kế theo ý kiến của doanh nghiệp. Thiết kế độc đáo là điểm nhấn giúp khách hàng chú ý đến.'    
    },


    {
        id:7,
        imgSrc: banghieucamhutthuoc,
        destTitle: 'Biển báo',
        location: 'Chất liệu: Nhôm, Ilu',
        fees:'@50.000VND',
        description: 'Biển báo cấm hút thuốc, được sử dụng rộng rãi ở các khu vực công cộng, mang lại hiệu quả cao'
    },

    {
        id:8,
        imgSrc: bienphongban,
        destTitle: 'Biển báo',
        location: 'Chất liệu: Mica, Acrylic',
        fees:'@50.000VND',
        description: 'Biển phòng ban giá rẻ mica trong dán decal ngoài trời, hoặc cao cấp với mica in UV, in ép nhiệt...'    
    },

    {
        id:9,
        imgSrc: bienphongban2,
        destTitle: 'Biển báo',
        location: 'Chất liệu: Inox',
        fees:'@50.000VND',
        description: 'Công nghệ sản xuất biển tên phòng chất liệu Inox thông dụng là Ăn mòn phun sơn, in trực tiếp, khắc laser.'
    },

    {
        id:10,
        imgSrc: bangten,
        destTitle: 'Bảng tên nhân viên',
        location: 'Chất liệu: Đồng, Kim loại, Mica',
        fees:'@20.000VND',
        description: 'Mẫu bảng tên đẹp có thể in ảnh, in logo, in chữ lên bảng tên nhân viên theo yêu cầu, đủ chất liệu, kích thước, màu sắc.'
    },

]


const MainProducts = () => {
    useEffect(()=>{
        Aos.init({duration:2000}, [])
    })
    return (
        <section className="mainProducts">
        <div className="pagePadding">
            <div className="mainContent">
                <div className="reTitle">Những sản phẩm có sẵn</div>
                <Swiper
                modules={[Grid, Pagination, Autoplay]}
                    breakpoints={{
                        
                        300:{
                            slidesPerView:1,
                        },
                        768:{
                            slidesPerView: 2,
                        },
                        1048: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    >
                    {
                        Data.map(({id, imgSrc, destTitle, location, fees, description}) => {
                            return(
                                
                                <SwiperSlide><div key={id} className="singleDestination" data-aos="fade-up">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <span className="name">{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="price">
                                                <h5>Giá: {fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <a href="https://zalo.me/0523372202">
                                            <button className="btn flex">
                                                    <AiOutlineShoppingCart className="icon"/>
                                                <p>Đặt hàng qua Zalo</p>
                                            </button>
                                        </a>
                                    </div>
                                </div></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
        </section>
    )
}

export default MainProducts
