import { Button, Card, CardActions, CardContent, CardMedia, Chip, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { IZooshMovie } from '../interface/IZooshMovie'
import { GraphQLObjectOnlyData } from '../type/GraphQLObjectOnlyData'
import { MovieDetails } from './MovieDetails'

interface IProps {
    readonly movie: GraphQLObjectOnlyData<Omit<IZooshMovie, 'similar'>>
    readonly searchRelated: (id: number, name: string) => void
}

export function Movie({ movie: { backdrop, genres, id, name, releaseDate, score, socialMedia: { imdb } }, searchRelated }: IProps): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)

    const useStyles = makeStyles({
        chips: {
            display: 'flex',
            marginLeft: '-4px',
            flexWrap: 'wrap',
            '& > *': {
                margin: '4px',
            },
        },
        root: {
            margin: '5px',
            maxWidth: 187,
        },
        media: {
            height: 140,
        },
    })

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            {
                !!backdrop && (
                    <CardMedia
                        className={classes.media}
                        image={backdrop.small}
                        title='Contemplative Reptile'
                    />
                )
            }
            <CardContent>
                <Typography
                    gutterBottom={true}
                    variant='h5'
                    component='div'
                >
                    {name} ({score})
                </Typography>
                <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                >
                    {new Date(releaseDate).getFullYear()}
                </Typography>
                <div className={classes.chips} >
                    {genres.map(({ id, name }) =>
                        <Chip
                            color='primary'
                            key={id}
                            label={name}
                            variant='outlined'
                        />
                    )}
                </div>
            </CardContent>
            <CardActions>
                <Button
                    onClick={(): void => setOpen(true)}
                    size='small'
                >
                    Learn More
                    </Button>
                <Button
                    onClick={(): void => searchRelated(id, name)}
                    size='small'
                >
                    Related
                </Button>
            </CardActions>
            {
                open && (
                    <MovieDetails
                        imdb={imdb}
                        name={name}
                        onClose={() => setOpen(false)}
                    />
                )
            }
        </Card>
    )
}
