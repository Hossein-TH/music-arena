import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image6 from "../../Assets/img/Musics-6.jpg";
import HistoryIcon from '@material-ui/icons/History';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Divider from '@material-ui/core/Divider';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';
import {Transition} from "react-spring/renderprops-universal";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px",
        textAlign: "center",
        direction: "rtl",
        borderRadius: "7px",
    },
    Image: {
        margin: "0 auto",
        width: "100%",
        borderRadius: "30px",
        padding: theme.spacing(3)
    },
    Audio: {
        outline: "none",
        display: "inline-block",
        verticalAlign: "baseline",
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: "80%",
        },
    },
    Color: {
        color: theme.palette.text.main,
        fontFamily: "IRANSansWeb"
    },
    Font: {
        fontFamily: "IRANSansWeb"
    },
    Padding: {
        padding: theme.spacing(2)
    },
    Icon: {
        color: theme.palette.success.main
    },
    P: {
        textAlign: "center",
        fontFamily: "IRANSansWeb",
    },
    Button: {
        float: "left",
        height: "32px",
        width: "62px",
        textAlign: "center",
        backgroundColor: "#38465b",
        color: "#fff",
        outline: "none",
        border: "none",
        fontSize: "16px",
        fontFamily: "YekanBakh",
        borderRadius: "6px",
        margin: "0 0 0 6px",
        padding: "3px 0 0",
        boxShadow: "0 7px 15px #38465b36",
        transition: "all .3s",
    },
    Text: {
        padding: theme.spacing(1),
        margin: "auto"
    }
}));


