import { IGraphQLObject } from './IGraphQLObject'

export interface IZooshGenre extends IGraphQLObject<'Genre'> {
    readonly id: string
    readonly name: string
}
