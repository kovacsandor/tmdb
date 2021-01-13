export interface IWikipediaPage {
    readonly pageid: number
    readonly ns: number
    readonly title: string
    readonly contentmodel: string
    readonly pagelanguage: string
    readonly pagelanguagehtmlcode: string
    readonly pagelanguagedir: string
    readonly touched: string
    readonly length: number
    readonly fullurl: string
    readonly editurl: string
    readonly canonicalurl: string
}
