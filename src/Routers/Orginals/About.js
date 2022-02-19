import React from "react";
import AboutHeader from "../../Component/About/AboutHeader";
import AboutSubHeader from "../../Component/About/AboutSubHeader";
import AboutContent from "../../Component/About/AboutContent";
import Footer from "../../Component/Home/Footer/Footer";
import AppBarScrollTop from "../../Component/Home/Header/AppBarScrollToTop";

function About() {
    return (
        <>
            <AppBarScrollTop/>
            <AboutHeader/>
            <AboutSubHeader/>
            <AboutContent/>
            <Footer/>
        </>
    )
}

export default About