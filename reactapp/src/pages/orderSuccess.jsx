import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function OrderSuccess() {
    const { orderId } = useParams();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="87vh"
            padding="16px"
        >
            <Box
                padding="32px"
                borderRadius="8px"
                boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                textAlign="center"
            >
                <Typography variant="h4" gutterBottom>
                    Thank You!
                </Typography>
                <Typography variant="body1">
                    Your order has been successfully placed.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Order ID: {orderId}
                </Typography>

                <NavLink to="/orderList">
                    <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                        <Typography color="white">
                            Check my orders
                        </Typography>
                    </Button>
                </NavLink>

            </Box>
        </Box>
    );
}
