import React from "react";
import {
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


export interface ResultDialogProps {
    open: boolean;
    onClose: () => void;
    result: string;
    paymentResult: string;
    paymentMerchantId: string | null;
    paymentPrepayId: string | null;
}

export default function ResultDialog(props: ResultDialogProps) {
    const {open, onClose, result} = props;

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
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="result-dialog-title"
            aria-describedby="result-dialog-description"
            fullWidth={true}
            maxWidth={"xs"}
        >
            <DialogTitle
                id="result-dialog-title"
                align={"center"}
            >
                <Typography
                    variant="h6"
                    component="div"
                >
                    Payment Result
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="result-dialog-description"
                    sx={theme => ({
                        display: 'flex',
                        alignItems: 'center',
                    })}
                >
                    {result}
                    {resultIcon()}
                </DialogContentText>
                <DialogContentText>
                    Merchant ID: {props.paymentMerchantId ? props.paymentMerchantId : "-"}
                </DialogContentText>
                <DialogContentText>
                    Payment ID: {props.paymentPrepayId ? props.paymentPrepayId : "-"}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}