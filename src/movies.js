import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movies() {

    useEffect(() => {
        fetchFilms();
    }, []);

    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        const data = await fetch('http://localhost:3001/api/movies');
        const jsonFilms = await data.json();
        setFilms(jsonFilms.movies);
    }
    return (
        <div>
            {films.map(item => (
                <h1 key={item._id}>
                    <Link to={`/movie/${item._id}`}>{item.title}</Link>
                </h1>
            ))}
        </div>

    );
}

export default Movies;