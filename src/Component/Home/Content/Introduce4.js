import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import image from "../../../Assets/img/Home-6.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
        minHeight: "91.5vh",
        backgroundSize: "cover",
        padding: theme.spacing(8)
    },
    Image: {
        width: "110%",
    },
    Text: {
        textAlign: "right",
        color: theme.palette.text.primary,
        marginRight: "15px"
    },
    Button: {
        background: "linear-gradient(266deg, rgba(255,69,120,1) 0%, rgba(240,31,80,1) 100%)",
        color: theme.palette.text.primary,
        borderRadius: "100px",
        padding: "10px 20px",
        textAlign: "right",
        textDecoration: "none",
        marginTop: "25px",
        marginBottom: "20px"
    },
    Center: {
        marginTop: "15%"
    },
    Margin: {
        marginTop: "15px"
    }
}));

function Introduce4() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={6} className={classes.Center}>
                        <div className={classes.Text}>
                            <Typography>
                                <b>ارسال درخواست برای موزیک جدید</b>
                            </Typography>
                            <div className={classes.Margin}>
                                <Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">
                                    عرصه موزیک  این امکان رو به شما داده که بتونید نیاز خودتون رو بصورت پیشنهاد با تیم
                                    تولید محتوا در میون بذارید تا بصورت قالب جدید به سایت اضافه بشه. شما حتی می تونید
                                    قالب اختصاصی خودتون رو داشته باشید و فقط خودتون بتونید باهاش ویدیو بسازید. پیشنهادات
                                    شما توسط کارشناسان بررسی میشه و در صورت هماهنگی با سیاست های کاری در تقویم محتوایی
                                    قرار می گیره. اینطوری می تونید قالب هایی که دوست دارید رو در ویدی وود ببینید.
                                </Typography>
                            </div>
                            <Button component={Link} to="/Musics" className={classes.Button}>
                                <Typography>
                                    <b>همین حالا گوش کن</b>
                                </Typography>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Grid id="Animation">
                            <img alt="Logo" className={classes.Image} src={image}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Introduce4