import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image6 from "../../Assets/img/Musics-6.jpg";
import ForwardIcon from '@material-ui/icons/Forward';
import HistoryIcon from '@material-ui/icons/History';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import Snackbars from "../Share/SnackBar";


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
    Padding: {
        padding: theme.spacing(2)
    },
    Icon: {
        color: theme.palette.success.main
    },
    Text: {
        color: theme.palette.text.main,
        fontFamily: "IRANSansWeb"
    },
}));


function Card6() {
    const classes = useStyles();

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
                            <Typography style={{marginRight: "10px",fontFamily: "IRANSansWeb"}} color="error">
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
                <Typography  className={classes.Padding} style={{fontFamily: "IRANSansWeb"}} variant="body2" color="textSecondary" component="p">
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
                <Typography variant="body1" className={classes.Color}>
                    دانلود در ادامه مطلب
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{margin: "0 auto"}}>
                    <Button component={Link} to="/Post6" size="small" color="primary">
                        <InputAdornment position="end">
                            <ForwardIcon fontSize="default"/>
                        </InputAdornment>
                        <Typography variant="h6">
                            <b>ادامه مطلب</b>
                        </Typography>
                    </Button>
                    <Snackbars/>
                </div>
            </CardActions>
        </Card>
    );
}

export default Card6