import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import background from "../../Assets/img/AboutHeader.png"


const useStyle = makeStyles(theme => ({
    Background: {
        background: "url("+ background +")",
        height: "380px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        marginTop: "30px"
    },
    Text1: {
        color: "#fff",
        marginTop: "120px",
        textAlign: "center"
    },
    Text2: {
        color: "#fff",
        textAlign: "center"
    }
}));

function AboutHeader() {
    const classes = useStyle();
    return (
        <div className={classes.Background}>
            <Container>
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <Typography variant="h4" className={classes.Text1}>
                            <b>داستان شروع یک رویا</b>
                        </Typography>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <Typography variant="h5" className={classes.Text2}>
                            <i><b>در این صفحه شما با بخشی از رویای عرصه موزیک و نحوه شکل‌گیری عرصه موزیک آشنا خواهید شد</b></i>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutHeader