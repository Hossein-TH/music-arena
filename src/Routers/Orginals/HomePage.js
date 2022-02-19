import React from "react";
import Introduce1 from "../../Component/Home/Content/Introduce1";
import AppBarScrollTop from "../../Component/Home/Header/AppBarScrollToTop";
import Introduce2 from "../../Component/Home/Content/Introduce2";
import Introduce3 from "../../Component/Home/Content/Introduce3";
import Introduce4 from "../../Component/Home/Content/Introduce4";
import Introduce5 from "../../Component/Home/Content/Introduce5";
import Footer from "../../Component/Home/Footer/Footer";
import Divider from '@material-ui/core/Divider';

function HomePage() {
    return(
        <>
            <AppBarScrollTop/>
            <Introduce1/>
            <Divider/>
            <Introduce2/>
            <Divider/>
            <Introduce3/>
            <Introduce4/>
            <Introduce5/>
            <Divider/>
            <Footer/>
        </>
    )
}

export default HomePage