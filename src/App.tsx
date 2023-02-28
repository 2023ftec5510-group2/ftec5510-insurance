import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Box, CardMedia, Container} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlanCard from "./app/plan/PlanCard";
import Description from "./app/description/Description";
import Payment, {PaymentMethod} from "./app/payment/Payment";
import Header from "./app/header/Header";
import querystring from "query-string";

function App() {

    const [selectedPlan, setSelectedPlan] = React.useState<number | null>(null)

    const onClickPayment = (paymentModel: PaymentMethod) => {
        console.log(`clicked payment method: ${paymentModel}`)
        if (selectedPlan === null) {
            return
        }
        if (paymentModel === PaymentMethod.crypto) {
            const queryParams = {
                code: '12345',
                redirectUrl: window.location.href
            }

            window.location.href = `http://localhost:3001/?${querystring.stringify(queryParams)}`
        }
    }

    return (
        <div>
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


        </div>


    );
}

export default App;
