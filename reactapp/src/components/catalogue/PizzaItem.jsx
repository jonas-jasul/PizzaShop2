import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';
function PizzaItem() {
    const [pizzas, setPizzas] = useState([]);
    const [pizzaImages, setPizzaImages] = useState([]);
    const [imagesLoading, setImagesLoading] = useState(false);



    useEffect(() => {
        async function fetchPizzas() {
            try {
                const res = await fetch('https://localhost:7170/api/PizzaImage/GetPizzasWithImages');
                const data = await res.json();
                setPizzas(data);
                console.log("pizzas are", pizzas)

            }
            catch (err) {
                console.error("error fetching pizzas");
            }
        }

        fetchPizzas();

    }, [])

    useEffect(() => {
        async function fetchImages() {
            try {
                setImagesLoading(true);
                const imgPromises = pizzas.map(async (pizza) => {
                    const resImg = await fetch(`https://localhost:7170/api/PizzaImage/GetImage/${pizza.imageFileName}`);
                    const dataImg = await resImg.blob();
                    return { id: pizza.id, imageBlob: dataImg };
                });

                const imgResults = await Promise.all(imgPromises);

                const pizzaImgData = {};

                imgResults.forEach((result) => {
                    const url = URL.createObjectURL(result.imageBlob);
                    pizzaImgData[result.id] = url;
                });

                setPizzaImages(pizzaImgData);
            } catch (err) {
                console.log('err img');
            }
            finally {
                setImagesLoading(false);
            }
        }
        fetchImages();
    }, [pizzas])


    return (
        <Grid container spacing={2}>
            {pizzas.map((pizza) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={pizza.id}>
                    <Card sx={{ maxWidth: 700, minHeight: 440, display: 'flex', flexDirection: 'column' }}>
                        {imagesLoading ? (
                            <Skeleton variant="rect" height={250} />
                        ) : (
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={pizzaImages[[pizza.id]]}
                                    alt={pizza.imageFileName}
                                />
                        )}
                        
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {pizza.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pizza.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: 'flex-end'} }>
                            <Button component={Link} to={`/catalogue/${pizza.slug}`} size="large" color="secondary">
                                <Typography variant="h6">
                                    Select
                                </Typography>
                        </Button>
                    </CardActions>
                    </Card >
                </Grid>
            ))}
        </Grid>
    );
}

export default PizzaItem;