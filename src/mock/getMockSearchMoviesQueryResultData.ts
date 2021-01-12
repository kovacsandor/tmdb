import { ISearchMoviesQueryResultData } from '../interface/ISearchMoviesQueryResultData';

export function getMockSearchMoviesQueryResultData(): ISearchMoviesQueryResultData {
    return {
        searchMovies: [
            {
                backdrop: {
                    small: 'https://image.tmdb.org/t/p/w300/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
                    __typename: 'Backdrop'
                },
                genres: [
                    {
                        id: '28',
                        name: 'Action',
                        __typename: 'Genre'
                    },
                    {
                        id: '878',
                        name: 'Science Fiction',
                        __typename: 'Genre'
                    }
                ],
                id: '603',
                name: 'The Matrix',
                releaseDate: '1999-03-30T00:00:00.000Z',
                score: 8.1,
                socialMedia: {
                    imdb: null,
                    __typename: 'SocialMedia'
                },
                tagline: 'Welcome to the Real World.',
                votes: 18439,
                __typename: 'Movie'
            }
        ]
    }
}
