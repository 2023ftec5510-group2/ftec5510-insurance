import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Box, CardMedia, Container} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlanCard from "./app/plan/PlanCard";
import Description from "./app/description/Description";
import Payment, {PaymentMethod} from "./app/payment/Payment";
import Header from "./app/header/Header";
import querystring from "query-string";
import ResultDialog from "./app/dialog/ResultDialog";
import {Router, useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function App() {

    const history = createBrowserHistory()

    const queryParams = new URLSearchParams(window.location.search)

    const paymentResult = queryParams.get('result') //0: success, 1: user canceled, 2: expired: 3, 99: error
    const paymentMerchantId = queryParams.get('merchantId')
    const paymentPrepayId = queryParams.get('prepayId')

    const [selectedPlan, setSelectedPlan] = React.useState<number | null>(null)
    const [openResultDialog, setOpenResultDialog] = React.useState<boolean>(false)

    useEffect(() => {
        if (paymentResult !== null) {
            setOpenResultDialog(true)
        } else {
            setOpenResultDialog(false)
        }
    }, [paymentResult])

    const handleCloseResultDialog = () => {
        // const currentUrl = window.location.href;
        // const urlWithoutQueryParams = currentUrl.split("?")[0];
        // window.location.href = urlWithoutQueryParams;
        // window.location.reload();

        history.replace({search: ""})

        setOpenResultDialog(false)
    }

    const onClickPayment = (paymentModel: PaymentMethod) => {
        console.log(`clicked payment method: ${paymentModel}`)
        if (selectedPlan === null) {
            return
        }
        if (paymentModel === PaymentMethod.crypto) {

            let itemCode = ""
            switch (selectedPlan) {
                case 0:
                    itemCode = "7e1fbb64-4299-4b19-a265-863b1e7b06c9"
                    break
                case 1:
                    itemCode = "dfda2a6e-a8d4-430a-8372-6bde58d775ce"
                    break
                case 2:
                    itemCode = "b1117f32-2c01-45e6-9ce1-aa8c8e4d1ee2"
            }

            const queryParams = {
                merchantId: "15201",
                itemCode: itemCode,
                redirectUrl: window.location.href
            }
            const url = process.env.REACT_APP_CRYPTO_PAYMENT_URL || "http://localhost:3001"
            window.location.href = `${url}/?${querystring.stringify(queryParams)}`
        }
    }

    return (
        <Router history={history}>
            <Header/>

            <Box mt={12}>
                <Container maxWidth="md">
                    <Grid2 container spacing={4}>
                        <Grid2 xs={4}>
                            <PlanCard
                                imgSrc="/images/plans/plan-a.jpg"
                                price={29.99}
                                title="Basic Plan"
                                desc="The most economical choice."
                                selected={selectedPlan === 0}
                                onClick={() => setSelectedPlan(0)}
                            />
                        </Grid2>
                        <Grid2 xs={4}>
                            <PlanCard
                                imgSrc="/images/plans/plan-b.jpg"
                                price={89.99}
                                title="Prime Plan"
                                desc="Peace of mind for your business."
                                selected={selectedPlan === 1}
                                onClick={() => setSelectedPlan(1)}
                            />
                        </Grid2>
                        <Grid2 xs={4}>
                            <PlanCard
                                imgSrc="/images/plans/plan-c.jpg"
                                price={299.99}
                                title="Executive Plan"
                                desc="A business traveller's best friend."
                                selected={selectedPlan === 2}
                                onClick={() => setSelectedPlan(2)}
                            />
                        </Grid2>
                    </Grid2>
                </Container>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Description/>
                    </Container>
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Grid2 container spacing={4}>
                            <Grid2 xs={4}>
                                <Payment
                                    imgSrc="/images/visa.svg"
                                    paymentMethod={PaymentMethod.visa}
                                    onClick={ () => onClickPayment(PaymentMethod.visa)}
                                />
                            </Grid2>
                            <Grid2 xs={4}>
                                <Payment
                                    imgSrc="/images/mastercard.svg"
                                    paymentMethod={PaymentMethod.mastercard}
                                    onClick={ () => onClickPayment(PaymentMethod.mastercard)}
                                />
                            </Grid2>
                            <Grid2 xs={4}>
                                <Payment
                                    imgSrc="/images/crypto.svg"
                                    paymentMethod={PaymentMethod.crypto}
                                    onClick={ () => onClickPayment(PaymentMethod.crypto)}
                                />
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
            </Box>

            {
                openResultDialog ? (
                    <ResultDialog
                        open={openResultDialog}
                        onClose={() => {
                            handleCloseResultDialog()
                        }}
                        result= {paymentResultString(paymentResult ? paymentResult : "99")}
                        paymentResult={paymentResult ? paymentResult : "99"}
                        paymentMerchantId={paymentMerchantId}
                        paymentPrepayId={paymentPrepayId}
                    />
                ) : (
                    <></>
                )
            }

        </Router>


    );
}

const paymentResultString = (paymentResult: string) => {
    switch (paymentResult) {
        case "0":
            return "success"
        case "1":
            return "user canceled"
        default:
            return "error"
    }
}

export default App;
