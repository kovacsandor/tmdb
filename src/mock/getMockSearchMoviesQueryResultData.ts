import { ISearchMoviesQueryResultData } from '../interface/ISearchMoviesQueryResultData';
import { GraphQLObjectOnlyData } from '../type/GraphQLObjectOnlyData';

export function getMockSearchMoviesQueryResultData(): GraphQLObjectOnlyData<ISearchMoviesQueryResultData> {
    return {
        movies: {
            search: {
                edges: [
                    {
                        node: {
                            backdrop: 'https://image.tmdb.org/t/p/w500/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
                            details: {
                                genres: [
                                    {
                                        id: 28,
                                        name: 'Action'
                                    },
                                    {
                                        id: 878,
                                        name: 'Sci-fi'
                                    },
                                ],
                                tagline: 'The return of the matrix'
                            },
                            externalIds: {
                                imdb: 'tt0133093'
                            },
                            id: 603,
                            numberOfRatings: 12345678,
                            rating: 8.1,
                            releaseDate: '1999-03-30',
                            title: 'The Matrix',
                        }
                    },
                ],
                totalCount: 45
            }
        }
    }
}
