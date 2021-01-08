import { IGraphQLObject } from './IGraphQLObject';
import { INodeTMBD } from './INodeTMBD';

export interface IEdgeTMBD extends IGraphQLObject<'MovieEdge'> {
    readonly node: INodeTMBD
}
