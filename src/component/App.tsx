import { Alert, Box, CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import React, { KeyboardEvent, useState } from 'react';
import { useSearchMoviesQuery } from '../hook/useSearchMoviesQuery';
import { IEdgeTMBD } from '../interface/IEdgeTMBD';
import { getMockSearchMoviesQueryResultData } from '../mock/getMockSearchMoviesQueryResultData';
import { GraphQLObjectOnlyData } from '../type/GraphQLObjectOnlyData';
import { ControlledTextField } from './ControlledTextField';
import { Movie } from './Movie';

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
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    spacing={5}
                >
                    {
                        getMockSearchMoviesQueryResultData().movies.search.edges.map((edge: GraphQLObjectOnlyData<IEdgeTMBD>): JSX.Element =>
                            <Movie edge={edge} />
                        )
                    }
                </Grid>
                {
                    !loading && !!data && data.movies.search.edges[0].node.title
                }
                {
                    !loading && !data && !!error && <Alert severity='error'>{error.message}</Alert>
                }
            </Box>
        </Container>
    )
}
