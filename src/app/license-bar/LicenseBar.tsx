import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {BottomNavigation, BottomNavigationAction, Typography} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const useStyles = makeStyles()((theme) => ({
    root: {
        position: 'fixed',
        textAlign: 'center',
        justifyContent: 'start',
        bottom: 0,
        height: '36px',
        width: '100%',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        zIndex: 1000,
    },
}));

function LicenseBar() {
    const styles = useStyles();

    return (
        <BottomNavigation className={styles.classes.root}>
            <Typography variant="body2" color="text.secondary" align="center">
                © 2023 AAA Company. All Rights Reserved.
            </Typography>
        </BottomNavigation>
    );
}

export default LicenseBar;
