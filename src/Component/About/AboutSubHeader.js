import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper,
        direction: "rtl"
    },
    Text:{
        color: theme.palette.text.secondary,
        padding: theme.spacing(3)
    },
    sectionMobile: {
        textAlign: "center",
        [theme.breakpoints.up('md')]: {
            textAlign: "right",
        },
    },
}));

function AboutSubHeader() {
    const classes = useStyle();
    return(
        <div className={classes.root}>
            <div className={classes.sectionMobile}>
                <Container maxWidth="xl">
                    <Grid>
                        <Typography variant="h5" className={classes.Text}>
                            <b>باور ما اینست که کاربران ایرانی لایق بهترین ها هستند</b>
                        </Typography>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default AboutSubHeader