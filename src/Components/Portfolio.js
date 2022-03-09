import React from 'react';
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Single.css';
import portfolio from '../Assets/devices-portfolio.png';
import slide1 from '../Assets/slide1-portfolio.png';
import slide2 from '../Assets/slide2-portfolio.png';
import slide3 from '../Assets/slide3-portfolio.png';



const Portfolio = () => {
    const swiper = useSwiper();
    return (
        <>
            <section className="portfolio">
                <div className="project-headings">
                    <h1>Portfolio</h1>
                    <ul class="technologies">
                        <li>React.js</li>
                        <li>JQuery</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <div className="project-details">
                    <img src={portfolio} alt="" className="thumbnail-image" />
                    <div className="summary-details">
                        <h2>&gt; Project Summary</h2>
                        <p>This was my capstone project for my BCIT Front-End Web Development program. In a team of four our task was to create a functional cabin rental website using Wordpress and some basic project guidelines. </p>
                        <h2>&gt; Project Solution</h2>
                        <p>For this project we chose to do a Tofino-based cabin rental company and really tried to lean into the West coast vibe and aesthetic. It was important to us that we not only meet and exceed the project requirements but also that the website felt modern, clean and easy to use.</p>
                        <div className="project-buttons">
                            <a rel="noreferrer noopener" target="_blank" href="https://nicoleholland.ca/">View Live Site</a>
                            <a rel="noreferrer noopener" target="_blank" href="https://github.com/nicoledawn/nicole-holland-portfolio.git">View Github Repo</a>
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
                        <div className="spacer"></div>
                    </Swiper>

                </div>
                
                {/* <div className="back-button" >
                <Link to="/#projects">return to all projects</Link>

                </div> */}
                

            </section>
        </>
    )
}

export default Portfolio