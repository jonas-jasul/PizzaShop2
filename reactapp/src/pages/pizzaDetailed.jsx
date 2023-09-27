
import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import PizzaDetails from '../components/catalogue/PizzaDetailedItem';
export default function PizzaDetail() {
    const { slug } = useParams();
    return (
        <Box sx={{
            display: 'flex',
            m: 4
        }}>
            <PizzaDetails slug={slug} />
        </Box>
    )
}