import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import image1 from "../../../Assets/img/Home-1.svg";
import Typography from '@material-ui/core/Typography';
import "../../../Assets/Css/Animation.css";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    root: {
        background: theme.palette.background.Home,
        minHeight: "91.5vh",
        backgroundSize: "cover",
    },
    Image: {
        width: "100%",
        marginTop: "100px",
    },
    TextDesktop: {
        textAlign: "right",
        color: theme.palette.text.HomeText,
        marginTop: "250px",
        marginLeft: "10px"
    },
    TextMobile: {
        textAlign: "center",
        alignItems: "center",
        color: theme.palette.text.HomeText,
        marginTop: "100px",
    },
    Margin: {
        marginTop: "35px"
    },
    Button: {
        background: "linear-gradient(266deg, rgba(255,69,120,1) 0%, rgba(240,31,80,1) 100%)",
        color: theme.palette.text.HomeText,
        borderRadius: "100px",
        padding: "10px 20px",
        textAlign: "right",
        textDecoration: "none",
        marginTop: "25px",
        marginBottom: "20px"
    }
}));

function Introduce1() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Grid id="Animation">
                            <img alt="Logo" className={classes.Image} src={image1}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div className={classes.sectionDesktop}>
                            <div className={classes.TextDesktop}>
                                <Typography variant="h6">
                                    <b>در عرصه موزیک جدیدترین موزیک ها را گوش کنید</b>
                                </Typography>
                                <div className={classes.Margin}>
                                <Typography variant="body1">
                                    عرصه موزیک به شما این امکان را می دهد که به سادگی با چند کلیک به محتوای حرفه ای و با
                                    کیفیت دسترسی پیدا کنید و برای اهداف مختلف ازش استفاده کنید. استفاده از عرصه موزیک
                                    رایگانه
                                </Typography>
                                </div>
                                <Button component={Link} to="/Musics" className={classes.Button}>
                                    <Typography>
                                        <b>همین حالا گوش کن</b>
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                        <div className={classes.sectionMobile}>
                            <div className={classes.TextMobile}>
                                <Typography variant="h6">
                                    <b>در عرصه موزیک جدیدترین موزیک ها را گوش کنید</b>
                                </Typography>
                                <div className={classes.Margin}>
                                <Typography style={{fontFamily: "IRANSansWeb"}} variant="body1">
                                    عرصه موزیک به شما این امکان را می دهد که به سادگی با چند کلیک به محتوای حرفه ای و با
                                    کیفیت دسترسی پیدا کنید و برای اهداف مختلف ازش استفاده کنید. استفاده از عرصه موزیک
                                    رایگانه
                                </Typography>
                                </div>
                                <div>
                                    <Button component={Link} to="/Musics" className={classes.Button}>
                                        <Typography>
                                            <b>همین حالا گوش کن</b>
                                        </Typography>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Introduce1