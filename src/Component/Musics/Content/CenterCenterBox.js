import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {Link} from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import Hidden from '@material-ui/core/Hidden';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Grid from '@material-ui/core/Grid';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        direction: "rtl",
        textAlign: "center",
        marginTop: "50px",
        color: theme.palette.text.main
    },
    Box: {
        padding: theme.spacing(2),
        borderRadius: "7px",
    },
    Font: {
        fontFamily: "IRANSansWeb",
    },
    Text: {
        textAlign: "right",
    },
    Text2: {
        padding: theme.spacing(1),
        textAlign: "right",
        marginRight: "15px"
    },
    Icon: {
        color: theme.palette.success.main
    },
}));

function CenterCenterBox() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Box boxShadow={5} className={classes.Box}>
                <Grid container>
                    <Grid item lg={6}>
                    <List>
                        <ListItem className={classes.Text} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                        آهنگ های پرطرفدار ایرانی 99
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                        آهنگ شاد ایرانی 99
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                        آهنگ های بی کلام غمگین
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                        پرطرفدارترین آهگ های مارحی
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                       دانلود مداحی جدید محرم
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                    </List>
                    </Grid>
                    <Hidden xsDown xlUp>
                    <Divider orientation="vertical" flexItem/>
                    </Hidden>
                    <Grid item lg={5}>
                    <List>
                        <ListItem className={classes.Text2} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                        100 آهنگ برتر ایرانی
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text2} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                        آهنگ بی کلام ملایم
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text2} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                       آهنگ های ورزشی جدید
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text2} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                       آهنگ های منتخب ماهانه
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                        <ListItem className={classes.Text2} button component={Link} to="#">
                            <ListItemText>
                                <Typography className={classes.Font}>
                                    <b>
                                       آهنگ غمگین پاپ ایرانی
                                    </b>
                                </Typography>
                            </ListItemText>
                            <InputAdornment position="start">
                                <GetAppRoundedIcon className={classes.Icon}/>
                            </InputAdornment>
                        </ListItem>
                    </List>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default CenterCenterBox