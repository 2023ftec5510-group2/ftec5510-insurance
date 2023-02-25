import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Box, CardMedia, Container} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlanCard from "./app/plan/PlanCard";
import Description from "./app/description/Description";
import Payment, {PaymentMethod} from "./app/payment/Payment";
import Header from "./app/header/Header";

function App() {
    return (
        <div>
            <Header/>

            <Box mt={12}>
                <Container maxWidth="md">
                    <Grid2 container spacing={4}>
                        <Grid2 xs={4}>
                            <PlanCard
                                imgSrc="/images/plans/plan-a.jpg"
                                title="Basic Plan"
                                desc="The most economical choice."
                            />
                        </Grid2>
                        <Grid2 xs={4}>
                            <PlanCard
                                imgSrc="/images/plans/plan-b.jpg"
                                title="Prime Plan"
                                desc="Peace of mind for your business."
                            />
                        </Grid2>
                        <Grid2 xs={4}>
                            <PlanCard
                                imgSrc="/images/plans/plan-c.jpg"
                                title="Executive Plan"
                                desc="A business traveller's best friend."
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
                                <Payment imgSrc="/images/visa.svg" paymentMethod={PaymentMethod.visa}/>
                            </Grid2>
                            <Grid2 xs={4}>
                                <Payment imgSrc="/images/mastercard.svg" paymentMethod={PaymentMethod.mastercard}/>
                            </Grid2>
                            <Grid2 xs={4}>
                                <Payment imgSrc="/images/crypto.svg" paymentMethod={PaymentMethod.crypto}/>
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
            </Box>


        </div>


    );
}

export default App;
