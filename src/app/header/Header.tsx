import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "tss-react/mui";
import React, {useState} from "react";
import FlightIcon from '@mui/icons-material/Flight';

// const { makeStyles, withStyles } = createMakeAndWithStyles({
//     useTheme,
//     /*
//       OR, if you have extended the default mui theme adding your own custom properties:
//       Let's assume the myTheme object that you provide to the <ThemeProvider /> is of
//       type MyTheme then you'll write:
//       */
//     //"useTheme": useTheme as (()=> MyTheme)
// });

const useStyles = makeStyles<{ color: 'red' | 'blue' }>()((theme, { color }) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(2),
        height: "40px",
        [theme.breakpoints.down("sm")]: {
            height: "30px",
        },
    },
    title: {
        flexGrow: 1,
        fontWeight: 600,
        color: "#1e2d5e",
    },
    button: {
        borderRadius: "50px",
        backgroundColor: "#1e2d5e",
        color: "white",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: "#364f99",
        },
    },
}))

export default function Header() {

    const [color, setColor] = useState<'red' | 'blue'>('red');
    const styles = useStyles({color})

    return (
        <div>
            <AppBar position="static" className={styles.classes.root}>
                <Toolbar>
                    <FlightIcon fontSize="large"/>
                    <Typography align="left" variant="h5" component="div" ml={2}>
                        Insurance company
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*<AppBar>*/}
            {/*    <IconButton edge="start" color="inherit" aria-label="logo">*/}
            {/*        <FlightIcon/>*/}
            {/*        <Typography align="left" variant="h6" component="div" ml={1}>*/}
            {/*            Insurance company*/}
            {/*        </Typography>*/}
            {/*    </IconButton>*/}
            {/*</AppBar>*/}
        </div>
    )
}