import { IGraphQLObject } from './IGraphQLObject';
import { ISearchTMBD } from './ISearchTMBD';

export interface IMoviesTMBD extends IGraphQLObject<'Movies'> {
    readonly search: ISearchTMBD
}
