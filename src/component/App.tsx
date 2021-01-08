import { Container, Box, Typography } from '@material-ui/core';
import React from 'react';

export function App(): JSX.Element {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    The Movie Database
                </Typography>
            </Box>
        </Container>
    )
}
