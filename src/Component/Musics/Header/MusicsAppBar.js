import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        direction: "rtl",
        padding: theme.spacing(2),
        marginTop: "10px"
    },
    menuButton: {
        marginRight: theme.spacing(.5),
    },
    title: {
        textAlign: "center"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',

        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    Icon: {
        color: theme.palette.success.main
    }
}));

export default function MusicsAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.sectionDesktop} color="inherit" variant="outlined" position="static">
                <Toolbar className={classes.root}>
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid item lg={4}>
                                <Typography className={classes.title} variant="h5">
                                    <b> عرصه موزیک</b>
                                </Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Button component={Link} to="/" color="inherit">
                                    <InputAdornment position="end">
                                        <HomeOutlinedIcon className={classes.Icon}/>
                                    </InputAdornment>
                                    <Typography>
                                        <b>صفحه اصلی</b>
                                    </Typography>
                                </Button>
                                <Button component={Link} to="/Login" color="inherit">
                                    <InputAdornment position="end">
                                        <LockOpenIcon className={classes.Icon}/>
                                    </InputAdornment>
                                    <Typography>
                                        <b>ورود/حساب کاربری</b>
                                    </Typography>
                                </Button>
                                <Button component={Link} to="/Musics" color="inherit">
                                    <InputAdornment position="end">
                                        <MusicNoteOutlinedIcon className={classes.Icon}/>
                                    </InputAdornment>
                                    <Typography>
                                        <b>موزیک ها</b>
                                    </Typography>
                                </Button>
                                <Button component={Link} to="#" color="inherit">
                                    <InputAdornment position="end">
                                        <PollOutlinedIcon className={classes.Icon}/>
                                    </InputAdornment>
                                    <Typography>
                                        <b>تبلیغات</b>
                                    </Typography>
                                </Button>
                                <Button component={Link} to="/About" color="inherit">
                                    <InputAdornment position="end">
                                        <InfoOutlinedIcon className={classes.Icon}/>
                                    </InputAdornment>
                                    <Typography>
                                        <b>درباره ما</b>
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item lg={2}>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                >
                                    <TelegramIcon color="action"/>
                                </IconButton>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                >
                                    <InstagramIcon color="action"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}

