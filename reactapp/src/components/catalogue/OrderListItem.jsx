import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
export default function OrderListItem() {

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const res = await fetch("https://localhost:7170/api/PizzaOrder/GetOrders");
        const data = await res.json();
        setOrders(data);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    function getRandomDarkColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }




    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} sm={ 8} md={6}>
                <Typography variant="h4" sx={{ mt: 4, mb: 2 }} textAlign="center">
                    My Order List
                </Typography>
                {orders.length > 0 ? orders.map((order, index) => (
                    <Paper key={index} elevation={3} sx={{ p: 2, mb: 3 }}>
                        <Box display="flex" alignItems="center">
                            <Avatar sx={{ bgcolor: getRandomDarkColor(), marginRight: "10px" }}>
                                {index + 1}
                            </Avatar>
                            <Divider orientation="vertical" flexItem />
                            <Box ml={2}>
                                <Typography variant="h5" mb={1}>
                                    {order.orderPizzaName}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" mb={0.5}>
                                    Order ID: <span style={{ fontWeight: 'bold' }}>{order.orderId}</span>
                                </Typography>
                                <Typography variant="body1" color="textSecondary" mb={0.5}>
                                    Size: <span style={{ fontWeight: 'bold' }}>{order.orderSize}</span>
                                </Typography>
                                <Typography variant="body1" color="textSecondary" mb={0.5}>
                                    Toppings: <span style={{ fontWeight: "bold" }}>{order.orderToppings}</span>
                                </Typography>
                                <Typography variant="body1" color="textSecondary" mb={0.5}>
                                    Date: <span style={{ fontWeight: "bold" }}>{new Date(order.orderDate).toUTCString()}</span>
                                </Typography>
                                <Typography variant="body1" color="textSecondary" mb={0.5}>
                                    Total price:  <span style={{ fontWeight: "bold" }}>{order.orderPrice}{'\u20AC'}</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                )) : (
                    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
                        <Box display="flex" alignItems="center">

                            <Box>
                                <Typography variant="h5">
                                    You don't have any orders
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                )}
            </Grid>
        </Grid>


    )
}