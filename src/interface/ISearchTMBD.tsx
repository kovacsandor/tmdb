import { IEdgeTMBD } from './IEdgeTMBD';
import { IGraphQLObject } from './IGraphQLObject';

export interface ISearchTMBD extends IGraphQLObject<'MovieConnection'> {
    readonly edges: IEdgeTMBD[]
    readonly totalCount: number
}
