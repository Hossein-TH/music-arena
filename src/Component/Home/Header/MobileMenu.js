import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import image from "../../../Assets/img/side-back.svg"
import {AppContext} from "../../../Context/AppContext";
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 260,
    },
    Header: {
        textAlign: "center",
    },
    MenuIcon: {

        marginTop: "25px",
        color: theme.palette.text.primary
    },
    Center: {
        textAlign: "center",
        color: theme.palette.text.primary
    },
    Footer: {
        position: "absolute",
        bottom: "10px"
    },
    Image: {
        minHeight: "100vh",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",

    },
    Background: {
        background: theme.palette.background.paper,
    },
}));

export default function MobileMenu() {

    const classes = useStyles();
    const Context = useContext(AppContext);

    const [state, setState] = React.useState({
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            className={classes.list}

        >
            <section id="Header" className={classes.Header}>
                <Typography variant="h6" color="textSecondary">
                    <b>عرصه موزیک</b>
                </Typography>
                <Typography variant="caption" color="textPrimary">
                    ورژن 1.0.0
                </Typography>
            </section>
            <Divider/>
            <section id="Main">
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemText className={classes.Center} primary={<b>صفحه اصلی</b>}/>
                        <ListItemIcon>
                            <HomeRoundedIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem className={classes.Margin} button component={Link} to="/Login">
                        <ListItemText className={classes.Center} primary={<b>حساب کاربری</b>}/>
                        <ListItemIcon>
                            <FingerprintIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem className={classes.Margin} button component={Link} to="/Musics">
                        <ListItemText className={classes.Center} primary={<b>آرشیو موزیک</b>}/>
                        <ListItemIcon>
                            <AssignmentIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem className={classes.Margin} button component={Link} to="/About">
                        <ListItemText className={classes.Center} primary={<b>درباره ما</b>}/>
                        <ListItemIcon>
                            <InfoRoundedIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem onClick={() => {
                        Context.dispatch({
                            type: "changeTheme",
                            theme: Context.state.theme === 'light' ? 'dark' : 'light'
                        })
                    }} className={classes.Margin} button>
                        <ListItemText  className={classes.Center} primary={(<b>{Context.state.theme === 'light' ? 'تم تاریک' : 'تم روشن'}</b>)}/>
                        <ListItemIcon>
                            <Brightness4RoundedIcon/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </section>
            <section className={classes.Footer} id="Footer">
                <Typography color="textSecondary" style={{textAlign: "center"}}>
                    تمام حقوق این سایت مربوط به عرصه موزیک می باشد
                </Typography>
            </section>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuRoundedIcon className={classes.MenuIcon} fontSize="large"
                                     onClick={toggleDrawer(anchor, true)}>{anchor}</MenuRoundedIcon>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
