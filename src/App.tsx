import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, Container, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlanCard from "./app/plan/PlanCard";
import Description from "./app/description/Description";
import Payment, {PaymentMethod} from "./app/payment/Payment";
import Header from "./app/header/Header";
import querystring from "query-string";
import ResultDialog from "./app/dialog/ResultDialog";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import Features from "./app/feature/Features";
import TnC from "./app/tnc-checkbox/TncCheckBox";
import PersonalInfoForm from "./app/personal-info/PersonalInfoForm";
import Intro from "./app/intro/Intro";
import Banner from "./app/banner/Banner";
import LicenseBar from "./app/license-bar/LicenseBar";
import PersonalInfo from "./domain/entities/order/personal-info";


function App() {

    const history = createBrowserHistory()

    const queryParams = new URLSearchParams(window.location.search)

    const paymentResult = queryParams.get('result') //0: success, 1: user canceled, 2: expired: 3, 99: error
    const paymentMerchantId = queryParams.get('merchantId')
    const paymentPrepayId = queryParams.get('prepayId')
    const encodePersonalInfo = queryParams.get('pi')

    const [selectedPlan, setSelectedPlan] = React.useState<number | null>(null)
    const [openResultDialog, setOpenResultDialog] = React.useState<boolean>(false)

    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        if (paymentResult !== null) {
            setOpenResultDialog(true)
        } else {
            setOpenResultDialog(false)
        }
    }, [paymentResult])

    const handleCloseResultDialog = () => {
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

            const encodePersonInfo = encodeURIComponent(JSON.stringify(personalInfo))

            const queryParams = {
                merchantId: "15201",
                itemCode: itemCode,
                redirectUrl: window.location.href,
                pi: encodePersonInfo
            }
            const url = process.env.REACT_APP_CRYPTO_PAYMENT_URL || "http://localhost:3001"
            window.location.href = `${url}/?${querystring.stringify(queryParams)}`
        }
    }

    return (
        <Router history={history}>
            <Header/>

            <Box mt={12} mb={12}>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Banner/>
                    </Container>
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Intro/>
                    </Container>
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Features/>
                    </Container>
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Description/>
                    </Container>
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Typography variant="h5">
                            Select plan
                        </Typography>
                        <Box mt={1}/>
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
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <PersonalInfoForm
                            personalInfo={personalInfo}
                            onchange={ event => {
                                setPersonalInfo({
                                    ...personalInfo,
                                    [event.name]: event.value
                                })
                            }}
                            onChangeStartDate={event => {
                                setPersonalInfo({
                                    ...personalInfo,
                                    [event.name]: event.value
                                })
                            }}
                            onChangeEndDate={event => {
                                setPersonalInfo({
                                    ...personalInfo,
                                    [event.name]: event.value
                                })
                            }}
                        />
                    </Container>
                </Box>

                <Box mt={2}>
                    <Container maxWidth="md">
                        <TnC/>
                    </Container>
                </Box>

                <Box mt={4}>
                    <Container maxWidth="md">
                        <Typography variant="h5">
                            Select payment method
                        </Typography>
                        <Box mt={1}/>
                        <Grid2 container spacing={4}>
                            <Grid2 xs={4}>
                                <Payment
                                    imgSrc="/images/visa.svg"
                                    paymentMethod={PaymentMethod.visa}
                                    onClick={() => onClickPayment(PaymentMethod.visa)}
                                />
                            </Grid2>
                            <Grid2 xs={4}>
                                <Payment
                                    imgSrc="/images/mastercard.svg"
                                    paymentMethod={PaymentMethod.mastercard}
                                    onClick={() => onClickPayment(PaymentMethod.mastercard)}
                                />
                            </Grid2>
                            <Grid2 xs={4}>
                                <Payment
                                    imgSrc="/images/stable-pay.svg"
                                    paymentMethod={PaymentMethod.crypto}
                                    onClick={() => onClickPayment(PaymentMethod.crypto)}
                                />
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
            </Box>

            <LicenseBar/>

            {
                openResultDialog ? (
                    <ResultDialog
                        open={openResultDialog}
                        onClose={() => {
                            handleCloseResultDialog()
                        }}
                        result={paymentResultString(paymentResult ? paymentResult : "99")}
                        paymentResult={paymentResult ? paymentResult : "99"}
                        paymentMerchantId={paymentMerchantId}
                        paymentPrepayId={paymentPrepayId}
                        encodePersonalInfo={encodePersonalInfo}
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
            return "Success"
        case "1":
            return "User cancelled"
        default:
            return "error"
    }
}

export default App;
