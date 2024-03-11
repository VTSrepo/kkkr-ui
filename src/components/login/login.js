import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/home')
    }

    return (
        <Container maxWidth="sm">
            <Typography variant='h5'>Login</Typography>
            <div style={{ marginLeft: '20%' }}>
                <Box
                    sx={{
                        width: 300,
                        height: 'auto',
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <TextField

                        id="user_id"
                        label="userID"

                    />
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                    />

                </Box>
                <Box sx={{ marginTop: 20 }}><Button variant="contained" onClick={loginHandler}>Login</Button></Box>

            </div>


        </Container>
    )
}


export default Login;