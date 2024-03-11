
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const AppNavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    KKKR
                    {/* <Link to="home" sx={{color:'white!important'}}> KKKR</Link> */}
                </Typography>
                <Button color="inherit" onClick={login}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}


export default AppNavBar;

