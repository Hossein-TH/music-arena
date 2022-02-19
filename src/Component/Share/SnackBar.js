import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import InputAdornment from "@material-ui/core/InputAdornment";
import ShareIcon from '@material-ui/icons/Share';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    close: {
        padding: theme.spacing(0.5),
    },
}));

export default function Snackbars() {
    const queueRef = React.useRef([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);

    const processQueue = () => {
        if (queueRef.current.length > 0) {
            setMessageInfo(queueRef.current.shift());
            setOpen(true);
        }
    };

    const handleClick = (message) => () => {
        queueRef.current.push({
            message,
            key: new Date().getTime(),
        });

        if (open) {
            setOpen(false);
        } else {
            processQueue();
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        processQueue();
    };

    const classes = useStyles();
    return (
        <>
            <Button onClick={handleClick('Message A')} size="small" color="secondary">
                <InputAdornment position="end">
                    <ShareIcon fontSize="default"/>
                </InputAdornment>
                <Typography variant="h6">
                    <b>اشتراک گذاری</b>
                </Typography>
            </Button>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={3500}
                onClose={handleClose}
                onExited={handleExited}
            >
                <MuiAlert severity="error" action={
                    <React.Fragment>
                        <IconButton
                            style={{marginRight: "15px"}}
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={handleClose}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </React.Fragment>
                }>
                   <Typography style={{marginRight: "5px", marginTop: "-4px"}}>
                       <b>
                           این قابلیت فعلا در دسترس نیست
                       </b>
                   </Typography>
                </MuiAlert>
            </Snackbar>
        </>
    );
}