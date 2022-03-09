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
             <img src={triangle} alt="triangle-bg-image" className='bg-img-about' />
         <h2>&gt; About</h2>
         <p>Originally from Adelaide, Australia I moved to Vancouver, Canada permanently in 2015. Since being in Canada I have worked on multiple ecommerce projects in the retail fashion industry. I completed my BCIT Front End Web Development certificate in 2021 and have been working as a Web Designer and Developer for a Vancouver Island agency.</p>
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