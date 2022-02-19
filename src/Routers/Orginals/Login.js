import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import image from "../../Assets/img/Login-1.svg";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(-135deg,#61f2cf,#3d3080)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        direction: "rtl",
        padding: "15px",
        textAlign: "center",

    },
    Container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "92px"
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
        background: "linear-gradient(to right, #c0c0aa, #1cefff)",
        color: theme.palette.text.primary,
        borderRadius: "100px",
        padding: "10px 80px",
        textAlign: "right",
        textDecoration: "none",
        marginTop: "25px",
        marginBottom: "20px"
    }
}));


function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.Container}>
                <div className={classes.Box}>
                    <Container>
                        <Grid container>
                            <Grid item className={classes.sectionMobile} lg={6}>
                                <img alt="Logo" className={classes.Image} src={image}/>
                            </Grid>
                            <Grid item xs={12} lg={6} className={classes.Center}>
                                <form>
                                    <Typography color="textPrimary" variant="h5"><b>ورود به عرصه
                                        موزیک</b></Typography>
                                    <TextField autoFocus className={classes.Margin} required variant="outlined"
                                               placeholder="نام کاربری"/>
                                    <TextField className={classes.Margin} color="secondary" required
                                               variant="outlined"
                                               placeholder="رمز ورود"/>
                                    <div>
                                        <Button component={Link} to="#" type="submit" className={classes.Button}>
                                            <Typography>
                                                <b>ورود</b>
                                            </Typography>
                                        </Button>
                                    </div>
                                    <div className={classes.Margin}>
                                        <Button component={Link} to="#">
                                            <InputAdornment position="end">
                                                <LockOpenIcon color="primary"/>
                                            </InputAdornment>
                                            <Typography variant="p" color="primary">
                                                رمز عبور خودتو فراموش کردی؟
                                            </Typography>
                                        </Button>
                                    </div>
                                    <div className={classes.Margin}>
                                        <Button component={Link} to="/Register">
                                            <InputAdornment position="end">
                                                <AccountCircle color="primary"/>
                                            </InputAdornment>
                                            <Typography variant="p" color="primary">
                                                ایجاد حساب کاربری
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

export default Login