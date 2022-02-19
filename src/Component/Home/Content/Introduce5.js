import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import CountUp from "react-countup";

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.Home2,
        clipPath: "polygon(0 0,100% 10%,100% 100%,0 100%)",
        minHeight: "91.5vh",
        backgroundSize: "cover",
    },
    image: {
        width: "70%",
        margin: "0 auto",
        textAlign: "center",
    },
    Text: {
        textAlign: "center",
        padding: theme.spacing(5),
        marginTop: "100px"

    },
    Icon: {
        border: "1px solid #000",
        height: "100px",
        width: "100px",
        margin: "20px auto",
        color: "#ffc800",
        transform: "rotate(45deg)",
        marginTop: "20px"
    },
    Icon2: {
        transform: "rotate(-45deg)",
        margin: "30px auto"
    },
    Color: {
        color: theme.palette.text.secondary
    }
}));

function Introduce5() {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <div className={classes.Text}>
                            <Typography className={classes.Color} variant="h3">
                                <b>آرشیو عرصه موزیک</b>
                            </Typography>
                            <Typography className={classes.Color} style={{marginTop: "10px"}} variant="h5">در چند مرحله و به سادگی به بهترین موزیک ها دسترسی داشته باشید</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <div className={classes.image}>
                            <Grid container>
                                <Grid item lg={4} xs={12}>
                                    <div className={classes.Icon}>
                                        <LibraryMusicRoundedIcon className={classes.Icon2} fontSize="large"/>
                                    </div>
                                    <Typography variant="h4" color="primary">
                                        <b>موزیک بیش از</b>
                                    </Typography>
                                    <Typography variant="h2" className={classes.Color}>
                                        <CountUp decimals={1} decimal=","  useEasing={false} redraw={true} start={400} end={3649} duration={3}/>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4} xs={12}>
                                    <div className={classes.Icon}>
                                    <MusicNoteRoundedIcon className={classes.Icon2} fontSize="large" />
                                    </div>
                                    <Typography variant="h4" color="primary">
                                        <b>جدیدترین موزیک ها</b>
                                    </Typography>
                                    <Typography variant="h2" className={classes.Color}>
                                        <CountUp  useEasing={false} redraw={true} start={50} end={200} duration={3}/>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4} xs={12}>
                                    <div className={classes.Icon}>
                                    <PlayCircleFilledRoundedIcon className={classes.Icon2} fontSize="large"/>
                                    </div>
                                    <Typography variant="h4" color="primary">
                                        <b>موزیک ویدیو</b>
                                    </Typography>
                                    <Typography variant="h2" className={classes.Color}>
                                        <CountUp decimals={1} decimal="," useEasing={false} redraw={true} start={200} end={1254} duration={3}/>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Introduce5