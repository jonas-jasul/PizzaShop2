import React from 'react';
import Navbar from './components/navigation/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { orange, blueGrey, grey, blue } from "@mui/material/colors"
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import './index.css'
import PizzaCatalogue from './pages/pizzaCatalogue.jsx';
import PizzaDetail from './pages/pizzaDetailed';
import MainPage from './pages/mainPage';
import OrderSuccess from './pages/orderSuccess';
import OrderList from './pages/orderList';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { useColorScheme } from "@mui/material/styles";
import Footer from './components/navigation/Footer';

function HeaderLayout() {
    return (
        <>
            <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }} >
                <header>
                    <Navbar themeSwitcher={<ThemeSwitcher />} />
                </header>
                <Outlet />
                <Footer />
            </Box>
        </>

    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },

            {
                path: "/catalogue",
                element: <PizzaCatalogue />,
            },

            {
                path: "/catalogue/:slug",
                element: <PizzaDetail />,
            },
            {
                path: "/orderSuccess/:orderId",
                element: <OrderSuccess />,
            },
            {
                path: "/orderList",
                element: <OrderList />
            }

        ],
    },

]);

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: orange[700],
                },
                secondary: {
                    main: blue[400],
                },
                contrastText: {
                    main: '#000',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: blueGrey[800],
                },
                secondary: {
                    main: orange[700],
                },
                contrastText: {
                    main: "#fff",
                },
            },
        },
    },
});

function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();

    return (

        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? <LightModeIcon sx={{ color: grey[50] }} /> : <Brightness4Icon sx={{ color: blue[500] }} />}

        </Button>
    )
}


function App() {

    return (
        <>
            <CssVarsProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </CssVarsProvider>

        </>
    );
}
export default App;