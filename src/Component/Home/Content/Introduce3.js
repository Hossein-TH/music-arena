import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import image from "../../../Assets/img/Home-5.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import "../../../Assets/Css/Animation.css"

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.Home2,
        clipPath: "polygon(0 0,100% 0,100% 90%,0 100%)",
        minHeight: "91.5vh",
        backgroundSize: "cover",
        zIndex: 1200,
        padding: theme.spacing(8)
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'inline',
        },
    },
    sectionMobile: {
        display: 'inline',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    Image: {
        width: "100%",
        marginTop: "30px",
    },
    Text: {
        textAlign: "right",
        color: theme.palette.text.primary
    },
    Button : {
        background: "linear-gradient(266deg, rgba(255,69,120,1) 0%, rgba(240,31,80,1) 100%)",
        color: theme.palette.text.primary,
        borderRadius: "100px",
        padding: "10px 20px",
        textAlign: "right",
        textDecoration: "none",
        marginTop: "25px",
        marginBottom: "20px"
    },
    Center: {
        marginTop: "15%"
    },
    Margin: {
        marginTop: "15px"
    }
}));


function Introduce3() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Grid>
                            <img alt="Logo" className={classes.Image} src={image}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6} className={classes.Center}>
                        <Grid>
                            <div className={classes.Text}>
                                <Typography>
                                    <b>کاربری ساده، سریع و با کیفیت</b>
                                </Typography>
                                <div className={classes.Margin}>
                                <Typography style={{fontFamily: "IRANSansWeb"}} variant="body1">
                                    عرصه موزیک به شما این امکان را می دهد که به سادگی با چند کلیک به محتوای حرفه ای و با کیفیت دسترسی پیدا کنید و برای اهداف مختلف ازش استفاده کنید. استفاده از عرصه موزیک رایگانه
                                </Typography>
                                </div>
                                <Button component={Link} to="/Musics" className={classes.Button}>
                                    <Typography>
                                        <b>همین حالا گوش کن</b>
                                    </Typography>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Introduce3