import React from 'react'
import cv from '../img/project_high.pdf'
export default function About() {
    return (
        <div className="container">
            <div className="main_info_container about_section scroll_to_about" >
                <div className="info_list" >
                    <div className="info_list_text">
                        <div className="info_list_text_subtitle">
                            <p>
                                about me.
                            </p>
                            
                        </div>
                        <div className="info_list_text_title">
                            <p>
                                o mnie.
                            </p>
                            
                        </div>
                        <div className="info_list_text_main">
                            <p>
                                

Jestem ambitnym programistą z ponad dwuletnim doświadczeniem w branży, specjalizuję się w tworzeniu stron internetowych oraz aplikacji webowych.
Zdobywałem umiejętności podczas 120 godzinnego kursu programowania JavaScript oraz stażu, który ukończyłem z pozytywnymi referencjami.
Obecnie skupiam się na poszerzeniu swoich umiejętności w zakresie back-endu. Poszerzam znajomość bibliotek React.js, Node.js, Express.js i GraphQL.
Jestem zainteresowany pracą na stanowisku Front-End Developera lub junior Back-End Developera, gdzie chciałbym się rozwijać w realizacji ciekawych, nowoczesnych projektów
                                
                            </p>
                            <div className="buttonsContainer">
                                <a href={cv}>Link do CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
