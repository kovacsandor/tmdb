import { IGraphQLObject } from './IGraphQLObject';

export interface IZooshSocialMedia extends IGraphQLObject<'SocialMedia'> {
    readonly imdb: string | null
}
