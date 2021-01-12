import { IZooshMovie } from './IZooshMovie';

export interface ISearchMoviesSimilarQueryResultData {
    readonly movie: Pick<IZooshMovie, 'id' | 'name' | 'similar'>
}
