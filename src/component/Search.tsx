import { Box } from '@material-ui/core';
import React, { KeyboardEvent } from 'react';
import { useState } from 'react';
import { useSearchMoviesQuery } from '../hook/useSearchMoviesQuery';
import { ISearchMoviesQueryResultData } from '../interface/ISearchMoviesQueryResultData';
import { IZooshMovie } from '../interface/IZooshMovie';
import { ControlledTextField } from './ControlledTextField';
import { SearchResult } from './SearchResult';

interface IProps {
    readonly searchRelated: (id: number, name: string) => void
    readonly setRelatedInitial: () => void
}

export function Search({ searchRelated, setRelatedInitial }: IProps): JSX.Element {

    const [query, setQuery] = useState<string>('')
    const { loading, error, data } = useSearchMoviesQuery(query);

    function handleOnKeyUp(event: KeyboardEvent<HTMLInputElement>, value: string): void {

        if (event.code === 'Enter') {

            setQuery(value)
            setRelatedInitial()
        }
    }

    function onSearchRelated(id: number, name: string): void {

        setQuery('')
        searchRelated(id, name)
    }

    return (
        <>
            <Box sx={{ my: 4 }}>
                <ControlledTextField
                    label='Search in title'
                    handleOnKeyUp={handleOnKeyUp}
                />
            </Box>
            {
                !!query && (
                    <Box sx={{ my: 4 }}>
                        Search results for the term {query}
                    </Box>
                )
            }
            <Box sx={{ my: 4 }}>
                <SearchResult<ISearchMoviesQueryResultData>
                    getMovies={(data: ISearchMoviesQueryResultData): Omit<IZooshMovie, 'similar'>[] => data.searchMovies}
                    data={data}
                    error={error}
                    loading={loading}
                    searchRelated={onSearchRelated}
                />
            </Box>
        </>
    )
}
