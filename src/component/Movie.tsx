import { Chip } from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { IEdgeTMBD } from '../interface/IEdgeTMBD';
import { GraphQLObjectOnlyData } from '../type/GraphQLObjectOnlyData';

interface IProps {
    readonly edge: GraphQLObjectOnlyData<IEdgeTMBD>
}

export function Movie({ edge }: IProps): JSX.Element {

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
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {
                !!edge.node.backdrop && (
                    <CardMedia
                        className={classes.media}
                        image={edge.node.backdrop}
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
                    {edge.node.title}
                </Typography>
                <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                >
                    {edge.node.releaseDate.slice(0, 4)}
                </Typography>
                <div className={classes.chips} >
                    {edge.node.details.genres.map(({ id, name }) =>
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
                <Button size='small'>Learn More</Button>
                <Button size='small'>Related</Button>
            </CardActions>
        </Card>
    )
}
