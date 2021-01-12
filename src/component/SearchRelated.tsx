import { Box } from '@material-ui/core';
import React from 'react';
import { useSearchMoviesSimilarQuery } from '../hook/useSearchMoviesSimilarQuery';
import { ISearchMoviesSimilarQueryResultData } from '../interface/ISearchMoviesSimilarQueryResultData';
import { IZooshMovie } from '../interface/IZooshMovie';
import { SearchResult } from './SearchResult';

interface IProps {
    readonly id: number
    readonly name: string
    readonly searchRelated: (id: number, name: string) => void
}

export function SearchRelated({ id, name, searchRelated }: IProps): JSX.Element {

    const { loading, error, data } = useSearchMoviesSimilarQuery(id);

    return (
        <>
            <Box sx={{ my: 4 }}>
                Movies related to {name}
            </Box>
            <Box sx={{ my: 4 }}>
                <SearchResult<ISearchMoviesSimilarQueryResultData>
                    getMovies={(data: ISearchMoviesSimilarQueryResultData): Omit<IZooshMovie, 'similar'>[] => data.movie.similar}
                    data={data}
                    error={error}
                    loading={loading}
                    searchRelated={searchRelated}
                />
            </Box>
        </>
    )
}
