import React, { useState, useEffect } from 'react';

function MovieDetail({ match }) {
    useEffect(() => {
        fetchFilm();
        fetchComments();
    }, []);
    const [film, setFilm] = useState(null);
    const [comments, setComments] = useState(null);

    const fetchFilm = async () => {
        const data = await fetch(
            `http://209.250.229.174:3001/api/movies/${match.params.id}`);
        const jsonFilm = await data.json();
        setFilm(jsonFilm.movies);
        console.log(jsonFilm.movies);

    }
    const fetchComments = async () => {
        const data = await fetch(
            `http://localhost:3001/api/movies/comments/${match.params.id}`);
        const jsonComments = await data.json();
        setComments(jsonComments);
        console.log(jsonComments)
    }
    if (!film) return <div> loading... </div>
    return (
        <div>
            <h1>{film.title}</h1>
            <p>{film.plot} {film.imdb.rating}</p>
        </div>

    );
}

export default MovieDetail;