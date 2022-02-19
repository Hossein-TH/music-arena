import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Logo from "../../../Assets/img/Logo.png";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import {Link} from "react-router-dom";
import MobileMenu from "./MobileMenu";
import {AppContext} from "../../../Context/AppContext";
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import {Hidden} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginTop: "25px"
        },
    },
    Color: {
        background: theme.palette.background.Home2
    },
    Transition: {
        marginTop: "15px",
        marginLeft: "65px",
        color: theme.palette.text.primary
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimaryAppBar() {
    const Context = useContext(AppContext);
    const classes = useStyles();
    const [toggle, setToggle] = React.useState(false);
    return (
        <div>
            <AppBar variant="elevation" className={classes.Color} position="sticky">
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={6} lg={6}>
                            <img alt="Music_Arena" style={{marginLeft: "20px", marginTop: "5px", height: "80px"}} src={Logo}/>
                        </Grid>
                        <Grid item lg={6}>
                            <Grid container>
                                <Grid item lg={2}>
                                    <Hidden xlUp mdDown>
                                        <IconButton className={classes.Transition} onClick={() => {
                                            Context.dispatch({
                                                    type: "changeTheme",
                                                    theme: Context.state.theme === "light" ? "dark" : "light"
                                                },
                                                setToggle(!toggle))
                                        }}>
                                            {
                                                Context.state.theme === "light" ? <BrightnessHighIcon fontSize="large"/> :
                                                    <Brightness4Icon fontSize="large"/>
                                            }
                                        </IconButton>
                                    </Hidden>
                                </Grid>
                                <Grid item lg={2}>
                                    <Button style={{marginRight: "5px"}} component={Link}
                                            to="/About"
                                            className={classes.sectionDesktop}>
                                        <Typography style={{marginRight: "10px"}} variant="body2">
                                            <b>درباره ما</b>
                                        </Typography>
                                        <InputAdornment position="start">
                                            <InfoRoundedIcon/>
                                        </InputAdornment>
                                    </Button>
                                </Grid>
                                <Grid item lg={2}>
                                    <Button component={Link} to="/Musics"
                                            className={classes.sectionDesktop}>
                                        <Typography style={{marginRight: "5px"}} variant="body2">
                                            <b> موزیک ها</b>
                                        </Typography>
                                        <InputAdornment position="start">
                                            <MusicNoteIcon/>
                                        </InputAdornment>
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button component={Link} to="/Login"
                                            className={classes.sectionDesktop}>
                                        <Typography style={{marginRight: "5px"}} variant="body2">
                                            <b> حساب کاربری</b>
                                        </Typography>
                                        <InputAdornment position="start">
                                            <AccountCircle/>
                                        </InputAdornment>
                                    </Button>
                                </Grid>
                                <Grid item lg={3}>
                                    <Button component={Link} to="/" className={classes.sectionDesktop}>
                                        <Typography style={{marginRight: "5px"}} variant="body2">
                                            <b> صفحه اصلی</b>
                                        </Typography>
                                        <InputAdornment position="start">
                                            <HomeRoundedIcon/>
                                        </InputAdornment>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{direction: "rtl"}} className={classes.sectionMobile}>
                            <MobileMenu/>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </div>
    );
}
