import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Projects.css';
import blubird from '../Assets/slide1-blubrd.png';
import tonquin from '../Assets/tonquin-slide1.png';
import viewport from '../Assets/slide2-viewport.png';
import cloud9 from '../Assets/slide1-cloud9.png';
import triangle from '../Assets/test-img.png';
import portfolio from '../Assets/slide1-portfolio.png';

const Projects = () => {

    const swiper = useSwiper(); 
    return (
        <>
            <section className='projects' id="projects">
                <img src={triangle} alt="" className='bg-img-projects' />

                <div className="project-grid">
               
                <h2>&gt; Projects</h2>
                
                <div className="project-area">
                
                    <Swiper
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
                        
                        <SwiperSlide className='project-card'>
                            
                            <img className="slider-image" src={tonquin} alt="" />
                            <h3>Tonquin Vista Cabin Rentals</h3>
                            <p>A Tofino-based cabin rental website built using Wordpress for my BCIT program's Capstone Project. </p>
                            <Link to="/tonquin-vista">&gt; View Project</Link>
                        </SwiperSlide>

                        <SwiperSlide className='project-card'>
                            <img className="slider-image" src={viewport} alt="" />
                            <h3>Viewport Movie Database</h3>
                            <p>A movie database built using the TMDB API and React.js for one of my BCIT program's web development modules.</p>
                            <Link to="/viewport">&gt; View Project</Link>
                        </SwiperSlide>

                        <SwiperSlide className='project-card'>
                            
                            <img className="slider-image" src={cloud9} alt="" />
                            <h3>Cloud 9 Wellness Spa</h3>
                            <p>A Squarespace website and booking integration for a Squamish-based wellness spa.</p>
                            <Link to="/cloud-9">&gt; View Project</Link>
                        </SwiperSlide>

                        <SwiperSlide className='project-card'>
                            <img className="slider-image" src={portfolio} alt="" />
                            <h3>My Portfolio Site</h3>
                            <p>My updated portfolio page was built to showcase previous projects and to practice using React.js.</p>
                            <Link to="/portfolio-site">&gt; View Project</Link>
                        </SwiperSlide>

                        <SwiperSlide className='project-card'>
                            
                            <img className="slider-image" src={blubird} alt="" />
                            <h3>Blubird Fashion</h3>
                            <p>A Shopify ecommerce website built for a local Vancouver multi-brand fashion retailer.</p>
                            <Link to="/blubird">&gt; View Project</Link>
                        </SwiperSlide>

                        

                       

                        <div className="spacer"></div>
                    </Swiper>
                </div>
                     
                </div>

            </section>
        </>
    )
}

export default Projects;