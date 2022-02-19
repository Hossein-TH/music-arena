import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import CategoryIcon from '@material-ui/icons/Category';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import InputAdornment from '@material-ui/core/InputAdornment';
import StarIcon from '@material-ui/icons/Star';
import TheatersIcon from '@material-ui/icons/Theaters';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AlbumIcon from '@material-ui/icons/Album';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        direction: "rtl",
        color: theme.palette.text.main,
        float: "right",

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    Box: {
        borderRadius: "7px",
        padding: theme.spacing(3),
    },
    Font: {
        fontFamily: "IRANSansWeb",
        textAlign: "right",
        marginRight: "10px"
    },
    Icon: {
        color: theme.palette.success.main
    },
    Margin: {
        marginTop: "50px",
        width: "100%",
        [theme.breakpoints.up('md')]: {
            marginTop: "0",
            width: "100%",
        },
    },
}));

function RightBox() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Hidden xsDown xlUp>
        <div className={classes.Margin}>
        <div className={classes.root}>
            <Box boxShadow={5} className={classes.Box}>
        <List>
            <ListItem button onClick={handleClick}>
                <InputAdornment position="end">
                    <CategoryIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                       <b>
                           دسته بندی
                       </b>
                    </Typography>
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={classes.Text} button component={Link} to="#">
                        <ListItemText>
                            <Typography className={classes.Font}>
                                آهنگ های گوناگون
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.Text} button component={Link} to="#">
                        <ListItemText>
                            <Typography  className={classes.Font}>
                                دانلود آهنگ بی کلام
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.Text} button component={Link} to="#">
                        <ListItemText>
                            <Typography  className={classes.Font}>
                                دانلود آهنگ جدید شاد
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.Text} button component={Link} to="#">
                        <ListItemText>
                            <Typography  className={classes.Font}>
                                آهنگ مازندرانی
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <FavoriteIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                           محبوب ترین ها
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <AlbumIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                           دانلود آلبوم جدید
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <StarIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                            هنرمندان
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <QueueMusicIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                            تک آهنگ ها
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <PlayForWorkIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                           دانلود نوحه و مداحی
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <SubscriptionsIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                            پلی لیست ها
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.Text} button component={Link} to="#">
                <InputAdornment position="end">
                    <TheatersIcon className={classes.Icon}/>
                </InputAdornment>
                <ListItemText>
                    <Typography className={classes.Font}>
                        <b>
                            موزیک ویدئوها
                        </b>
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
            </Box>
        </div>
        </div>
        </Hidden>
    );
}

export default RightBox