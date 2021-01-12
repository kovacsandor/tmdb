import { IGraphQLObject } from '../interface/IGraphQLObject';

export interface IZooshBackdrop extends IGraphQLObject<'Backdrop'> {
    readonly small: string;
}
