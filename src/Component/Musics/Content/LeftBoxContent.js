import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        direction: "rtl",
        color: theme.palette.text.main
    },
    Text: {
        textAlign: "right",
    },
    Font: {
        fontFamily: "IRANSansWeb"
    },
}));


function LeftBoxContent() {
    const classes = useStyle();
    return (
            <div className={classes.root}>
                    <div>
                        <List>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography className={classes.Font}>
                                        آهنگ های آرون افشار
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های احسان خواجه امیری
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های اشوان
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های افشین آذری
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های امو بند
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های امید جهان
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های امید حاجیلی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های امیر عباس گلاب
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های امیر عظیمی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های امین رستمی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های بابک جهانبخش
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های بنیامین بهادری
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های بهنام بانی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های حامد برادران
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های حامد زمانی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های حامد همایون
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های حجت اشرف زاده
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های حمید عسکری
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های حمید هیراد
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های رضا صادقی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های رضا بهرام
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های سالار عقیلی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های سامان جلیلی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های سیروان خسروی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های شهاب مظفری
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های علی عبدالمالکی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        هنگ های علیرضا طلیسچی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های علی زند وکیلی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های فرزاد فرزین
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های ماکان بند
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های مجید خراطها
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های محسن ابراهیم زاده
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های محسن چاوشی
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های محسن یگانه
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.Text} button component={Link} to="#">
                                <ListItemText>
                                    <Typography  className={classes.Font}>
                                        آهنگ های محمد علیزاده
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </div>
            </div>
    )
}

export default LeftBoxContent