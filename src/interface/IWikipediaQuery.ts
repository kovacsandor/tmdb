import { IWikipediaSearch } from './IWikipediaSearch'
import { IWikipediaSearchInfo } from './IWikipediaSearchInfo'

export interface IWikipediaQuery {
    readonly searchinfo: IWikipediaSearchInfo
    readonly search: IWikipediaSearch[]
}
