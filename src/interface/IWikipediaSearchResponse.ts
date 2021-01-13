import { IWikipediaContinue } from './IWikipediaContinue'
import { IWikipediaQuery } from './IWikipediaQuery'

export interface IWikipediaSearchResponse {
    readonly batchcomplete: string
    readonly continue: IWikipediaContinue
    readonly query: IWikipediaQuery
}