function MusicPost6() {
    const classes = useStyles();

    const [player, setPlayer] = useState(false);
    const [toggle, setToggle] = React.useState(false);

    const Musics = [
        {
            cover: Image6,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Donbaledar%20128.mp3",
            singer: "احسان دریادل",
            name: "دنباله دار"
        },
        {
            cover: Image6,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Dordoone%20128.mp3",
            singer: "احسان دریادل",
            name: "دردونه"
        },
        {
            cover: Image6,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Mahi%20128.mp3",
            singer: "احسان دریادل",
            name: "ماهی"
        },
        {
            cover: Image6,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Talkhi%20128.mp3",
            singer: "احسان دریادل",
            name: "تلخی"
        }
    ];

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} gutterBottom variant="h6"
                            component="h2">
                    <b>تمام آهنگ های احسان دریادل 2020 / فول آلبوم کامل احسان دریادل MP3</b>
                </Typography>
                <Grid container>
                    <Grid style={{margin: "0 auto"}}>
                        <Grid container>
                             <span>
                                 <QueueMusicIcon className={classes.Icon}/>
                             </span>
                            <Typography style={{marginRight: "10px", fontFamily: "IRANSansWeb"}} color="error">
                                آهنگ های گوناگون
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid style={{margin: "0 auto"}}>
                        <Grid container>
                             <span>
                                 <HistoryIcon className={classes.Icon}/>
                             </span>
                            <Typography style={{marginRight: "10px"}} color="error">
                                16 اردیبهشت 99
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                <Typography className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} variant="body2"
                            color="textSecondary" component="p">
                    آهنگ های احسان دریادل با لینک مستقیم و پخش آنلاین
                    دانلود فول آلبوم احسان دریادل به صورت کامل و آپدیت 99 – 2020
                    مجموعه تمام آهنگ های احسان دریادل با لینک پرسرعت
                </Typography>
                <CardMedia
                    component="img"
                    alt="EHSAN DARYADEL"
                    className={classes.Image}
                    height="100%"
                    image={Image6}
                    title="EHSAN DARYADEL"
                />
                <Typography className={classes.Font} variant="body1">
                    دانلود در ادامه مطلب
                </Typography>
                <br/>
                <br/>
                <Typography className={classes.Color} variant="body1">
                    <b>
                        تمام آهنگ های احسان دریادل
                    </b>
                </Typography>
                <br/>
                <br/>
                <br/>
                <Container style={{direction: "ltr"}} maxWidth="xl">
                    <Grid container>
                        <Grid item lg={6}>
                            <Grid container>
                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Donbaledar%20%28320%29.mp3">
                                    <Button className={classes.Button} variant="contained" color="primary">
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            320
                                        </b>
                                    </Button>
                                </a>

                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Donbaledar%20128.mp3">
                                    <Button variant="contained" color="secondary" className={classes.Button}>
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            128
                                        </b>
                                    </Button>
                                </a>

                            </Grid>
                        </Grid>
                        <Grid style={{textAlign: "right"}} item lg={6}>
                            <Typography color="textPrimary" variant="body1">
                                <b>
                                    احسان دریادل - دنباله دار
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <Divider/>
                <br/>
                <Container style={{direction: "ltr"}} maxWidth="xl">
                    <Grid container>
                        <Grid item lg={6}>
                            <Grid container>
                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Talkhi%20128.mp3">
                                    <Button className={classes.Button} variant="contained" color="primary">
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            320
                                        </b>
                                    </Button>
                                </a>

                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Talkhi%20128.mp3">
                                    <Button variant="contained" color="secondary" className={classes.Button}>
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            128
                                        </b>
                                    </Button>
                                </a>

                            </Grid>
                        </Grid>
                        <Grid style={{textAlign: "right"}} item lg={6}>
                            <Typography color="textPrimary" variant="body1">
                                <b>
                                    احسان دریادل - دردونه
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <Divider/>
                <br/>
                <Container style={{direction: "ltr"}} maxWidth="xl">
                    <Grid container>
                        <Grid item lg={6}>
                            <Grid container>
                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Mahi%20%28320%29.mp3">
                                    <Button className={classes.Button} variant="contained" color="primary">
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            320
                                        </b>
                                    </Button>
                                </a>

                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Mahi%20128.mp3">
                                    <Button variant="contained" color="secondary" className={classes.Button}>
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            128
                                        </b>
                                    </Button>
                                </a>

                            </Grid>
                        </Grid>
                        <Grid style={{textAlign: "right"}} item lg={6}>
                            <Typography color="textPrimary" variant="body1">
                                <b>
                                    احسان دریادل - ماهی
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <Divider/>
                <br/>
                <Container style={{direction: "ltr"}} maxWidth="xl">
                    <Grid container>
                        <Grid item lg={6}>
                            <Grid container>
                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Mahi%20%28320%29.mp3">
                                    <Button className={classes.Button} variant="contained" color="primary">
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            320
                                        </b>
                                    </Button>
                                </a>

                                <a style={{textDecoration: "none"}}
                                   href="http://dl.nicmusic.net/nicmusic/023/073/Ehsan%20Daryadel%20-%20Mahi%20128.mp3">
                                    <Button variant="contained" color="secondary" className={classes.Button}>
                                        <InputAdornment>
                                            <GetAppOutlinedIcon/>
                                        </InputAdornment>
                                        <b>
                                            128
                                        </b>
                                    </Button>
                                </a>

                            </Grid>
                        </Grid>
                        <Grid style={{textAlign: "right"}} item lg={6}>
                            <Typography color="textPrimary" variant="body1">
                                <b>
                                    احسان دریادل - تلخی
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <Divider/>
                <br/>
                <Container style={{direction: "ltr"}} maxWidth="xl">
                    <Grid container>
                        <Grid item lg={6}>
                            <Grid container>
                                <Button className={classes.Button} color="primary" variant="contained" onClick={() => {
                                    setPlayer(!player);
                                    setToggle(!toggle);
                                }}>
                                    <InputAdornment position="start" style={{marginRight: "35px", marginTop: "7px"}}>
                                        <Transition
                                            items={toggle}
                                            from={{position: 'absolute', opacity: 0}}
                                            enter={{opacity: 1}}
                                            leave={{opacity: 0}}>
                                            {toggle =>
                                                toggle
                                                    ? props => <div style={props}><PauseCircleOutlineIcon
                                                        fontSize="large"/></div>
                                                    : props => <div style={props}><PlayCircleOutlineIcon
                                                        fontSize="large"/></div>
                                            }
                                        </Transition>
                                    </InputAdornment>
                                </Button>
                                {
                                    player &&
                                    <ReactJkMusicPlayer audioLists={Musics} autoPlay={true}
                                                        responsive={true} toggleMode={true}
                                                        spaceBar={true} showDownload={false}
                                                        mode="full" theme="light" remove={false}
                                                        defaultPosition={{top: 0, left: 0}}/>
                                }
                            </Grid>
                        </Grid>
                        <Grid style={{textAlign: "right"}} item lg={6}>
                            <Typography color="textPrimary" variant="body1">
                                <b>
                                    پخش آهنگ ها
                                </b>
                            </Typography>
                            <br/>
                            <Typography variant="body1" color="textPrimary">
                                برای انتخاب ترانه ها از دکمه لیست استفاده کنید
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </CardContent>
            <br/>
            <Divider/>
            <br/>
            <CardActions>
                <div className={classes.Text}>
                    <Typography>
                        <b>
                            با دوستانتان به اشتراک بگذارید:
                        </b>
                        <IconButton>
                            <TelegramIcon/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon/>
                        </IconButton>
                    </Typography>
                </div>
            </CardActions>
        </Card>
    );
}


export default MusicPost6