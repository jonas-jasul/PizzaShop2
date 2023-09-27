import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

export default function Footer() {

    return (
            <Paper sx={{backgroundColor: theme=>theme.palette.primary.main, paddingY: '12px', marginTop: 'auto'}}>
                <Typography variant="h6" align="center" gutterBottom>
                    Made by Jonas Jasulevičius
                </Typography>
                
                <Box align="center">
                    <Link color="inherit" href="https://github.com/jonas-jasul" mx={1}>
                        <GitHubIcon fontSize="large" />
                    </Link>
                    <Link color="inherit" href="https://www.linkedin.com/in/jonas-jasulevicius-648177211/">
                        <LinkedInIcon fontSize="large" />
                    </Link>
                    <Typography>© 2023</Typography>
                </Box>
            </Paper>
    );
}
