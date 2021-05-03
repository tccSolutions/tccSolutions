import React from 'react'
import ac from '../../../data/images/MDCS.jpg'
import letter from '../../../data/images/letter.jpg'
import nhl from '../../../data/images/nhlstandings.jpg'

class Python extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-center mt-5 border-bottom border-secondary border-3'>               
                <div id="carouselExampleControls" class="carousel slide w-75 " data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div className=''>
                        <h3><a style={{color:'white'}} href="https://www.python.org/about/apps/">Python Projects</a></h3>
                        <p>Python is a versatile language that is great for web scraping and automation.<br></br> The programs displayed below were developed
                            by the TCCS.TECH team using python.
                        </p>
                    </div>
                        <div class="carousel-item active  mt-3">
                            {/* photo 1 */}
                            <div className=''>
                                <img src={ac} alt='' width='300px' />
                                <p>This program was designed for an Animal Services Agency to automate the paper work required for certain animals.</p>
                            </div>
                        </div>
                         {/* photo 2 */}
                        <div class="carousel-item ">                            
                                <div className=''>
                                <img src={letter} alt='' height='300px' />
                                </div>
                                <div className='d-flex flex-row justify-content-center'>
                                <p className='w-50'>This program was designed for a Code Enforcement Agency. 
                                    It uses <a className='light pointer' style={{color:'white'}} href='https://www.parsehub.com/blog/what-is-web-scraping/'>Web Scraping </a> 
                                     to collect property owner information. The program then formats a letter that is then mailed to the property owner.</p>
                                </div>                   
                        </div>
                        {/*photo 3 */}
                        <div class="carousel-item ">
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={nhl} alt='' height='300px' />
                            </div>
                            <div className='d-flex flex-row justify-content-center'>
                                <p className='flex-row w-50 '>This is a personal program that uses Web Scraping to get the current NHL League Standings.<br></br>
                                                                        I might be a little bit of a hockey fan.</p>
                            </div>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Python;