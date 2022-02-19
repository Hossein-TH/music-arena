import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import PrimaryAppBar from "./AppBar";
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
        root: {
            position: 'fixed',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
            zIndex: 1100
        },
        Fab: {
            background: theme.palette.background.paper
        },
    }))
;

function ScrollTop(props) {
    const {children, window} = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window.scrollTo(0, 0) : undefined,
        disableHysteresis: true,
        threshold: 300,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

export default function AppBarScrollTop(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar>
                <PrimaryAppBar/>
            </AppBar>
            <Toolbar id="back-to-top-anchor"/>
            <ScrollTop {...props}>
                    <Fab className={classes.Fab} focusRipple centerRipple size="large">
                        <NavigationIcon color="secondary"/>
                    </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
