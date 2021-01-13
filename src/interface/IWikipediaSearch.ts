export interface IWikipediaSearch {
    readonly ns: number
    readonly title: string
    readonly pageid: number
    readonly size: number
    readonly wordcount: number
    readonly snippet: string
    readonly timestamp: string
}
