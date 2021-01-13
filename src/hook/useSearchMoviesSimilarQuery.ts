import { DocumentNode, gql, QueryHookOptions, QueryResult, useQuery } from '@apollo/client'
import { ISearchMoviesSimilarQueryResultData } from '../interface/ISearchMoviesSimilarQueryResultData'
import { ISearchMoviesSimilarQueryVariables } from '../interface/ISearchMoviesSimilarQueryVariables'

export function useSearchMoviesSimilarQuery(id: number): QueryResult<ISearchMoviesSimilarQueryResultData, ISearchMoviesSimilarQueryVariables> {

    const SEARCH_MOVIES_SIMILAR: DocumentNode = gql`
        query getMovie ($id: ID!) {
            movie(id: $id) {
                id
                name
                similar {
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
        }        
    `

    function getQueryHookOptions(): QueryHookOptions<ISearchMoviesSimilarQueryResultData, ISearchMoviesSimilarQueryVariables> {

        return {
            variables: {
                id,
            },
        }
    }

    return useQuery<ISearchMoviesSimilarQueryResultData, ISearchMoviesSimilarQueryVariables>(SEARCH_MOVIES_SIMILAR, getQueryHookOptions())
}
