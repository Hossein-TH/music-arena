import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import image1 from "../../../Assets/img/Home-2.svg";
import image2 from "../../../Assets/img/Home-3.svg";
import image3 from "../../../Assets/img/Home-4.svg";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
        minHeight: "91.5vh",
        backgroundSize: "cover",
        padding: theme.spacing(8),
        color: theme.palette.text.primary
    },
    image: {
        width: "70%",
        margin: "0 auto",
        textAlign: "center",
    },
    Text: {
        textAlign: "center",
        marginTop: "50px"
    },
    Button: {
        textAlign: "center",
        background: "linear-gradient(266deg, rgba(255,69,120,1) 0%, rgba(240,31,80,1) 100%)",
        color: theme.palette.text.primary,
        borderRadius: "100px",
        padding: "10px 30px",
        textDecoration: "none",
        position: "absolute",
        left: "50%",
        marginLeft: "-90px",
        marginTop: "15px",
        [theme.breakpoints.up('md')]: {
            marginTop: "60px",
        },
    },
    Margin: {
        marginTop: "15px"
    }
}));

function Introduce2() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <div className={classes.Text}>
                            <Typography variant="h5">
                                <b>بخش های عرصه موزیک</b>
                            </Typography>
                            <div className={classes.Margin}>
                            <Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">در چند مرحله و به سادگی به موزیک ها دسترسی داشته باش ، این ساده ترین روش دسترسی به موزیک برای
                                شماست</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <div className={classes.image}>
                            <Grid container>
                                <Grid item lg={4} xs={12}>
                                    <img alt="Music_Arena" src={image1}/>
                                    <Typography>
                                        <b>جستجوی موزیک</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4} xs={12}>
                                    <img alt="Music_Arena" src={image2}/>
                                    <Typography>
                                        <b>جدیدترین موزیک ها</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4} xs={12}>
                                    <img  alt="Music_Arena" src={image3}/>
                                    <Typography>
                                        <b>موزیک ویدیو</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item lg={12} xs={12} >
                            <Button component={Link} to="/Musics" className={classes.Button}>
                                <b> همین حالا گوش کن</b>
                            </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Introduce2