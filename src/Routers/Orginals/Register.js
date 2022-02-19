import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import image from "../../Assets/img/Register-1.svg";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import "../../Assets/Css/Animation.css"


const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364);",
        direction: "rtl",
        padding: "15px",
        textAlign: "center"
    },
    Container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "71px"
    },
    Box: {
        width: "960px",
        background: theme.palette.background.default,
        margin: "0 auto",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: "40px",
    },
    Image: {
        width: "100%",
    },
    sectionMobile: {
        display: "none",
        [theme.breakpoints.up('lg')]: {
            display: "flex"
        },
    },
    Margin: {
        marginTop: "25px"
    },
    Button: {
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        borderRadius: "100px",
        padding: "10px 80px",
        textAlign: "right",
        textDecoration: "none",
        marginTop: "25px",
        marginBottom: "20px"
    }
}));


function Register() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <Container>
                        <Grid container>
                            <Grid item className={classes.sectionMobile} lg={6}>
                                <img alt="Logo" id="Animation2" className={classes.Image} src={image}/>
                            </Grid>
                            <Grid item xs={12} lg={6} className={classes.Center}>
                                <form>
                                    <Typography color="textPrimary" variant="h5"><b>ایجاد حساب کاربری</b></Typography>
                                    <TextField autoFocus className={classes.Margin} type="email" required variant="outlined"
                                               placeholder="شماره تلفن/ایمیل"/>
                                    <TextField className={classes.Margin} type="password" required variant="outlined"
                                               placeholder="رمز ورود"/>
                                    <TextField className={classes.Margin} type="password" required variant="outlined"
                                               placeholder="تایید رمز"/>
                                    <div>
                                        <Button component={Link} to="#" type="submit" className={classes.Button}>
                                            <Typography>
                                                <b>ورود</b>
                                            </Typography>
                                        </Button>
                                    </div>
                                    <div className={classes.Margin}>
                                        <Button component={Link} to="/Login">
                                            <InputAdornment position="end">
                                                <VpnKeyIcon color="primary"/>
                                            </InputAdornment>
                                            <Typography variant="p" color="primary">
                                                ورود به حساب کاربری
                                            </Typography>
                                        </Button>
                                    </div>
                                    <div className={classes.Margin}>
                                        <Button component={Link} to="/">
                                            <InputAdornment position="end">
                                                <HomeRoundedIcon color="action"/>
                                            </InputAdornment>
                                            <Typography variant="p" color="primary">
                                                بازگشت به صفحه اصلی
                                            </Typography>
                                        </Button>
                                    </div>
                                </form>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Register