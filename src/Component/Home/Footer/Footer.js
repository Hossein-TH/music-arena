import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Logo from "../../../Assets/img/Logo.png";

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.Home,
        minHeight: "81.5vh",
        backgroundSize: "cover",
        direction: "rtl",
        padding: theme.spacing(5),
        color: theme.palette.text.HomeText
    },
    sectionMobile: {
        marginRight: "0px",
        [theme.breakpoints.up('md')]: {
            marginRight: "150px"
        },
    },
    Color1: {
        color: "#00a9a7"
    },
    Color2: {
        color: theme.palette.text.HomeText
    }
}));

function Footer() {
    const classes = useStyle();
    return(
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container className={classes.sectionMobile}>
                    <Grid item xs={12} lg={4}>
                        <Typography variant="h6" className={classes.title}>
                            <b>اطلاعات</b>
                        </Typography>
                        <div>
                            <List>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography style={{fontFamily: "IRANSansWeb"}} variant="body1">شرایط و ظوابط</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1"> حریم شخصی</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1"> درباره عرصه موزیک</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography style={{fontFamily: "IRANSansWeb"}} variant="body1">ارتباط با ما</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">اطلاعات تماس</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography variant="h6" className={classes.title}>
                            <b>دسته بندی ها</b>
                        </Typography>
                        <div>
                            <List>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography style={{fontFamily: "IRANSansWeb"}} variant="body1">شاد</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">پاپ</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">غم</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">رپ</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography style={{fontFamily: "IRANSansWeb"}} variant="body1">آذری</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography variant="h6" className={classes.title}>
                            <b>مطالب عمومی</b>
                        </Typography>
                        <div>
                            <List>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">جدیدترین ها</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">بهترین ها</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">محبوب</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    <Button component={Link} to="#">
                                        <ListItemIcon className={classes.Color1}>
                                            <ArrowLeftIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.Color2}
                                            primary={<Typography  style={{fontFamily: "IRANSansWeb"}} variant="body1">پر بازدید</Typography>}
                                        />
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Grid container>
                <div style={{margin: "0 auto", marginTop: "50px"}}>
                    <img alt="Music_Arena" src={Logo}/>
                </div>
            </Grid>
        </div>
    )
}

export default Footer