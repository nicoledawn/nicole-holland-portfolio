import './Title.css';
import bgimg from '../Assets/corner.png';

const Title = () => {
    return (
        <>
            <section className='title'>
                <img src={bgimg} alt="bg-image" className="bg-img-title" />
                <h1 className='title-h1'>Nicole Holland</h1>
                <h2>Front-end Web Developer</h2>
                <ul className='nav-2'>
                    <li><a href="#about">&gt; about</a></li>
                    <li><a href="#projects">&gt; view projects</a></li>
                    <li><a href="#cv">&gt; view c.v.</a></li>
                    <li><a href="#contact">&gt; contact</a></li>
                </ul>
            </section>
        </>
    )
}

export default Title;