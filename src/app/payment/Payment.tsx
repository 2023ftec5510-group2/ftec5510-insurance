import {Box, Card, StandardProps} from "@mui/material";


interface Props extends StandardProps<any, any> {
    imgSrc: string
    paymentMethod: PaymentMethod
}

export enum PaymentMethod {
    visa = "visa",
    mastercard = "mastercard",
    crypto = "crypto"
}

export default function Payment(props: Props) {

    const backgroundColor = props.paymentMethod === PaymentMethod.crypto ? "#071e26" : "#ffffff"

    return (
        <Card
            sx={{
                height: "60px",
                padding: "20px",
                backgroundColor: backgroundColor,
            }}
            onClick={props.onClick}
        >
            <img
                src={props.imgSrc}
                height="100%"
                width="100%"
                style={{
                    objectFit: "fill",
                }}
            />
        </Card>
    )
}