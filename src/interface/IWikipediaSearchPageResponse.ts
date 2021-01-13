import { IWikipediaQueryPages } from './IWikipediaQueryPages'

export interface IWikipediaSearchPageResponse {
    readonly batchcomplete: string
    readonly query: IWikipediaQueryPages
}
