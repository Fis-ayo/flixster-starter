import "../MovieList/MovieCard.css"
import MovieModal from "../MovieModal/MovieModal";
import { movieDetails } from "../../services/moviesAPI";
import {useState} from 'react'
import { FaEye, FaStar} from 'react-icons/fa'


const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';



export default function MovieCard({item, onClick}) {
    return (
        <>
        <div className="movie-card" onClick={onClick}>
            <img 
                className="poster" 
                src={`${IMG_BASE_URL}${item.poster_path}`} 
                alt={"Cover of " + item.title}
            />

            <div className="card-details">
                <h2>{item.title}</h2>
                <p>Rating: {item.vote_average}</p>
                <div className="card-icons">
                    <FaEye className="icon watched-icon" />
                    <FaStar className="icon favorite-icon" />
                </div>
            </div>
        </div>
        </>
    );
}