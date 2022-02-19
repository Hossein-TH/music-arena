import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image1 from "../../Assets/img/Musics-1.jpg";
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
            cover: Image1,
            musicSrc: "http://dl.nicmusic.net/nicmusic/023/082/Meysam%20Ebrahimi%20-%20Ki%20Mese%20Mane%20%28Remix%29%20-%20128.mp3",
            singer: "MAYSAM EBRAHIMI",

        }
    ];

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} gutterBottom variant="h6"
                            component="h2">
                    <b> دانلود ریمیکس آهنگ میثم ابراهیمی به نام کی مثه منه</b>
                </Typography>
                <Grid container>
                    <Grid style={{margin: "0 auto"}}>
                        <Grid container>
                             <span>
                                 <QueueMusicIcon className={classes.Icon}/>
                             </span>
                            <Typography style={{marginRight: "10px", fontFamily: "IRANSansWeb"}} color="error">
                                دانلود آهنگ میثم ابراهیمی
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
                    کی مثه منه دانلود آهنگ جدید میثم ابراهیمی
                    دانلود آهنگ جدید میثم ابراهیمی به نام کی مثه منه با کیفیت بالا
                    با دو کیفیت 320 ، 128 و لینک مستقیم از عرصه موزیک
                </Typography>
                <CardMedia
                    component="img"
                    alt="MAYSAM EBRAHIMI"
                    className={classes.Image}
                    height="100%"
                    image={Image1}
                    title="MAYSAM EBRAHIMI"
                />
                <Typography className={classes.Font} variant="body1">
                    دانلود در ادامه مطلب
                </Typography>
                <Typography className={classes.Color} style={{marginTop: "15px"}} variant="body1">
                    <b> متن آهنگ میثم ابراهیمی کی مثه منه</b>
                    <br/>
                    <br/>
                    <p className={classes.P}>
                        کی مثه منه دلش برات پر بکشه جلو چشات بچه بشم نیادش اصلا به چشت
                    </p>
                    <br/>
                    <p className={classes.P}>
                        شدم بال و پر تو من بگیری بالا سر تو من کیف کنم به همه بگم من برا توام
                    </p>
                    <br/>
                    <p className={classes.P}>
                        گفتی بذار صدتو حله نباشه غمتو هر کاری کردم که فقط بره بالا پرچم تو
                    </p>
                    <br/>
                    <p className={classes.P}>
                        کی مثه منه دلش برات پر بکشه جلو چشات بچه بشم نیادش اصلا به چشت
                    </p>
                    <br/>
                    <p className={classes.P}>
                        ♫♫♫
                    </p>
                    <br/>
                    <p className={classes.P}>
                        من هر چی که بوده رو از وقتی که تو در رو بستی بخشیدم
                    </p>
                    <br/>
                    <p className={classes.P}>
                        من توئه دیوونه رو انقدر دوست دارمو تازه فهمیدم
                    </p>
                    <br/>
                    <p className={classes.P}>
                        کاشکی یادت بمونه این آدرس و نشونه خواستی برگردی
                    </p>
                    <br/>
                    <p className={classes.P}>
                        به هیچکی نمیگم که رفتی و رابطت رو با من قطع کردی
                    </p>
                    <br/>
                    <p className={classes.P}>
                        کی مثه منه دلش برات پر بکشه جلو چشات بچه بشم نیادش اصلا به چشت
                    </p>
                    <br/>
                    <p className={classes.P}>
                        کی مثه تو ته بی معرفت میشه که از رو همه چی رد میشه که دوستیمون این شکلی بشه
                    </p>
                    <br/>
                    <p className={classes.P}>
                        کی مثه منه دلش برات پر بکشه جلو چشات بچه بشم نیادش اصلا به چشت
                    </p>
                    <br/>
                    <p className={classes.P}>
                        کی مثه تو ته بی معرفت میشه که از رو همه چی رد میشه که دوستیمون این شکلی بشه
                    </p>
                    <br/>
                    <br/>
                    <br/>
                </Typography>
                <a style={{textDecoration: "none"}}
                   href="http://dl.nicmusic.net/nicmusic/023/082/Meysam%20Ebrahimi%20-%20Ki%20Mese%20Mane%20%28Remix%29%20-%20128.mp3">
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
                   href="http://dl.nicmusic.net/nicmusic/023/082/Meysam%20Ebrahimi%20-%20Ki%20Mese%20Mane%20%28Remix%29%20-%20128.mp3">
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
                    textHandler();
                    setToggle(!toggle);
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

export default MusicPost1