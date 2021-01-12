import { ApolloError } from '@apollo/client/errors';
import { Alert, CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { IZooshMovie } from '../interface/IZooshMovie';
import { Movie } from './Movie';

interface IProps<T> {
    readonly data: T | undefined
    readonly getMovies: (data: T) => Omit<IZooshMovie, 'similar'>[]
    readonly searchRelated: (id: number, name: string) => void
    readonly error: ApolloError | undefined
    readonly loading: boolean
}

export function SearchResult<T>({ getMovies, data, error, loading, searchRelated }: IProps<T>): JSX.Element {

    return (
        <>
            {
                loading && <CircularProgress />
            }
            {
                !loading && !!data && (
                    <Grid
                        container
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='stretch'
                        spacing={5}
                    >
                        {
                            getMovies(data).map((movie: Omit<IZooshMovie, 'similar'>): JSX.Element =>
                                <Movie
                                    movie={movie}
                                    searchRelated={searchRelated}
                                />
                            )
                        }
                    </Grid>
                )
            }
            {
                !loading && !data && !!error && <Alert severity='error'>{error.message}</Alert>
            }
        </>
    )
}
