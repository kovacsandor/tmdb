import { IGraphQLObject } from './IGraphQLObject';

export interface IGenreTMBD extends IGraphQLObject<'Genre'> {
    readonly id: number
    readonly name: string
}
