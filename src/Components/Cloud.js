import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Single.css';
import cloud9 from '../Assets/devices-cloud-9.png';
import slide1 from '../Assets/slide1-cloud9.png';
import slide2 from '../Assets/slide2-cloud9.png';
import slide3 from '../Assets/slide3-cloud9.png';
import slide4 from '../Assets/slide4-cloud9.png';

const Cloud = () => {
    const swiper = useSwiper();
    return (
        <>
            <section className="cloud-9">
                <div className="project-headings">
                    <h1>Cloud 9 Wellness Spa</h1>
                    <ul class="technologies">
                        <li>SASS</li>
                        <li>Squarespace</li>
                        <li>JQuery</li>
                        <li>HTML5</li>
                    </ul>
                </div>

                <div className="project-details">
                    <img src={cloud9} alt="" className="thumbnail-image" />
                    <div className="summary-details">
                        <h2>&gt; Project Summary</h2>
                        <p>This website was built for a local Squamish wellness spa business. The client was wanting a site based on their physical location's design and style with the ability for the client to easily make changes to the site without the need for a developer. </p>
                        <h2>&gt; Project Solution</h2>
                        <p>I decided to use Squarespace for this project to ensure the site would be able to be maintained by the client themselves going forward. I kept the design fairly simple to achieve the clients desired aesthetic. It was important to be able to add the booking links for the clients scheduling system, and the booking links for the contractors that were not on the client's own scheduling system. This site is actually still in progress and eventually will have a technicians page and a blog page when the client is ready.</p>
                        <div className="project-buttons">
                            <a rel="noreferrer noopener"  target="_blank" href="https://www.cloud9wellnessspa.com/">View Live Site</a>
                           
                        </div>
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
                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide4} alt="" />
                        </SwiperSlide>
                        <div className="spacer"></div>
                    </Swiper>

                </div>


            </section>
        </>
    )
}

export default Cloud