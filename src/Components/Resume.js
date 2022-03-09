import './Resume.css';
import triangle from '../Assets/test-img.png';

const Resume = () => {
    return (
        <>
            <section className="cv" id="cv">
                <img src={triangle} alt="bg-image-triangle" className='bg-img-cv' />
               <div></div>
               <div>
               <h2>&gt; My C.V.</h2>
                <div className="resume-scroll">
                
                
                    <article className="skills-section">
                        <h3>&gt; Technical Skills</h3>
                        <div className="grid-skills">
                        <ul>
                            <h4>&gt; Technologies</h4>
                            <li>HTML5/CSS</li>
                            <li>Sass</li>
                            <li>React.js</li>
                            <li>three.js</li>
                            <li>Javascript/JQuery</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>Git/Github</li>
                        </ul>
                        <ul>
                            <h4>&gt; CMS &#38; Software</h4>
                            <li>Shopify / Liquid</li>
                            <li>Wordpress</li>
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe After Effects</li>
                            <li>MailChimp</li>
                        </ul>

                        </div>
                        
                    </article>
                    <article className='education-section'>
                        <h3>&gt; Education</h3>
                        <article className="education-item">
                            <h4>Front-End Web Development Certificate</h4>
                            <p>2021</p>
                            <p>British Columbia Institute of Technology</p>
                        </article>
                        <article className="education-item">
                            <h4>Certificate in Hospitality</h4>
                            <p>2010</p>
                            <p>SITE Academy</p>
                        </article>
                    </article>

                    <article className="work-section">
                        <h3>&gt; Work Experience</h3>

                        <article className="work-item">
                            <h4>Web Designer + Developer</h4>
                            <p>Chewy Creative | January 2022 - Present</p>
                            <ul>
                                <li>Adding JQuery based functionality and custom features to Squarespace sites</li>
                                <li>CSS/SCSS design for Squarespace websites</li>
                                <li>Designing and editing high fidelity website mock-ups in Adobe XD</li>
                                <li>Designing Squarespace site templates in Adobe XD</li>
                                <li>Developing custom Squarespace websites based on mock-ups and wireframes</li>
                                <li>Maintaining existing Squarespace, Weebly and Shopify sites for clients</li>
                            </ul>
                        </article>
                        <article className="work-item">
                            <h4>Manager, People &#38; Private Label</h4>
                            <p>Vestis Fashion Group Inc. | Sept 2019 - March 2021</p>
                            <ul>
                                <li>E-Commerce website development and maintenance (Shopify CMS)</li>
                                <li>E-commerce inventory system management and development using MySQL and advanced MS Excel reporting.</li>
                                <li>Store systems management including payment systems, POS, audio and security systems.</li>
                                <li>Payroll management and processing for 70+ employees</li>
                                <li>Benefits administration</li>
                                <li>General HR tasks including preparing contracts, assisting with hiring at store and head office level, conflict management and COVID process implementation.</li>
                                <li>Management of continued private label operations.</li>
                            </ul>
                        </article>

                        <article className="work-item">
                            <h4>Manager, Product Development</h4>
                            <p>Vestis Fashion Group Inc. | March 2017 - September 2019</p>
                            <ul>
                                <li>Management, review and tracking of seasonal product cycle</li>
                                <li>Vendor relationship management and buying contract negotiation</li>
                                <li>Assisting with seasonal budget planning</li>
                                <li>Managed projects for development of two private label brands for brick and mortar store</li>
                                <li>Coordination of product buying trips in North America and Europe</li>
                                <li>E-commerce website maintenance (Shopify CMS)</li>
                                <li>Inventory and customer data analysis</li>
                            </ul>
                        </article>

                        <article className="work-item">
                            <h4>Manager, Office Administration</h4>
                            <p>Vestis Fashion Group Inc. | September 2015 - March 2017</p>
                            <ul>
                                <li>Facilities maintenance of head office and retail store spaces.</li>
                                <li>Inventory / sell through reporting</li>
                                <li>Inventory adjustments and management</li>
                                <li>Organising travel arrangements for executive team</li>
                                <li>Accounting support including banking, petty cash and T4 generation.</li>
                                <li>Marketing support including MailChimp newsletter mail outs, creating collateral and in-store promotion coordination</li>
                                <li>Basic IT support for stores and office</li>
                                <li>Reception duties including answering calls, office inventory management and social event management.</li>
                            </ul>
                        </article>

                    </article>




                </div>

               </div>
               
            </section>
        </>
    )
}

export default Resume;