import { DocumentNode, gql, QueryHookOptions, QueryResult, useQuery } from '@apollo/client';
import { ISearchMoviesQueryResultData } from '../interface/ISearchMoviesQueryResultData';
import { ISearchMoviesQueryVariables } from '../interface/ISearchMoviesQueryVariables';

export function useSearchMoviesQuery(query: string): QueryResult<ISearchMoviesQueryResultData, ISearchMoviesQueryVariables> {

    const SEARCH_MOVIES: DocumentNode = gql`
        query SearchMovies ($query: String!) {
            searchMovies(page: 1, query: $query) {
                backdrop {
                    small
                }
                genres {
                    id
                    name
                }
                id
                name
                releaseDate
                score
                socialMedia {
                    imdb
                }
                tagline
                votes
            }
        }
    `;

    function getQueryHookOptions(): QueryHookOptions<ISearchMoviesQueryResultData, ISearchMoviesQueryVariables> {

        return {
            skip: !query,
            variables: {
                query,
            },
        }
    }

    return useQuery<ISearchMoviesQueryResultData, ISearchMoviesQueryVariables>(SEARCH_MOVIES, getQueryHookOptions());
}
