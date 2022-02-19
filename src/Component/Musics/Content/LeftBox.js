import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LeftBoxContent from "./LeftBoxContent";
import Hidden from '@material-ui/core/Hidden';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        direction: "rtl",
        color: theme.palette.text.main
    },
    Box: {
        padding: theme.spacing(1),
        borderRadius: "7px",
    },
    Text: {
        textAlign: "right",
    },
    Font: {
      fontFamily: "IRANSansWeb"
    },
    Width: {
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: "80%",
        },
    },
    sectionMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'inline',
        },
    },
}));


function LeftBox() {
    const classes = useStyle();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.Width}>
        <div className={classes.root}>
            <Box boxShadow={5} className={classes.Box}>
                <div className={classes.sectionDesktop}>
                    <Typography>
                        <b>
                            هنرمندان
                        </b>
                    </Typography>
                </div>
                <Hidden xsDown xlUp>
                <div>
                    <LeftBoxContent/>
                </div>
                </Hidden>
                <div className={classes.sectionMobile}>
                    <List>
                        <ListItem button onClick={handleClick}>
                                <ListItemText className={classes.Text}>
                                    <Typography className={classes.Font}>
                                        <b>
                                           هنرمندان
                                        </b>
                                    </Typography>
                                </ListItemText>
                                {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <LeftBoxContent/>
                        </Collapse>
                    </List>
                </div>
            </Box>
            </div>
        </div>
    )
}

export default LeftBox