import {useStyles} from "tss-react/mui";
import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


export interface ResultDialogProps {
    open: boolean;
    onClose: () => void;
    result: string;
    paymentResult: string;
    paymentMerchantId: string | null;
    paymentPrepayId: string | null;
}

export default function ResultDialog(props: ResultDialogProps) {
    const { open, onClose, result } = props;
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="result-dialog-title"
            aria-describedby="result-dialog-description"
        >
            <DialogTitle id="result-dialog-title">Payment Result</DialogTitle>
            <DialogContent>
                <DialogContentText id="result-dialog-description">
                    {result}
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