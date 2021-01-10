import { Alert, Box, CircularProgress, Container, Typography } from '@material-ui/core';
import React, { KeyboardEvent, useState } from 'react';
import { useSearchMoviesQuery } from '../hook/useSearchMoviesQuery';
import { ControlledTextField } from './ControlledTextField';

export function App(): JSX.Element {

    const [term, setTerm] = useState('')
    const { loading, error, data } = useSearchMoviesQuery(term) || undefined;

    function handleOnKeyUp(event: KeyboardEvent<HTMLInputElement>, value: string): void {

        if (event.code === 'Enter') {

            setTerm(value)
        }
    }

    return (
        <Container maxWidth='sm'>
            <Box sx={{ my: 4 }}>
                <Typography variant='h4' component='h1' gutterBottom>
                    The Movie Database
                </Typography>
            </Box>
            <Box sx={{ my: 4 }}>
                <ControlledTextField
                    label='Search in title'
                    handleOnKeyUp={handleOnKeyUp}
                />
            </Box>
            <Box sx={{ my: 4 }}>
                {
                    loading && <CircularProgress />
                }
                {
                    !loading && !!data && data.movies.search.edges[0].node.title
                }
                {
                    !loading && !!error && <Alert severity="error">{error.message}</Alert>
                }
            </Box>
        </Container>
    )
}
