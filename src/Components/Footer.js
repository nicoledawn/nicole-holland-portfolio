import { useEffect, useState } from 'react';
import './Footer.css';
import { IconContext } from "react-icons";
import { GrMail, GrLinkedin, GrGithub} from 'react-icons/gr';
import {  IoIosArrowUp  } from 'react-icons/io';


const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


    return (

        

      <footer className="footer">
        <p>&copy; 2022 Nicole Holland</p>
        
        
        <div className="footer-grid-1">
            {showButton && (<button onClick={scrollToTop}>
              <IconContext.Provider value={{ className: "scroll-to-top"}}>
              <IoIosArrowUp /> 
              </IconContext.Provider>
              </button>)}</div>
              
          <div className="footer-grid-2">
          <IconContext.Provider value={{ className: "contact-icons" }}>
              <a className="icon-link" href="mailto:nicole@nicoleholland.ca"><GrMail /></a>
              <a rel="noreferrer noopener" target="_blank"  className="icon-link" href="https://www.linkedin.com/in/nicole-holland/"><GrLinkedin /></a>
              <a rel="noreferrer noopener" target="_blank"  className="icon-link" href="https://github.com/nicoledawn?tab=repositories"><GrGithub /></a>
              </IconContext.Provider>
          </div>
          


        
         
         
      </footer>
    );
  }
  
  export default Footer;