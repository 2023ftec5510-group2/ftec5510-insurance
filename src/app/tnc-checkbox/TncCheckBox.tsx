import {Checkbox, css, FormControlLabel, Typography} from "@mui/material";
import {makeStyles} from "tss-react/mui";
import {text} from "stream/consumers";

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
    },
    checkbox: {
        color: "#1e2d5e",
    },
    label: {
        fontWeight: 500,
        color: "#1e2d5e",
    },
    link: {
        color: "#1e2d5e",
        textDecoration: "underline",
        cursor: "pointer",
    },
}));

function TnC() {
    const styles = useStyles();

    return (
        <div className={styles.classes.root}>
            <FormControlLabel
                control={
                    <Checkbox
                        className={styles.classes.checkbox}
                        color="default"
                    />
                }
                label={
                    <Typography variant="body1" className={styles.classes.label}>
                        I agree to the&nbsp;
                        <span className={styles.classes.link}>Terms and Conditions</span>
                    </Typography>
                }
            />
        </div>
    );
}

export default TnC;



