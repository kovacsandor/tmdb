import { IGraphQLObject } from './IGraphQLObject';
import { IZooshBackdrop } from './IZooshBackdrop';
import { IZooshGenre } from './IZooshGenre';
import { IZooshSocialMedia } from './IZooshSocialMedia';


export interface IZooshMovie extends IGraphQLObject<'Movie'> {
    readonly backdrop: IZooshBackdrop;
    readonly genres: IZooshGenre[];
    readonly id: string;
    readonly name: string;
    readonly releaseDate: string;
    readonly score: number;
    readonly socialMedia: IZooshSocialMedia;
    readonly tagline: string;
    readonly votes: number;
}
