import React from "react";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import './About.css';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom"


const Projects = () => {
    return (
      <Fullpage>
        <Navbar/>
        <FullpageNavigation />
        <FullPageSections>
            <FullpageSection className='style'>
                <div className="box-container">
                    
                </div>

                <div className="box-container-right">
                    <div className="box-right">
                        <div className="bio-text">
                            Jo
                        </div>
                        
                    </div>
                </div>

                
            </FullpageSection>
            <FullpageSection className='style'>
                <div className="box-container">
                    <div className="section-title">Data Scientist</div>
                </div>

                <div className="box-container-right">
                    <div className="box-right">
                        <div className="bio-text">Joanne is a violinist based in New York City.</div>
                    </div>
                </div>

                
                 

            </FullpageSection>
            <FullpageSection className='style'>
                <div className="box-container">
                    <div className="section-title">Biography - Violin</div>
                </div>

                <div className="box-container-right">
                    
                    <div className="bio-text">
                    Joanne is a violinist based in New York City. Her music has been featured and broadcasted 
                    on major media platforms and in news interviews such as Duowei News, The Epoch Times, and 
                    Broadcasting Corporation of China. Joanne’s performances are expanding throughout the US 
                    and Asia including venues of Carnegie Hall, the Headquarters of the United Nations, Lincoln 
                    Center, and others. Joanne also has won numerous accolades in the past years including being 
                    finalist at the Alice and Eleonore Schoenfeld International String Competition Aficinado 
                    Division for Violin in Hong Kong in 2013, and the top 10 semi-finalists at The Cooper 
                    International Violin Competition in Cleveland, Ohio in 2019.
                    </div>
                    <div className="bio-text">
                    In the summer of 2017, Joanne performed Vivaldi’s “Summer” Concerto as a collaboration with  
                    string ensemble at the Taipei Economic and Cultural Office in New York City. In later years, 
                    Joanne was invited to perform at both the opening and closing concerts of the Green Mountain 
                    Chamber Music Festival. In January 2020, Joanne was also invited by the General Agent of AKG 
                    Acoustics to give a recital at the National Recital Hall in Taiwan. Besides her soloist career, 
                    Joanne’s orchestral experience includes collaborations with Maestro David Robertson, and was 
                    taught by Simon Rattle and Yannick Nézet-Séguin at Juilliard. In early 2020, Joanne was taught 
                    by violinist Pierre Amoyal.
                    </div>
                    <div className="bio-text">
                    Joanne’s chamber music career includes several honorariums, including being selected to perform 
                    for the Emerson String Quartet and Brentano String Quartet in the DePaul School of Music’s master 
                    class in 2022 and winning the DePaul annual chamber competition in the same year.
                    </div>
                    <div className="bio-text">
                    Joanne graduated from The Juilliard School Pre-college Division and now she currently studies 
                    under the tutelage of I-Hao Lee at DePaul University pursuing a double major degree, awarded with 
                    an almost full scholarship for entire years of study. 
                    </div>   
                </div>
                
            </FullpageSection>
        </FullPageSections>
      </Fullpage>
    );
  };
  

export default Projects;