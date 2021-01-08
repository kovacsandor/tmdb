import { CircularProgress, Container, Box, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useSearchMoviesQuery } from '../hook/useSearchMoviesQuery';

export function App(): JSX.Element {

    const [term, setTerm] = useState('matrix')
    const { loading, error, data } = useSearchMoviesQuery(term);

    return (
        <Container maxWidth='sm'>
            <Box sx={{ my: 4 }}>
                <Typography variant='h4' component='h1' gutterBottom>
                    The Movie Database
                </Typography>
            </Box>
            <Box sx={{ my: 4 }}>
                {
                    loading
                        ?
                        <CircularProgress />
                        :
                        data?.movies.search.edges[0].node.title || error?.message
                }
            </Box>
            <Button onClick={(): void => setTerm(term === 'lord of the' ? 'matrix' : 'lord of the')}>
                Set term '{term === 'lord of the' ? 'matrix' : 'lord of the'}'
            </Button>
        </Container>
    )
}
