import { IGraphQLObject } from './IGraphQLObject';

export interface IExternalIdsTMBD extends IGraphQLObject<'ExternalIDS'> {
    readonly imdb: string
}
