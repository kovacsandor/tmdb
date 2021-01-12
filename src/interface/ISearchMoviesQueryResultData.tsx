import { IZooshMovie } from './IZooshMovie';

export interface ISearchMoviesQueryResultData {
    readonly searchMovies: Omit<IZooshMovie, 'similar'>[]
}
