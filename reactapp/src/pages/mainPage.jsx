import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function MainPage() {

    return (
        <>
            <Paper
                sx={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/pizzaBg.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    minHeight: 'calc(100vh - 64px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Welcome to Pizza Shop
                    </Typography>
                    <Typography variant="h5" paragraph>
                        The finest pizzas, made with quality ingredients and true passion.
                    </Typography>
                    <Box>
                        <NavLink to="/catalogue">
                            <Button variant="contained" color="primary" size="large">
                                <Typography color="contrastText">
                                    Browse our selection
                                </Typography>
                            </Button>
                        </NavLink>

                    </Box>
                </Container>
            </Paper>
        </>
    )
}