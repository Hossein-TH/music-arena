import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        direction: "rtl",
        textAlign: "center",
        padding: theme.spacing(4),
        marginTop: "20px",
        color: theme.palette.text.main
    },
    menuButton: {
        marginRight: theme.spacing(.5),
    },
    title: {
        textAlign: "center"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',

        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    Icon: {
        color: theme.palette.success.main
    }
}));

function MusicsFooter() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} color="inherit" variant="outlined" position="static">
               <Typography style={{fontFamily: "IRANSansWeb"}} variant="h6">
                   <b>تمامی حقوق وبسایت و محتوای ارائه شده متعلق به مجموعه عرصه موزیک بوده و حق کپی رایت محفوظ است. 1399</b>
               </Typography>
            </AppBar>
        </div>
    );
}

export default MusicsFooter
