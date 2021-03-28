import React from 'react'
import mavena from '../img/mavena-ss.png'
import aiabot from '../img/aiabot-ss.png'
import nevis from '../img/nevis-ss.png'
import parato from '../img/parat-ss.png'
import garaio from '../img/garaio.png'
import bikemoto from '../img/bikemoto-ss.png'
import butelki from '../img/butelki-ss.png'
import topf from '../img/topf.png'
import win98 from '../img/window98.png'







function Portfolio() {
    return (
        <>
            <div className="container">
                <div className="main_info_container scroll_to_portfolio" >
                    <div className=" info_list-portfolio" >
                        <div className="info_list_text" >
                            <div className="info_list margin-portfolio">
                                <div className="info_list_text_subtitle reset-circle-sub">
                                    <p>
                                        projects.
                                    </p>
                                    
                                </div>
                                <div className="info_list_text_title reset-circle">
                                    <p>
                                        projekty
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="info_list_text_title reset-circle">
                                <div className="grid">
                                    <figure className="effect-julia">
                                        <img src={win98} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Alternatywne<br/> portfolio</span></h2>
                                            <div>
                                                <p>Technologie:</p><br/>
                                                <p>JS, SCSS, Node.js, Gulp</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://krawczykowski.svpj.pl/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={mavena} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Mavena</span></h2>
                                            <div>
                                                <p>Technologie:</p> <br/>
                                                <p>Hubspot, JS, SCSS, Gulp, Node.js</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://www.mavena.com/en/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={aiabot} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Aiabot</span></h2>
                                            <div>
                                                <p>Technologie:</p> <br/>
                                                <p>Hubspot, JS, SCSS, Gulp, Node.js</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://www.aiaibot.com/de/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={nevis} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Nevis</span></h2>
                                            <div>
                                                <p>Technologie:</p><br/>
                                                <p>Hubspot-Themes, JS, SCSS, Gulp, Node.js</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://www.nevis.net/en/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={parato} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Parato</span></h2>
                                            <div>
                                                <p>Technologie:</p><br/>
                                                <p>Hubspot, JS, SCSS, Gulp, Node.js</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://www.parato.ch/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={garaio} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Garaio</span></h2>
                                            <div>
                                                <p>Technologie:</p><br/>
                                                <p>Hubspot, JS, SCSS, Gulp, Node.js</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://www.garaio.com/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={bikemoto} alt="img21"/>
                                        <figcaption>
                                            <div>
                                                <h2>Bikemoto</h2> <br/>

                                                <p>Technologie:</p> <br/>
                                                <p>Shoper, JS, CSS, PHP</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://wspolpraca.bikemoto.pl/#1"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={butelki} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Zielone butelki</span></h2>
                                            <div>
                                                <p>Technologie:</p><br/>
                                                <p>Wordpress, JS, SCSS, PHP</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://zielonebutelki.pl/"></a>
                                        </figcaption>			
                                    </figure>
                                    <figure className="effect-julia">
                                        <img src={topf} alt="img21"/>
                                        <figcaption>
                                            <h2><span>Top finance</span></h2>
                                            <div>
                                                <p>Technologie:</p><br/>
                                                <p>Wordpress, JS, SCSS, PHP</p>
                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://topf.pl/"></a>
                                        </figcaption>			
                                    </figure>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
            
        </>
    )
}

export default Portfolio
