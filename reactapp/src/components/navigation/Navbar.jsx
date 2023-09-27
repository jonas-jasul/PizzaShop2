import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar({ themeSwitcher }) {


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (

        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center',
                        }}
                    >
                        <LocalPizzaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                        PizzaShop

                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }, "& .MuiMenu-paper":
                                    { backgroundColor: theme => theme.palette.primary.main, },
                            }}
                        >

                            <NavLink to='/catalogue' style={{ textDecoration: "none" }} >
                                <MenuItem key={'pizzaCatalogue'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color="contrastText.main" >
                                        Pizza Catalogue
                                    </Typography>
                                </MenuItem>
                            </NavLink>

                            <NavLink to="/orderList" style={{ textDecoration: "none" }}>
                                <MenuItem key={'orders'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color="contrastText.main" >
                                        My Orders
                                        <ShoppingBasketIcon sx={{ marginLeft: '4px' }} />
                                    </Typography>
                                </MenuItem>
                            </NavLink>
                            {themeSwitcher}

                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center',
                        }}
                    >
                        <LocalPizzaIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        PizzaShop
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <NavLink to="/catalogue" style={{ textDecoration: "none" }} >
                            <Button
                                key={'pizzaCatalogue'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: theme => theme.palette.contrastText.main, display: 'block' }}
                            >
                                Pizza Catalogue
                            </Button>

                        </NavLink>

                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {themeSwitcher}

                        <NavLink to="/orderList" style={{ textDecoration: "none" }}>
                            <Button
                                sx={{ color: theme=>theme.palette.contrastText.main, display: 'flex', alignItems: 'center' }}
                            >
                                My Orders
                                <ShoppingBasketIcon sx={{ marginLeft: '4px' }} />
                            </Button>
                        </NavLink>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Navbar;
