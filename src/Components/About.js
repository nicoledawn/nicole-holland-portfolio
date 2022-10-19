import './About.css';
import headshot from '../Assets/headshot.jpg';
import triangle from '../Assets/test-img.png';

const About = () => {
    return (
        <>
        <div className="section-height">
        <section className='about' id="about">
        {/* <img src={line} alt="line" className="bg-img-about" /> */}
        
         <div className="about-text">
             {/* <img src={triangle} alt="triangle-bg-image" className='bg-img-about' /> */}
         <h2>&gt; About</h2>
         <p>Originally from Adelaide, Australia I moved to Vancouver, BC in 2015. Since being in Canada I have worked on multiple ecommerce projects in the retail fashion industry and through that experience I decided to pursue a career in web development. I completed my BCIT Front End Web Development certificate in 2021 and have since been studying full-stack and front-end technologies as well as working as a freelance developer for an Alberta-based company.</p>
         </div>
         <div className='about-image'>
             <img src={headshot} alt="" />
         </div>
      
         
     </section>

        </div>
        
        </>
    )
}

export default About;