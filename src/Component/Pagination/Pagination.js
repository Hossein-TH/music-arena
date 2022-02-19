import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(5),
        },
    },
    Margin: {
        marginLeft: "0%",
        [theme.breakpoints.up('md')]: {
            marginLeft: "20%",
        }
    }
}));

export default function MusicsPagination() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.Margin}>
            <Pagination count={10} variant="outlined" shape="rounded"/>
            </div>
        </div>
    );
}
