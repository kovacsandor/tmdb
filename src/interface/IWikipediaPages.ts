import { IWikipediaPage } from './IWikipediaPage'

export interface IWikipediaPages {
    readonly [pageid: string]: IWikipediaPage
}
