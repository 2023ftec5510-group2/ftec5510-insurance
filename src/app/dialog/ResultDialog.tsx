import React from "react";
import {
    Box,
    Button, createTheme,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ThemeProvider,
    Typography
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import {makeStyles} from "tss-react/mui";
import {Cancel, DoDisturbOn} from "@mui/icons-material";
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
        personalInfo = JSON.parse(decodeURIComponent(encodePersonalInfo))
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
        <Dialog open={open} onClose={onClose} aria-labelledby="payment-result-dialog-title">
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
                        <Typography variant="body1" className={classes.dialogContentText}>
                            Merchant ID: {paymentMerchantId}
                        </Typography>
                        <Typography variant="body1" className={classes.dialogContentText}>
                            Prepay ID: {paymentPrepayId}
                        </Typography>
                        <Typography variant="body2" className={classes.dialogContentText}>
                            Your payment receipt has been emailed to {personalInfo?.email}.
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
                <Typography variant="body2" className={classes.dialogContentText}>
                    Name: {personalInfo.firstName} {personalInfo.lastName}
                </Typography>
                <Typography variant="body2" className={classes.dialogContentText}>
                    Email: {personalInfo.email}
                </Typography>
                <Typography variant="body2" className={classes.dialogContentText}>
                    Phone: {personalInfo.phone}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} className={classes.dialogButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>

        // <Dialog
        //     open={open}
        //     onClose={onClose}
        //     aria-labelledby="result-dialog-title"
        //     aria-describedby="result-dialog-description"
        //     fullWidth={true}
        //     maxWidth={"xs"}
        // >
        //     <DialogTitle
        //         id="result-dialog-title"
        //         align={"center"}
        //     >
        //         <Typography
        //             variant="h6"
        //             component="div"
        //         >
        //             Payment Result
        //         </Typography>
        //     </DialogTitle>
        //     <DialogContent>
        //         <DialogContentText
        //             id="result-dialog-description"
        //             sx={theme => ({
        //                 display: 'flex',
        //                 alignItems: 'center',
        //             })}
        //         >
        //             {result}
        //             {resultIcon()}
        //         </DialogContentText>
        //         <DialogContentText>
        //             Merchant ID: {props.paymentMerchantId ? props.paymentMerchantId : "-"}
        //         </DialogContentText>
        //         <DialogContentText>
        //             Payment ID: {props.paymentPrepayId ? props.paymentPrepayId : "-"}
        //         </DialogContentText>
        //     </DialogContent>
        //     <DialogActions>
        //         <Button onClick={onClose} color="primary">
        //             Close
        //         </Button>
        //     </DialogActions>
        // </Dialog>
    );
}