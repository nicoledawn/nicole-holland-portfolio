import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Single.css';
import blubird from '../Assets/devices-blubird.png';
import slide1 from '../Assets/slide1-blubrd.png';
import slide2 from '../Assets/slide2-blubird.png';

const Blubird = () => {
    const swiper = useSwiper();
    return (
        <>
            <section className="blubird">
                <div className="project-headings">
                    <h1>Blubird</h1>
                    <ul class="technologies">
                        <li>Shopify</li>
                        <li>Liquid</li>
                        <li>JQuery</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <div className="project-details">
                    <img src={blubird} alt="" className="thumbnail-image" />
                    <div className="summary-details">
                        <h2>&gt; Project Summary</h2>
                        <p>The client needed to expand into an ecommerce business at the beginning of COVID to continue to run the business. I was an employee of theirs at the time and had some experience dabbling in web development which is how I ended uo managing this project. I created this website using the Shopify CMS and started with a large data migration of product and features such as mega-menus, customised gift card codes, image hot-spotting, variant image display and dynamic discounting and promotional offers. </p>
                        <h2>&gt; Project Solution</h2>
                        <p>The main challenges in this project were figuring out the best CMS, connecting a third-party payment gateway, adding additional features mainly utilising apps and the data migration. For this site and because it was going to be maintained in house we needed to use a comprehensive CMS that was easy to use for someone with very little development experience. Shopify was the best choice for this site as not only is it comprehensive it was very easy to train anyone new on how to make updates to products, complete data migration and how to find apps to install for new features.</p>
                        
                    </div>
                </div>

                <div className="project-page-swiper">
                <h2>&gt; Project Gallery</h2>
                    
                    <Swiper className="project-swiper"
                        navigation
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        slidesPerView={2}
                        nextButton={'#js-next1'}
                        prevButton={'#js-prev1'}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: false }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        

                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide2} alt="" />
                        </SwiperSlide>
                        <div className="spacer"></div>
                    </Swiper>

                </div>


            </section>
        </>
    )
}

export default Blubird