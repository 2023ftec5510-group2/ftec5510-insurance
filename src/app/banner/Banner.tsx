import React from 'react';
import {makeStyles} from 'tss-react/mui';
import {Box} from '@mui/material';

const useStyles = makeStyles()((theme) => ({
    banner: {
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
    },
}));


function Banner() {
    const styles = useStyles();

    return (
        <Box component="img" className={styles.classes.banner} src="/images/travel-insurance-banner.jpg"/>
    );
}

export default Banner;