import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, MenuItem, Grid, Checkbox } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
const label = { inputProps: { 'aria-label': 'Checkbox demo', label: 'Inform once marriage set' } };

const CreateProfile = () => {
    let initialPayload = {
        name: '',
        gender: '',
        type: '',
        caste: '',
        subcaste: '',
        gowthra: ''
    }
    const [payload, setPayload] = useState(initialPayload)
    const navigate = useNavigate();

    const loginHandler = () => {
        navigate('/home')
    }

    const handleChange = (evt) => {
        const value = evt.target.value;
        setPayload({
            ...payload,
            [evt.target.name]: value
        });
    }

    return (
        <Container maxWidth="md">
            <Typography variant='h5'>Create Profile</Typography>
            <div>
                <Box
                    component="form"
                    sx={{
                        display: 'flex', flexDirection: 'column'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <TextField
                                name="Name"
                                id="name"
                                label="Name"
                                onChange={handleChange}
                                fullWidth

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-select-gender"
                                select
                                name="Gender"
                                label="gender"
                                sx={{ paddingLeft: '5px' }}
                                value={payload.gender}
                                fullWidth
                                onChange={handleChange}
                                helperText="Please select your gender"
                            >
                                {gender.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-select-type"
                                select
                                name="type"
                                label="Type"
                                fullWidth
                                value={payload.type}
                                onChange={handleChange}
                                helperText="Please select your type"
                            >
                                {type.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-select-type"
                                select
                                name="caste"
                                label="caste"
                                fullWidth
                                value={payload.caste}
                                onChange={handleChange}
                                helperText="Please select your caste"
                            >
                                {caste.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-select-type"
                                select
                                name="subcaste"
                                label="Subcaste"
                                fullWidth
                                value={payload.subcaste}
                                onChange={handleChange}
                                helperText="Please select your caste"
                            >
                                {subcaste.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="gowthra"
                                id="gowthra"
                                label="gowthra"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="star"
                                id="star"
                                label="star"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="rasi"
                                id="rasi"
                                label="rasi"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="place"
                                id="place"
                                label="place"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="education"
                                id="education"
                                label="education"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="income"
                                id="income"
                                label="income"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="occupation"
                                id="occupation"
                                label="occupation"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="height"
                                id="height"
                                label="height"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="weight"
                                id="weight"
                                label="weight"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="father"
                                id="father"
                                label="father"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="mother"
                                id="mother"
                                label="mother"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="sibling"
                                id="sibling"
                                label="sibling"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name="contact"
                                id="contact"
                                label="contact"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="number"
                                id="number"
                                label="number"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                name="email"
                                id="email"
                                label="email"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                name="note"
                                id="note"
                                label="note"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                name="expectation"
                                id="expectation"
                                label="expectation"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction='row' alignItems="center">
                                <Checkbox {...label} defaultChecked />
                                <Typography >Agree to inform admin once marriage settled</Typography>
                            </Grid>

                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction='row' alignItems="center">
                                <Checkbox {...label} defaultChecked />
                                <Typography >Agree to inform while leaving</Typography>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction='row' alignItems="center">
                                <Checkbox {...label} defaultChecked />
                                <Typography >declare that above mentioned details are true 
                                </Typography>
                                <Typography>give consent to publish in any social network such as whatsapp, google doc etc.
                                </Typography>
                            </Grid>

                        </Grid>



                    </Grid>








                    {/* <TextField
                        name="place"
                        id="place"
                        label="Place"
                        onChange={handleChange}

                    /> */}

                </Box>
                <Box sx={{ marginTop: 20 }}><Button variant="contained" onClick={loginHandler}>Submit</Button></Box>

            </div>


        </Container>
    )
}
const gender = [
    {
        value: 'M',
        label: 'Male',
    },
    {
        value: 'F',
        label: 'Female',
    },
    {
        value: 'O',
        label: 'Other',
    },

];

const caste = [
    {
        value: 'Iyer',
        label: 'Iyer',
    },
    {
        value: 'Iyengar',
        label: 'Iyengar',
    }

];
const subcaste = [
    {
        value: 'Vadama',
        label: 'Vadama',
    },
    {
        value: 'Vathima',
        label: 'Vathima',
    }

];
const type = [
    {
        value: 'Indian',
        label: 'Indian',
    },
    {
        value: 'NRI',
        label: 'NRI',
    }

];

export default CreateProfile;