import React,{useEffect} from "react";
import './main.css'
import { Swiper, SwiperSlide} from "swiper/react";
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import {AiOutlineShoppingCart} from "react-icons/ai"
import banghieu from '../../Assets/img/banghieu.jpg'
import banghieu2 from '../../Assets/img/banghieu2.jpg'
import banghieu3 from '../../Assets/img/banghieu3.jpg'
import banner from '../../Assets/img/banner.jpg'
import banner2 from '../../Assets/img/banner2.jpg'
import hop1 from '../../Assets/img/hop1.jpg'
import hop2 from '../../Assets/img/hop2.jpg'
import hop3 from '../../Assets/img/hop3.jpg'
import hop4 from '../../Assets/img/hop4.jpg'
import hop5 from '../../Assets/img/hop5.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[
    {
        id:1,
        imgSrc: hop1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        fees:'$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:2,
        imgSrc: hop2,
        destTitle: 'Machu Machu',
        location: 'Peru',
        fees:'$600',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:3,
        imgSrc: hop3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        fees:'$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:4,
        imgSrc: hop4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        fees:'$800',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:5,
        imgSrc: hop5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        fees:'$1100',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:6,
        imgSrc: banner,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        fees:'$840',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:7,
        imgSrc: banner2,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        fees:'$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:8,
        imgSrc: banghieu,
        destTitle: 'Taj Mahal',
        location: 'India',
        fees:'$900',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:9,
        imgSrc: banghieu2,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        fees:'$500',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:10,
        imgSrc: banghieu3,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        fees:'$500',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
]


const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000}, [])
    })
    return (
        <section className="main" id="products">
        <div className="pagePadding">
            <div className="textDiv">
                <div className="title">Sản Phẩm</div>
                <div className="line"></div>
            </div>
            <div className="mainContent">
                <div className="reTitle">Những sản phẩm thiết kế bằng mica</div>
                <Swiper
                    modules={[Grid, Pagination, Autoplay]}
                    breakpoints={{
                        //when window width is >= 768px
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
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    >
                    {
                        Data.map(({id, imgSrc, destTitle, location, fees, description}) => {
                            return(
                                
                                <SwiperSlide><div key={id} data-aos="fade-up" className="singleDestination">
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

export default Main
