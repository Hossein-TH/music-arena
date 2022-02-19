import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Icon1 from "../../Assets/img/AboutContent-1.png";
import Icon2 from "../../Assets/img/AboutContent-2.png";
import Icon3 from "../../Assets/img/AboutContent-3.png";
import Icon4 from "../../Assets/img/AboutContent-4.png";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.main,
        padding: theme.spacing(6),
        direction: "rtl",
        fontFamily: "IRANSansWeb"
    },
    Margin: {
        marginTop: "10px",
        fontFamily: "IRANSansWeb"
    },
    SubMargin: {
        marginTop: "25px",
        fontFamily: "IRANSansWeb"
    },
    Image: {
        width: "200px",
        height: "200px"
    },
    Photo: {
        width: "200px",
        height: "200px",
        borderRadius: "20px"
    },
    sectionMobile: {
        textAlign: "center",
        [theme.breakpoints.up('md')]: {
            textAlign: "right",
        },
    },
}));

function AboutContent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid>
                        <div className={classes.sectionMobile}>
                            <div>
                                <Typography variant="h5">
                                    <b>داستان شکل‌گیری عرصه موزیک</b>
                                </Typography>
                                <Typography className={classes.Margin}>
                                    شاید شما از قبل عرصه موزیک را به عنوان یک مرجع موسیقی آنلاین برای موسیقی
                                    بشناسید . اما ممکن است با داستان شکل‌گیری عرصه موزیک آشنا
                                    نباشید . داستان عرصه موزیک در آنجایی شکل گرفت که من یعنی حسین تقی پور علاقمندی شدیدی
                                    به موسیقی داشته‌ام اما متاسفانه هیچ مرجع
                                    آنلاین یا دسته کم موسیقی به‌روزی برای آنها به زبان فارسی در وب فارسی وجود نداشت . از
                                    این رو تصمیم گرفتم در قالب یک وبسایت تحت عنوان وبسایت موسیقی عرصه موزیک سعی کنم به
                                    کاربران
                                    ایرانی کمک کنم تا بتوانند به موسیقی های به روز دسترسی داشته باشند، که به آنها
                                    کمک میکنند سریع‌تر به موسیقی مورد نظر خود برسند.
                                </Typography>
                                <Typography className={classes.Margin}>
                                    داستان عرصه موزیک در اردیبهشت 1399 شکل گرفت است و تا به امروز که در اینجا هستیم تمام تلاش
                                    خود را کرده‌ایم تا بتوانیم به کاربران ایرانی و علاقمند کمک کنیم تا بتوانند به موسیقی
                                    های جدید و
                                    ترنه های به‌روز جهانی را دسترسی داشته باشند
                                </Typography>
                            </div>
                            <Divider className={classes.Margin}/>
                            <div>
                                <Typography variant="h5" className={classes.Margin}>
                                    <b>بخشی از فعالیت های عرصه موزیک</b>
                                </Typography>
                                <Grid container>
                                    <Grid item lg={2} className={classes.SubMargin}>
                                        <img alt="Computer Arena" src={Icon1} className={classes.Image}/>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography variant="h6" className={classes.SubMargin}>
                                            مرجع انلاین موسیقی
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            مهم ترین بخشی که عرصه موزیک بر اساس آن بنا نهادِ شد است ، بخش پخش آنلاین موسیقی
                                            سایت
                                            است . که در این بخش ما سعی داریم، جدیدترین موزیک های ایران و جهان را برای
                                            فارسی زبانان فراهم کنیم.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={2} className={classes.SubMargin}>
                                        <img alt="Computer Arena" src={Icon2} className={classes.Image}/>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography variant="h6" className={classes.SubMargin}>
                                            دسترسی به موسیقی
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            بخش مهمی از مسیر یادگیری یک زبان، بخش حل کردن مشکلات و صحبت با برنامه نویسان
                                            دیگر برای بررسی دیدگاه آنها در آن زبان یا ابزار به خصوص است. ما در عرصه موزیک سعی
                                            کرده‌ایم فضایی بین برنامه نویسان حرفه‌ای و افرادی که به تازگی شروع به
                                            یادگیری کرده‌اند را کم کنیم . تا با این کار بتواینم یک جامع از برنامه نویسان
                                            ایرانی را گردد هم آوریم .
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            شما در بخش بحث و گفتگو عرصه موزیک میتوانید سوالات مختلف خود را در حوزه‌های مختلف
                                            مطرح کنید و به بحث و گفتگو برای حل مشکل یا درک مسئله مشغول شوید .
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={2} className={classes.SubMargin}>
                                        <img alt="Computer Arena" src={Icon3} className={classes.Image}/>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography variant="h6" className={classes.SubMargin}>
                                          مقالاتی درباره موسیقی
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            مقالات متنی از دیر باز بخش مهمی از سطوح کسب دانش را تشکل داده اند. ما در
                                            عرصه موزیک از این بخش صرفه نظر نکرده‌ایم و به‌ شکل جدی سعی در ارائه مقالات به‌روز
                                            و در سطح جهانی کرده‌ایم به شکلی که از شروع کار عرصه موزیک تا به امروز هزاران مقاله
                                            آموزشی در عناوین مختلف را به زبان فارسی در وبسایت عرصه موزیک قرار داده‌ایم تا
                                            فارسی زبانان عزیز بتوانند با خوانندن این نوع مقالات به میزان دانش خود، هر
                                            چند کم، مقداری بی افزایند .
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            ما در عرصه موزیک سعی کرده‌ایم این مقالان را در طیف بسیار متنوع، از جمله
                                            تجربه‌کاربری ، توسعه فردی و تا دنیای بزرگ برنامه‌نویسی در دسترس فارسی زبانان
                                            عزیز قرار دهیم تا هر شخصی با هم سلیقه‌ای بتواند از مقالات عرصه موزیک بهرمند شود.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={2} className={classes.SubMargin}>
                                        <img alt="Computer Arena" src={Icon4} className={classes.Image}/>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography variant="h6" className={classes.SubMargin}>
                                            پادکست های عرصه موزیک
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            در کنار ویدیو و متن بخش دیگری هم وجود دارد که بسیار مهم است و آن هم صداست .
                                            فواید استفاده از پادکست بر کسی پوشیده نیست، شما با استفاده از پادکست
                                            میتوانید از زمان های که تنها قادر به گوش دادن صدا هستید نه کار دیگر، به
                                            بهترین نوع ممکن استفاده کنید و به چیزی گوش دهید تا بتوانید چیز جدیدی را
                                            فرابگیرید.
                                        </Typography>
                                        <Typography className={classes.Margin}>
                                            ما در عرصه موزیک بخشی تحت عنوان عرصه موزیک‌کست را راه اندازی کرده‌ایم تا یک سری از
                                            دیدگاه های شخصی و همچنین یک سری از مسائل مهمی که می شود تنها با صدا انتقال
                                            پیدا کرد را به شما بگوییم . به این شکل شما میتوانید از تمام زمان خود، حتی آن
                                            زمانی که پشت فرمان ماشین خود هستید استفاده کنید تا چیز جدیدی فرابگیرید
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutContent