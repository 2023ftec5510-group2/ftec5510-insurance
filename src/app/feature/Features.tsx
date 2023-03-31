import React from "react";
import { makeStyles } from "tss-react/mui";
import { Grid, Typography } from "@mui/material";
import { CheckCircle, Security, MedicalServices, House } from "@mui/icons-material";

const useStyles = makeStyles()((theme) => ({
    feature: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(1),
        },
    },
    icon: {
        fontSize: 60,
        marginBottom: theme.spacing(1),
    },
}));

const InsuranceFeatures = () => {
    const styles = useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <div className={styles.classes.feature}>
                    <CheckCircle className={styles.classes.icon} color="primary" />
                    <Typography variant="h6" align="center">
                        Coverage for Accidents
                    </Typography>
                    <Typography variant="body1" align="center">
                        Protect yourself and your loved ones in case of accidents.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className={styles.classes.feature}>
                    <Security className={styles.classes.icon} color="primary" />
                    <Typography variant="h6" align="center">
                        Home Security
                    </Typography>
                    <Typography variant="body1" align="center">
                        Protect your home and your belongings from theft and damage.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className={styles.classes.feature}>
                    <MedicalServices className={styles.classes.icon} color="primary" />
                    <Typography variant="h6" align="center">
                        Medical Coverage
                    </Typography>
                    <Typography variant="body1" align="center">
                        Get coverage for medical expenses and emergency situations.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className={styles.classes.feature}>
                    <House className={styles.classes.icon} color="primary" />
                    <Typography variant="h6" align="center">
                        Home Insurance
                    </Typography>
                    <Typography variant="body1" align="center">
                        Protect your home and your family from unexpected events.
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default InsuranceFeatures;