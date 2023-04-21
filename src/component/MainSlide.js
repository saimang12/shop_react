import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const MainSlide = ({ shop }) => {
    const s = useRef(null);


    const mainSlideOption = {
        dots: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
    };
    const randomNum = Math.floor(Math.random() * 100 + 0);

    return (
        <section className="MainSlide">
            <div className="inner">
                <div className="title">
                    <h2>Main Product</h2>
                </div>
                <Slider {...mainSlideOption} ref={s} className='slider'>
                    {

                        shop.map((it, idx) => {
                            return (
                                <div key={it.id} className={`itm itm0${idx + 1}`}>
                                    <Link to={`/detali/${it.id}`}>
                                        <figure>
                                            <img src={it.api_featured_image} alt={it.name} />
                                        </figure>
                                    </Link>
                                    <div className="desc">
                                        <h3>{it.name}</h3>
                                        <p>
                                            {
                                                it.description &&
                                                it.description.substr(0, 60) + '...' || 'This product has no description.'
                                            }
                                        </p>
                                        <span>{it.price === '0.0' ? 'SoldOut' : it.price}
                                            {it.price === '0.0' ? '' : it.price_sign}</span>
                                    </div>
                                </div>
                            )
                        }).slice(randomNum, randomNum + 40)
                    }
                </Slider>
                <div className="arrows">
                    <BsChevronLeft className='prev' onClick={() => { s.current.slickPrev() }} />
                    <BsChevronRight className='next' onClick={() => { s.current.slickNext() }} />
                </div>
            </div>
        </section>
    )
}

export default MainSlide