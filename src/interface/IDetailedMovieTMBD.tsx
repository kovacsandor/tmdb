import { IGraphQLObject } from './IGraphQLObject';
import { IGenreTMBD } from './IGenreTMBD';

export interface IDetailedMovieTMBD extends IGraphQLObject<'DetailedMovie'> {
    readonly genres: IGenreTMBD[]
    readonly tagline: string
}
