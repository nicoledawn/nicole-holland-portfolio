import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Single.css';
import viewport from '../Assets/viewport-devices.png';
import slide1 from '../Assets/slide1-viewport.png';
import slide2 from '../Assets/slide2-viewport.png';
import slide3 from '../Assets/slide3-viewport.png';
import slide4 from '../Assets/slide4-viewport.png';
import slide5 from '../Assets/slide5-viewport.png';
import slide6 from '../Assets/slide6-viewport.png';
import slide7 from '../Assets/slide7-viewport.png';


const Viewport = () => {
    const swiper = useSwiper();
    return (
        <>
            <section className="viewport">
                <div className="project-headings">
                    <h1>Viewport</h1>
                    <ul class="technologies">
                        <li>React.js</li>
                        <li>SASS</li>
                        <li>Gulp</li>
                        <li>Javascript</li>
                        <li>HTML5</li>
                    </ul>
                </div>

                <div className="project-details">
                    <img src={viewport} alt="" className="thumbnail-image" />
                    <div className="summary-details">
                        <h2>&gt; Project Summary</h2>
                        <p>This was a project that I completed during my BCIT Web Development program. I worked in a team of four students to develop this website using React.js and the TMDB API. This was a challenging project that focused on a more technical style of development rather than design-focused.</p>
                        <h2>&gt; Project Solution</h2>
                        <p>I really enjoyed the challenges in this project. The the biggest challenge we faced overall was utilising the TMDB API and getting it to work correctly within the React framework. I was responsible for completing the light and dark mode toggle for the website which was a fun feature to add. I was also responsible for adding the favouriting functionality to the movies using local storage, this really helped me gain a better understanding of React and expand my knowledge on it.</p>
                        <div className="project-buttons">
                            <a target="_blank" href="https://nicoleholland.ca/viewport">View Live Site</a>
                            <a target="_blank" href="https://github.com/nicoledawn/final-movie-db.git">View Github Repo</a>
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
                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='project-swiper-card'>
                            <img src={slide7} alt="" />
                        </SwiperSlide>
                        <div className="spacer"></div>
                    </Swiper>

                </div>


            </section>
        </>
    )
}

export default Viewport