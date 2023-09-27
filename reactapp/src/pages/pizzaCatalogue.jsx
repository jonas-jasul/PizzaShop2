import React from 'react';
import PizzaItem from '../components/catalogue/PizzaItem';
import Box from '@mui/material/Box';

function PizzaCatalogue() {
    return (
        <Box sx={{
            display: 'flex',
            m: 4
        }}>
            <PizzaItem />

      </Box>
  );
}

export default PizzaCatalogue;