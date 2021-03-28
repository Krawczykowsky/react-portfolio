import React from 'react'
import mountain from '../img/mountain_landscape.svg'
import $ from 'jquery'


// const test =JSON.stringify(jj)
console.log()
const Header = () => {
    
    return (
        <>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light nav_custom">
                <a className="navbar-brand">mK</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link about_button" id="" href="#">o mnie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link portfolio_button" id="" href="#">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link contact_button" id="" href="#">kontakt</a>
                        </li>
    
    
                    </ul>
                </div>
            </nav>
            <div className="main_title">
                <h1 >
                    maciej krawczykowski
                </h1>
                <h2 >
                    front-end developer
                </h2>
            </div>
            <div className="main_title_2">
                <h1>
                    maciej krawczykowski
                </h1>
                <h2>
                    front-end developer
                </h2>
            </div>
                <div className="circle_sun">
                <div className="circle_sun_inner_1 "></div>
                <div className="circle_sun_inner_3 "></div>
                <div className="circle_sun_inner_2 "></div>
                </div>
                <div className="clouds_container">
    
                    <img src={mountain} alt=""/>
                </div>
            <div className="scroll_down">
                <div className='icon-scroll'></div>
            </div>
        </header>
        </>
    )
}

export default Header
setTimeout(() => {
    $(".about_button").click(function() {
        console.log("About button")
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".scroll_to_about").offset().top
        }, 2000);
    });
    $(".icon-scroll").click(function() {
        console.log("scroll button")
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".scroll_to_about").offset().top
        }, 2000);
    });
    $(".portfolio_button").click(function() {
        console.log("scroll button")
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".scroll_to_portfolio").offset().top
        }, 2000);
    });    
    $(".contact_button").click(function() {
        console.log("scroll button")
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact-section").offset().top
        }, 2000);
    });      
}, 100);

var movementStrengthHeight =$(window).height() / 2;
var movementStrengthWidth =$(window).width() / 2;

var heightTxt = movementStrengthHeight / $(window).height()/70;
var widthTxt = movementStrengthWidth / $(window).width()/70;

var height = movementStrengthHeight / $(window).height()/40;
var width = movementStrengthWidth / $(window).width()/40;

var height2 = movementStrengthHeight / $(window).height()/60;
var width2 = movementStrengthWidth / $(window).width()/60;

var height3 = movementStrengthHeight / $(window).height()/70;
var width3 = movementStrengthWidth / $(window).width()/70;
$("body").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 5;
    var newvalueY = height * pageY * -1 ;
    var newvalueX2 = widthTxt * pageX  ;
    var newvalueY2 = heightTxt * pageY  ;
    var newvalueX3 = width2 * pageX  * -1 - 5;
    var newvalueY3 = height2 * pageY  * -1 ;
    var newvalueX4 = width3 * pageX  * -1 - 5;
    var newvalueY4 = height3 * pageY * -1 ;
    $('.circle_sun_inner_1').animate({
        "margin-left":newvalueX3,
        "margin-top":newvalueY3
    },15);
    $('.circle_sun_inner_3').animate({
        "margin-left":newvalueX4,
        "margin-top":newvalueY4
    },15);

    $('.circle_sun_inner_2').animate({
        "margin-left":newvalueX,
        "margin-top":newvalueY
    },15);
    
    $('.main_title').animate({
        "margin-left":newvalueX2,
        "margin-top":newvalueY2
    },15);

    // $('.clouds_container').animate({
    //     "padding-left":newvalueX2*2,
    //     "padding-top":newvalueY2*2
    // },15);

});
$(document).scroll(function(){
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    
    if(top<=150){
        $('.icon-scroll').show("slow");
    }else{
        $('.icon-scroll').hide("slow");
    }
});