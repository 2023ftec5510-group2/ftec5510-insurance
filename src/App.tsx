import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Box, Container} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlanCard from "./app/plan/PlanCard";
import Description from "./app/description/Description";
import Payment from "./app/payment/Payment";

function App() {
  return (
      <div>
          <AppBar position="static">
              This is a head bar
          </AppBar>

          <Box mt={12}>
              <Container maxWidth="md">
                  <Grid2 container spacing={4}>
                      <Grid2 xs={4}>
                          <PlanCard/>
                      </Grid2>
                      <Grid2 xs={4}>
                          <PlanCard/>
                      </Grid2>
                      <Grid2 xs={4}>
                          <PlanCard/>
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
                              <Payment method={"Visa"}/>
                          </Grid2>
                          <Grid2 xs={4}>
                              <Payment method={"MasterCard"}/>
                          </Grid2>
                          <Grid2 xs={4}>
                              <Payment method={"Crypto"}/>
                          </Grid2>
                      </Grid2>
                  </Container>
              </Box>
          </Box>


      </div>



  );
}

export default App;
