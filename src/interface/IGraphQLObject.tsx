export interface IGraphQLObject<T extends string> {
    readonly __typename: T
}
