import React from "react";
import {
    Box,
    Button, createTheme,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider,
    ThemeProvider,
    Typography
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import {makeStyles} from "tss-react/mui";
import {Cancel, DoDisturbOn, Image} from "@mui/icons-material";
import PersonalInfo from "../../domain/entities/order/personal-info";


export interface ResultDialogProps {
    open: boolean;
    onClose: () => void;
    result: string;
    paymentResult: string;
    paymentMerchantId: string | null;
    paymentPrepayId: string | null;
    encodePersonalInfo: string | null;
}

const useStyles = makeStyles()((theme) => ({
    dialogTitle: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.success.contrastText,
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'start',
        justifyContent: 'center',
        padding: theme.spacing(2),
    },
    dialogContentText: {
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
    dialogButton: {
        margin: theme.spacing(1),
    },
}));

export default function ResultDialog(props: ResultDialogProps) {
    const {open, onClose, result, paymentResult, paymentMerchantId, paymentPrepayId, encodePersonalInfo} = props;

    const classes = useStyles().classes;

    let personalInfo: PersonalInfo = {};
    if (encodePersonalInfo) {
        console.log(`encodePersonalInfo: ${encodePersonalInfo}`)
        personalInfo = JSON.parse(decodeURIComponent(encodePersonalInfo), (key, value) => {
            if (key === 'startDate' || key === 'endDate') {
                return new Date(value);
            }
            return value;
        })
        console.log(`jsonPersonalInfo: ${personalInfo}`)
    }

    const resultIcon = () => {

        switch (props.paymentResult) {
            case "0":
                return (
                    <CheckCircle sx={theme => ({
                        marginRight: 1,
                        color: theme.palette.success.main,
                        fontSize: 30
                    })}/>
                )
            case "1":
                return (
                    <Cancel sx={theme => ({
                        marginRight: 1,
                        color: theme.palette.error.main,
                        fontSize: 30
                    })}/>
                )
            default:
                return (
                    <DoDisturbOn sx={theme => ({
                        marginRight: 1,
                        color: theme.palette.error.main,
                        fontSize: 30
                    })}/>
                )
        }
    }

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="payment-result-dialog-title" PaperProps={{
            style: {
                width: '80%',
            }
        }}>
            <DialogTitle id="payment-result-dialog-title" className={classes.dialogTitle}>
                Payment Result
            </DialogTitle>
            <Box height={2}/>
            <DialogContent className={classes.dialogContent}>
                {props.paymentResult === '0' ? (
                    <>
                        <Typography variant="h6" className={classes.dialogContentText}>
                            Thank you for your payment!
                        </Typography>
                        <Typography variant="body2" className={classes.dialogContentText}>
                            Your payment receipt has been emailed to {personalInfo?.email}.
                        </Typography>
                        <Divider/>
                        <Box height={16}/>
                        <Typography variant="body1" className={classes.dialogContentText}>
                            Merchant ID: {paymentMerchantId}
                        </Typography>
                        <Typography variant="body1" className={classes.dialogContentText}>
                            Prepay ID: {paymentPrepayId}
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" className={classes.dialogContentText} color="indianred">
                            Payment Failed
                        </Typography>
                        <Typography variant="body1" className={classes.dialogContentText}>
                            Please contact customer support for assistance.
                        </Typography>
                    </>
                )}
                <Typography variant="body1" className={classes.dialogContentText}>
                    Contact Information
                </Typography>
                <Typography variant="body1" className={classes.dialogContentText}>
                    Name: {personalInfo.firstName} {personalInfo.lastName}
                </Typography>
                <Typography variant="body1" className={classes.dialogContentText}>
                    Email: {personalInfo.email}
                </Typography>
                <Typography variant="body1" className={classes.dialogContentText}>
                    Phone: {personalInfo.phone}
                </Typography>
                <Typography variant="body1" className={classes.dialogContentText}>
                    {`Travel date: ${personalInfo.startDate?.toLocaleDateString()} ~ ${personalInfo.endDate?.toLocaleDateString()}`}
                </Typography>
                <Typography variant="body1" className={classes.dialogContentText}>
                    Destination: {personalInfo.destination}
                </Typography>
                <Box height={16}/>
                <img src={"/images/signature.png"} style={{
                    width: 120,
                }}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} className={classes.dialogButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}