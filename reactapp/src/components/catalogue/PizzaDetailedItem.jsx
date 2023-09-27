import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
export default function PizzaDetails({ slug }) {

    const [pizzas, setPizzas] = useState([]);
    const [pizzaImage, setPizzaImage] = useState();
    const [sizes, setSizes] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizzaInfo() {
            try {
                const res = await fetch(`https://pizzashopproject.azurewebsites.net/api/PizzaSlug/GetPizzaSlug/${slug}`);
                const data = await res.json();
                setPizzas(data);
                console.log("pizzas slug is", pizzas)

            }
            catch (err) {
                console.error("error fetching pizzas");
            }
        }

        fetchPizzaInfo();

    }, [])

    useEffect(() => {
        async function fetchSizes() {
            try {
                const resSize = await fetch('https://pizzashopproject.azurewebsites.net/api/PizzaSizes/GetSizesList');
                const dataSize = await resSize.json();
                setSizes(dataSize);
                if (dataSize.length > 0) {
                    setSelectedSize(dataSize[0].size);
                }
            }
            catch (err) {
                console.log(err, "err sizes")
            }
        }
        fetchSizes();
    }, [])

    useEffect(() => {
        async function fetchImage() {
            try {
                const resImg = await fetch(`https://pizzashopproject.azurewebsites.net/api/PizzaImage/GetImage/${slug}.jpg`);
                const dataImg = await resImg.blob();

                const url = URL.createObjectURL(dataImg);

                setPizzaImage(url);
            } catch (err) {
                console.log('err img', err);
            }


        }
        fetchImage();
    }, [])

    useEffect(() => {
        async function fetchToppings() {
            try {
                const resTop = await fetch("https://pizzashopproject.azurewebsites.net/api/PizzaToppings/GetToppingsList");
                const dataTop = await resTop.json();

                setToppings(dataTop);
            }

            catch (err) {
                console.log(err);
            }
        }
        fetchToppings();
    }, [])

    const calculcateTotalPrice = async () => {
        try {
            const res = await fetch("https://pizzashopproject.azurewebsites.net/api/PriceCalculation/CalculatePrice", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    size: selectedSize,
                    toppings: selectedToppings,
                }),
            });

            if (res.ok) {
                const data = await res.json();
                setTotalPrice(data.totalPrice);
            }

        } catch (err) {
            console.log(err);
        }
    }
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }
    const handleToppingsChange = (event) => {
        const selectedTopping = event.target.value;
        setSelectedToppings((prevSelectedToppings) => {
            if (prevSelectedToppings.includes(selectedTopping)) {
                return prevSelectedToppings.filter((topping) => topping !== selectedTopping);
            } else {
                return [...prevSelectedToppings, selectedTopping];
            }
        })
    }

    const handleOrderClick = async () => {
        const order = {

            orderPizzaName: pizzas.name,
            orderToppings: selectedToppings.join(", "),
            orderPrice: totalPrice,
            orderSize: selectedSize,

        };
        try {
            const res = await fetch("https://pizzashopproject.azurewebsites.net/api/PizzaOrder/PostOrder", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (res.ok) {
                const data = await res.json();
                const orderId = data.orderId;
                navigate(`/orderSuccess/${orderId}`);
                console.log("order created");

            }

        } catch (err) {
            console.log(err, "err creating order")
        }

    };


    useEffect(() => {
        calculcateTotalPrice();
    }, [selectedSize, selectedToppings]);

    return (
        <>
            <Grid container spacing={2} mt={4}>
                <Grid item xs={12} sm={10} md={8} mx="auto">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '300px',
                        '&:hover img': {
                            transform: 'scale(1.02)',
                        },
                    }}>
                        <img
                            src={pizzaImage}
                            alt={slug}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '500px',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.2s ease-in-out',
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={8} md={4} mx="auto">
                    <Typography variant="h4">
                        {pizzas.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {pizzas.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6">
                        Size
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={selectedSize}
                            onChange={handleSizeChange}
                        >
                            {sizes.map((size) => (
                                <FormControlLabel key={size.id} value={size.size} control={<Radio color="secondary" />} label={size.size} />
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <Typography variant="h6" mt={2}>
                        Toppings <Typography variant="body2" component="span" display="inline">(Select more than 3 to get 10% off!)</Typography>
                    </Typography>
                    <FormGroup>
                        {toppings.map((topping) => (
                            <FormControlLabel key={topping.id} control={<Checkbox color="secondary" />} label={topping.name + " (+1\u20AC)"} onChange={handleToppingsChange} value={topping.name} />
                        ))}
                    </FormGroup>

                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6">
                        Total Price: &nbsp;
                        {totalPrice}
                        {'\u20AC'}
                    </Typography>

                    <Button variant="contained" color="primary" sx={{ mt: 2 }} size="large" onClick={handleOrderClick}>
                        Order
                    </Button>
                </Grid>
            </Grid>


        </>
    )

}