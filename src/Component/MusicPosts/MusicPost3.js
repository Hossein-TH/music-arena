import React, { useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image3 from "../../Assets/img/Musics-3.jpg";
import HistoryIcon from '@material-ui/icons/History';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Divider from '@material-ui/core/Divider';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {Transition} from "react-spring/renderprops-universal";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

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


function MusicPost3() {
    const classes = useStyles();

    const [player, setPlayer] = useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [text, setText] = useState("پخش آهنگ");

    const textHandler = () => {
        if (text === "پخش آهنگ") {
            setText("توقف کردن آهنگ")
        } else {
            setText("پخش آهنگ")
        }
    };

    const Musics = [
        {
            cover: Image3,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/075/Ali%20Lohrasbi%20-%20Soorat%20%28128%29.mp3",
            singer: "Ali LOHRASBI",

        }
    ];

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} gutterBottom variant="h6"
                            component="h2">
                    <b>علی لهراسبی صورت : دانلود آهنگ جدید علی لهراسبی به نام صورته</b>
                </Typography>
                <Grid container>
                    <Grid style={{margin: "0 auto"}}>
                        <Grid container>
                             <span>
                                 <QueueMusicIcon className={classes.Icon}/>
                             </span>
                            <Typography style={{marginRight: "10px", fontFamily: "IRANSansWeb"}} color="error">
                                آهنگ های علی لهراسبی
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
                    صورت دانلود آهنگ جدید علی لهراسبی
                    دانلود آهنگ جدید علی لهراسبی به نام صورت با کیفیت بالا
                    با دو کیفیت 320 ، 128 و لینک مستقیم از عرصه موزیک
                </Typography>
                <CardMedia
                    component="img"
                    alt="Ali LOHRASBI"
                    className={classes.Image}
                    height="100%"
                    image={Image3}
                    title="Ali LOHRASBI"
                />
                <Typography className={classes.Font} variant="body1">
                    دانلود در ادامه مطلب
                </Typography>
                <Typography className={classes.Color} style={{marginTop: "15px"}} variant="body1">
                    <b>متن آهنگ علی لهراسبی صورته</b>
                    <br/>
                    <br/>
                    <p className={classes.P}>
                        چقد این صورت عزیزه عزیزه برام من میمیرم تو میخندی یه ریزه برام
                    </p>
                    <br/>
                    <p className={classes.P}>
                        من نمیخوام از این حالت با هبچی درام
                    </p>
                    <br/>
                    <p className={classes.P}>
                        منو اینجوری ندیده ندیده کسی تو دقیقا تو همونجا که باید میرسی
                    </p>
                    <br/>
                    <p className={classes.P}>
                        فرقش این میشه که میکشیم تو دلواپسی
                    </p>
                    <br/>
                    <p className={classes.P}>
                        اگه دستم بهت برسه دیگه واسم هیچکی مثه تو قشنگ نیست عشق منی دیوونه
                    </p>
                    <br/>
                    <p className={classes.P}>
                        چقد این چشمات عسله دیوونم کردن یه سره کسی از تو قلب تو چی میدونه
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای چه چشمایی اسمم رو نوشت جایی جایی که توی قلبت همیشه آرزوم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای دلم خواستش دیوونه شدم راستش دیوونه ی اون آدمی که اون شب رو به روم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ♫♫♫
                    </p>
                    <br/>
                    <p className={classes.P}>
                        من که آدمش نیودم این عشق دیگه چی بود چشم بهم زدم دلم باهاش خیلی یکی بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        من دیگه دیوونم بی تو نمیتونم
                    </p>
                    <br/>
                    <p className={classes.P}>
                        دیگه نمیشد بدون چشمای تو سر کرد من خیلی دوست دارم دیوونه آخه برگرد
                    </p>
                    <br/>
                    <p className={classes.P}>
                        من دیگه دیوونم بی تو نمیتونم
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای چه چشمایی اسمم رو نوشت جایی جایی که توی قلبت همیشه آرزوم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای دلم خواستش دیوونه شدم راستش دیوونه ی اون آدمی که اون شب رو به روم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای چه چشمایی اسمم رو نوشت جایی جایی که توی قلبت همیشه آرزوم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای دلم خواستش دیوونه شدم راستش دیوونه ی اون آدمی که اون شب رو به روم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای چه چشمایی جایی که توی قلبت همیشه آرزوم بود
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ای وای دلم خواستش دیوونه ی اون آدمی که اون شب رو به روم بود
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a style={{textDecoration: "none"}}
                       href="http://dl.nicmusic.net/nicmusic/023/075/Ali%20Lohrasbi%20-%20Soorat%20%28128%29.mp3">
                        <Button className={classes.Button} variant="contained" color="primary">
                            <InputAdornment>
                                <GetAppOutlinedIcon/>
                            </InputAdornment>
                            <b>
                                دانلود آهنگ با کیفیت 320
                            </b>
                        </Button>
                    </a>
                    <br/>
                    <br/>
                    <a style={{textDecoration: "none"}}
                       href="http://dl.nicmusic.net/nicmusic/023/075/Ali%20Lohrasbi%20-%20Soorat%20%28128%29.mp3">
                        <Button className={classes.Button} variant="contained" color="secondary">
                            <InputAdornment>
                                <GetAppOutlinedIcon/>
                            </InputAdornment>
                            <b>
                                دانلود آهنگ با کیفیت 128
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

export default MusicPost3