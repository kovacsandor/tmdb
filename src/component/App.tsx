import { Box, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Search } from './Search';
import { SearchRelated } from './SearchRelated';

export function App(): JSX.Element {

    const [relatedId, setRelatedId] = useState<number | null>(null)
    const [relatedName, setRelatedName] = useState<string>('')

    function searchRelated(id: number, name: string): void {

        setRelatedId(id)
        setRelatedName(name)
    }

    function setRelatedInitial(): void {

        setRelatedId(null)
        setRelatedName('')
    }

    return (
        <Container maxWidth='sm'>
            <Box sx={{ my: 4 }}>
                <Typography variant='h4' component='h1' gutterBottom>
                    The Movie Database
                </Typography>
            </Box>
            <Search
                searchRelated={searchRelated}
                setRelatedInitial={setRelatedInitial}
            />
            {
                !!relatedId && !!relatedName && (
                    <SearchRelated
                        id={relatedId}
                        name={relatedName}
                        searchRelated={searchRelated}
                    />
                )
            }
        </Container>
    )
}
