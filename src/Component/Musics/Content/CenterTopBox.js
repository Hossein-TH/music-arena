import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        direction: "rtl",
        color: theme.palette.text.main,
        textAlign: "center",
    },
    Box: {
        padding: theme.spacing(5),
        borderRadius: "7px",
    },
    Font: {
        fontFamily: "IRANSansWeb"
    },
    Margin: {
        marginTop: "50px",
        [theme.breakpoints.up('md')]: {
            marginTop: "0",
        },
    },
}));

function CenterTopBox() {
    const classes =useStyle();
    return(
        <div className={classes.Margin}>
        <div className={classes.root}>
            <Box boxShadow={5} className={classes.Box}>
                <Typography className={classes.Font} variant="h5">
                    <b>
                        دانلود آهنگ جدید
                    </b>
                </Typography>
                <Typography style={{marginTop: "10px"}} className={classes.Font}>
                    عرصه موزیک در راستای قوانین کشور فعالیت می کند و فقط آثار مجاز خوانندگان داخلی را ارائه میدهد.
                    این سایت در ستاد سازماندهی سایت های ایرانی به ثبت رسیده است.
                </Typography>
            </Box>
        </div>
        </div>
    )
}

export default CenterTopBox