import React, {useState} from 'react';
import {TextField, Button, Box, Typography} from '@mui/material';
import TnC from "../tnc-checkbox/TncCheckBox";

function TravelInsuranceForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            style={{display: 'flex', flexDirection: 'column'}}
            noValidate
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="nope"
        >
            <Typography variant="h5">
                Provide personal information
            </Typography>
            <Box mt={1}/>
            <TextField
                label="First Name"
                value={firstName}
                onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(event.target.value)}
                required
                // variant="standard"
                autoComplete="nope"
            />
            <TextField
                label="Last Name"
                value={lastName}
                onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setLastName(event.target.value)}
                required
                // variant="standard"
                autoComplete="nope"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setEmail(event.target.value)}
                // type="email"
                required
                // variant="standard"
                autoComplete="nope"
            />
            <TextField
                label="Phone"
                value={phone}
                onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setPhone(event.target.value)}
                // type="tel"
                required
                // variant="standard"
                autoComplete="nope"
            />
        </Box>
    );
}

export default TravelInsuranceForm;