import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { IWikipediaSearchResponse } from '../interface/IWikipediaSearchResponse'
import { IWikipediaSearchPageResponse } from '../interface/IWikipediaSearchPageResponse'

interface IProps {
    readonly imdb: string | null
    readonly name: string
    readonly onClose: () => void
}

export function MovieDetails({ imdb, name, onClose }: IProps): JSX.Element {

    const [searchResponse, setSearchResponse] = useState<IWikipediaSearchResponse>()
    const [searchPageResponse, setSearchPageResponse] = useState<IWikipediaSearchPageResponse>()

    useEffect(
        (): void => {

            function getWikipediaPageSearchUrl(): string {

                return `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURI(name)}&utf8=&format=json&origin=*`
            }

            async function fetch(): Promise<void> {

                const { data }: AxiosResponse<IWikipediaSearchResponse> = await axios.get(getWikipediaPageSearchUrl())

                setSearchResponse(data)
            }

            fetch()
        },
        [name],
    )

    useEffect(
        (): void => {

            function getWikipediaSearchUrl(pageid: number): string {

                return `https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=${pageid}&inprop=url&utf8=&format=json&origin=*`
            }

            async function fetch(pageid: number): Promise<void> {

                const { data }: AxiosResponse<IWikipediaSearchPageResponse> = await axios.get(getWikipediaSearchUrl(pageid))

                setSearchPageResponse(data)
            }

            if (!!searchResponse) {

                fetch(searchResponse.query.search[0].pageid)
            }
        },
        [searchResponse],
    )

    return (
        <Dialog
            open={true}
            onClose={onClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>
                {name}
            </DialogTitle>
            <DialogContent>
                {
                    !searchResponse
                        ?
                        <CircularProgress />
                        :
                        <DialogContentText
                            id='alert-dialog-description'
                            dangerouslySetInnerHTML={{ __html: `${searchResponse.query.search[0].snippet} ...` || '' }}
                        />
                }
            </DialogContent>
            <DialogActions>
                <Button
                    disabled={!searchResponse || !searchPageResponse}
                    onClick={() => window.open(searchPageResponse?.query.pages[searchResponse?.query.search[0].pageid || ''].fullurl || '', '_blank')}
                >
                    Wikipedia
                </Button>
                <Button
                    disabled={!imdb}
                    onClick={() => window.open(`https://www.imdb.com/title/${imdb}/`, '_blank')}
                >
                    IMDB
                </Button>
            </DialogActions>
        </Dialog>
    )
}
