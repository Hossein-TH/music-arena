import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MobileMenu from "../../Home/Header/MobileMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        direction: "rtl",
        padding: theme.spacing(2),
        background: theme.palette.background.paper
    },
    menuButton: {
        marginLeft: "10px"
    },
    Input: {
        background: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        fontFamily: "IRANSansWeb"
    },
    title: {
        padding: theme.spacing(3),
        color: theme.palette.warning.main
    },
    Icon: {
        color: theme.palette.success.main
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    Margin: {
        marginTop: "15px"
    }
}));


const SearchBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3} className={classes.sectionMobile}>
                        <MobileMenu/>
                    </Grid>
                    <Grid item lg={6} xs={9} className={classes.sectionMobile}>
                        <Typography  style={{textAlign: 'center'}} variant="h5" className={classes.title}>
                            <b>عرصه موزیک</b>
                        </Typography>
                    </Grid>
                    <Grid item lg={6} className={classes.sectionDesktop}>
                       <Typography  style={{textAlign: 'center'}} variant="h5" className={classes.title}>
                           <b>بهترین و جدیدترین موزیک های به روز جهان</b>
                       </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <div className={classes.Margin}>
                        <OutlinedInput  endAdornment={<IconButton
                            edge="start"
                            className={classes.menuButton}
                            type="submit"
                        >
                            <SearchIcon className={classes.Icon} fontSize="large"/>
                        </IconButton>} color="primary"  className={classes.Input} type="text"
                                       autoFocus={true} fullWidth={true} placeholder="دنبال کدوم موزیک هستی؟"/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default SearchBar