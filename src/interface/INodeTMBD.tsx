import { IGraphQLObject } from './IGraphQLObject';
import { IExternalIdsTMBD } from './IExternalIdsTMBD';
import { IDetailedMovieTMBD } from './IDetailedMovieTMBD';

export interface INodeTMBD extends IGraphQLObject<'Movie'> {
    readonly backdrop: string | null
    readonly details: IDetailedMovieTMBD
    readonly externalIds: IExternalIdsTMBD
    readonly id: number
    readonly numberOfRatings: number
    readonly rating: number
    readonly releaseDate: string
    readonly title: string
}
