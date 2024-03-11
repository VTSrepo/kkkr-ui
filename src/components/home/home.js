import React, {useEffect,useState } from 'react';
import { Container, Typography, Box, Button, Link } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Home = () => {
    const navigate = useNavigate();
    const initOrg = {OrgId:'', OrgName:''}
    const [org, setOrg] = useState(initOrg);
    const moveToCreate = () => {
        navigate('/create')
    }
    useEffect(() => {
        axios.get('http://ec2-13-232-100-135.ap-south-1.compute.amazonaws.com/login')
          .then(response => {
            console.log(response.data);
            setOrg(response.data)
          })          
          .catch(error => console.error(error));
      }, []);

    return (
        <Container>
           

            <Typography variant='h5'>{org.OrgId} - {org.OrgName}</Typography>
            <Box>
                <Button variant='contained' onClick={moveToCreate}>Create Profile</Button> </Box>
            <Box sx={{ marginTop: 10 }}><Button variant='contained'>View Profiles</Button></Box>


        </Container>
    )
}
export default Home;