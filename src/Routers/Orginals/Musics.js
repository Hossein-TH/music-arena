import React from "react";
import "../../Assets/Css/Animation.css";
import MusicsAppBar from "../../Component/Musics/Header/MusicsAppBar";
import SearchBar from "../../Component/Musics/Header/SearchBar";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LeftBox from "../../Component/Musics/Content/LeftBox";
import {makeStyles} from "@material-ui/core/styles";
import CenterTopBox from "../../Component/Musics/Content/CenterTopBox";
import RightBox from "../../Component/Musics/Content/RightBox";
import CenterCenterBox from "../../Component/Musics/Content/CenterCenterBox";
import Card1 from "../../Component/Card/Card1";
import Card2 from "../../Component/Card/Card2";
import Card3 from "../../Component/Card/Card3";
import Card5 from "../../Component/Card/Card5";
import Card4 from "../../Component/Card/Card4";
import MusicsPagination from "../../Component/Pagination/Pagination";
import MusicsFooter from "../../Component/Musics/Footer/MusicsFooter";
import Card6 from "../../Component/Card/Card6";


const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    }
}));

function Musics() {
    const classes = useStyle();
    return(
        <div>
            <MusicsAppBar/>
            <SearchBar/>
            <Divider/>
            <div className={classes.root}>
                <Container>
                    <Grid container>
                        <Grid item lg={3} md={4} xs={12}>
                            <LeftBox/>
                        </Grid>
                        <Grid item lg={6} md={4} xs={12}>
                            <CenterTopBox/>
                            <CenterCenterBox/>
                            <Card1/>
                            <Card2/>
                            <Card3/>
                            <Card4/>
                            <Card5/>
                            <Card6/>
                            <MusicsPagination/>
                        </Grid>
                        <Grid item lg={3} md={4} xs={12}>
                            <RightBox/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <MusicsFooter/>
        </div>
    )
}

export default Musics