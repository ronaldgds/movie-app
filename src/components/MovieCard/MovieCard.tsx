import React from "react";
import styles from "./MovieCard.module.css"

interface MovieProps {
    name: string;
    genre: string;
    duration: string;
    img_link: string;
}



export default function MovieCard ({ name, genre, duration, img_link}: MovieProps)  {


    return (
        <div className={styles.movie_card}>
            <div className={styles.movie_card_img}>
                <img className={styles.card_img} src={img_link} alt="movie_card" />
            </div>
            <div className="card_details">
            <div >
                <span className={styles.title}>{name}</span>
            </div>
            <div >
                <span className={styles.genre}>{genre}</span>
                </div>
            <div >
                <span className={styles.duration}>{duration} mins</span>
                </div>
            </div>
           
        </div>  
    )
}

