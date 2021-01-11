import { IGraphQLObject } from '../interface/IGraphQLObject';

export type GraphQLObjectOnlyData<T> = Omit<{
    readonly [P in keyof T]: (
        T[P] extends (infer U)[]
        ?
        (
            U extends IGraphQLObject<string>
            ?
            GraphQLObjectOnlyData<U>[]
            :
            U[]
        )
        :
        T[P] extends IGraphQLObject<string>
        ?
        GraphQLObjectOnlyData<T[P]>
        :
        T[P]
    )
}, '__typename'>
