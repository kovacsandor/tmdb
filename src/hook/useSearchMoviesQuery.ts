import { DocumentNode, gql, QueryHookOptions, QueryResult, useQuery } from '@apollo/client';
import { ISearchMoviesQueryResultData } from '../interface/ISearchMoviesQueryResultData';
import { ISearchMoviesQueryVariables } from '../interface/ISearchMoviesQueryVariables';


export function useSearchMoviesQuery(term: string): QueryResult<ISearchMoviesQueryResultData, ISearchMoviesQueryVariables> {

    const SEARCH_MOVIES: DocumentNode = gql`
        query ($term: String!) {
            movies {
                search(term: $term, first: 10) {
                    edges {
                        node {
                            backdrop(size: W300)
                            details {
                                genres {
                                    id
                                    name
                                }
                                tagline
                            }
                            externalIds {
                                imdb
                            }
                            id
                            numberOfRatings
                            rating
                            releaseDate
                            title
                        }
                    }
                    totalCount
                }
            }
        }
    `;

    function getQueryHookOptions(): QueryHookOptions<ISearchMoviesQueryResultData, ISearchMoviesQueryVariables> {

        return {
            skip: !term,
            variables: {
                term,
            },
        }
    }

    return useQuery<ISearchMoviesQueryResultData, ISearchMoviesQueryVariables>(SEARCH_MOVIES, getQueryHookOptions());
}
