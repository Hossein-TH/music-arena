import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image2 from "../../Assets/img/Musics-2.jpg";
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
        color: theme.palette.text.main
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
        padding: theme.spacing(2)
    },
    Text: {
        padding: theme.spacing(1),
        margin: "auto"
    }
}));


function MusicPost1() {
    const classes = useStyles();

    const [player, setPlayer] = useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [text, setText] = useState("?????? ????????");

    const textHandler = () => {
        if (text === "?????? ????????") {
            setText("???????? ???????? ????????")
        } else {
            setText("?????? ????????")
        }
    };

    const Musics = [
        {
            cover: Image2,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/082/Ramin%20Bibak%20-%20Setare%20%28128%29.mp3",
            singer: "RAMIN BIBAK",

        }
    ];

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} gutterBottom variant="h6"
                            component="h2">
                    <b>?????????? ???? ?????? ?????????? : ???????????? ???????? ???????? ?????????? ???? ?????? ???? ?????? ??????????</b>
                </Typography>
                <Grid container>
                    <Grid style={{margin: "0 auto"}}>
                        <Grid container>
                             <span>
                                 <QueueMusicIcon className={classes.Icon}/>
                             </span>
                            <Typography style={{marginRight: "10px", fontFamily: "IRANSansWeb"}} color="error">
                                ???????? ?????? ?????????? ???? ??????
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid style={{margin: "0 auto"}}>
                        <Grid container>
                             <span>
                                 <HistoryIcon className={classes.Icon}/>
                             </span>
                            <Typography style={{marginRight: "10px"}} color="error">
                                16 ???????????????? 99
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
                <Typography className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} variant="body2"
                            color="textSecondary" component="p">
                    ?????????? ???????????? ???????? ???????? ?????????? ???? ??????
                    ???????????? ???????? ???????? ?????????? ???? ?????? ???? ?????? ?????????? ???? ?????????? ????????
                    ???? ???? ?????????? 320 ?? 128 ?? ???????? ???????????? ???? ???????? ??????????
                </Typography>
                <CardMedia
                    component="img"
                    alt="MAYSAM EBRAHIMI"
                    className={classes.Image}
                    height="100%"
                    image={Image2}
                    title="MAYSAM EBRAHIMI"
                />
                <Typography className={classes.Font} variant="body1">
                    ???????????? ???? ?????????? ????????
                </Typography>
                <Typography className={classes.Color} style={{marginTop: "15px"}} variant="body1">
                    <b>?????? ???????? ?????????? ???? ?????? ??????????</b>
                    <br/>
                    <br/>
                    <p className={classes.P}>
                        ???????????? ?????? ???????? ???? ???????????? ?????? ???????????? ?????? ????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ???? ???? ?????? ???????? ???????? ???? ???? ?? ?????? ???? ????????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ???? ???? ?????? ???????? ???????? ???? ???? ?? ?????? ???? ????????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???? ?????? ???????? ???? ???? ???? ???????? ?????? ?????? ?????????? ???? ???? ???? ???? ???????????? ?????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ?????????? ?????? ?? ?????? ?? ?????????? ?????? ?????? ???????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???? ?????? ???????? ???? ???? ???? ???????? ?????? ?????? ?????????? ???? ???? ???? ???? ???????????? ?????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ?????????? ?????? ?? ?????? ?? ?????????? ?????? ?????? ???????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ?????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ???????? ???????? ?????? ???? ?????? ?????? ????????????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???????? ?????????????? ???? ???????? ???? ???????? ???????? ???? ??????????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???????? ?????????????? ???? ???????? ???? ???????? ???????? ???? ??????????????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???? ?????? ???????? ???? ???? ???? ???????? ?????? ?????? ?????????? ???? ???? ???? ???? ???????????? ?????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ?????????? ?????? ?? ?????? ?? ?????????? ?????? ?????? ???????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???? ?????? ???????? ???? ???? ???? ???????? ?????? ?????? ?????????? ???? ???? ???? ???? ???????????? ?????????? ???????? ??????
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ???????? ???? ?????????? ?????? ?? ?????? ?? ?????????? ?????? ?????? ???????????? ???????? ??????
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a style={{textDecoration: "none"}}
                       href="http://dl.nicmusic.net/nicmusic/023/082/Ramin%20Bibak%20-%20Setare%20%28128%29.mp3">
                        <Button className={classes.Button} variant="contained" color="primary">
                            <InputAdornment>
                                <GetAppOutlinedIcon/>
                            </InputAdornment>
                            <b>
                                ???????????? ???????? ???? ?????????? 320
                            </b>
                        </Button>
                    </a>
                    <br/>
                    <br/>
                    <a style={{textDecoration: "none"}}
                       href="http://dl.nicmusic.net/nicmusic/023/082/Ramin%20Bibak%20-%20Setare%20%28128%29.mp3">
                        <Button className={classes.Button} variant="contained" color="secondary">
                            <InputAdornment>
                                <GetAppOutlinedIcon/>
                            </InputAdornment>
                            <b>
                                ???????????? ???????? ???? ?????????? 128
                            </b>
                        </Button>
                    </a>
                    <br/>
                    <br/>
                    <Button className={classes.Button} color="primary" variant="contained" onClick={() => {
                        setPlayer(!player);
                        setToggle(!toggle);
                        textHandler()
                    }}>
                        <InputAdornment position="end" style={{marginLeft: "30px", marginTop: "5px"}}>
                            <Transition
                                items={toggle}
                                from={{position: 'absolute', opacity: 0}}
                                enter={{opacity: 1}}
                                leave={{opacity: 0}}>
                                {toggle =>
                                    toggle
                                        ? props => <div style={props}><PauseCircleOutlineIcon/></div>
                                        : props => <div style={props}><PlayCircleOutlineIcon/></div>
                                }
                            </Transition>
                        </InputAdornment>
                        <Typography style={{marginRight: "10px"}}>
                            <b>
                                {text}
                            </b>
                        </Typography>
                    </Button>
                    {
                        player &&
                        <ReactJkMusicPlayer audioLists={Musics} autoPlay={true}
                                            responsive={true} toggleMode={true}
                                            spaceBar={true} showDownload={false}
                                            mode="full" theme="light" remove={false}
                                            defaultPosition={{top: 0, left: 0}}/>
                    }
                </Typography>
            </CardContent>
            <Divider/>
            <CardActions>
                <div className={classes.Text}>
                    <Typography>
                        <b>
                            ???? ?????????????????? ???? ???????????? ??????????????:
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

export default MusicPost1