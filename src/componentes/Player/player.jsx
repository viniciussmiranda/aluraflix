import { useParams } from "react-router-dom";
import style from "./player.module.css"
import { VideosContext } from "../Context/videoContext";
import { useContext } from "react";

const Player = () => {
    const params = useParams(); 
    const {video} = useContext(VideosContext);

    const videoFilter = video.find((video) => {return video.id === Number( params.id)})
    console.log("Componente Player",videoFilter);

    return (
        <div className={style.player} >
            <h1>Player: {params.id}</h1>
            
            <iframe
                width="60%"
                height="400vh"
                src={videoFilter.src}
                allowFullScreen
            ></iframe>
            </div>
           
    )
}   

export default Player