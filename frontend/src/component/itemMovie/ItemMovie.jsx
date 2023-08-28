import { Button, Card, CardContent, CardMedia, Typography,Link } from '@mui/material'
import React, { useEffect, useState } from 'react'

import './ItemMovie.css'

const ItemMovie = (props) => {

        const [peliculaID, setPeliculaID] = useState({}) 
        const ID = props.pelicula.imdbID;
        const KEY = "c9f04fa4"

    useEffect (() => {

        fetch (`http://www.omdbapi.com/?apikey=c9f04fa4&i=${ID}`) 
            .then ((res) => res.json()) 
            .then ((res) => {
                setPeliculaID(res)
                console.log(peliculaID)
            })
            .catch ((error) => console.log(error))
        },[])
    

    return (
        peliculaID && 
        <Card sx={{ margin: "10px"}}>
            <CardMedia
                key="sdfgsdf"
                component="img"
                image={peliculaID.Poster}
                className='CardMovie.css'
                alt='descripcion'
               
            >
            </CardMedia>
            <CardContent>
                <Typography variant="h5"> {peliculaID.Title} ({peliculaID.Year}) </Typography>
                <Typography variant="p">{peliculaID.Plot}</Typography>
                <br/>
                <Button variant='contained' sx={{ mt: "15px" }}> VER PELICULA</Button>
                <Button variant='contained' sx={{ mt: "15px", marginLeft: "10px" }}> VER DETALLES</Button>
            </CardContent>

        </Card>

    )
} 

export default ItemMovie