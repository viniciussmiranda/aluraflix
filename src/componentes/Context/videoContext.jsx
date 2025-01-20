
import React,{ createContext, useState } from "react"
import videos from "../../Mocks/videos.json"
export const VideosContext = createContext() 

export default function VideoProvider({children}){
    const [video, setVideo] = useState(videos)

    return(
        <VideosContext.Provider value={{video, setVideo}}>
            {children}
        </VideosContext.Provider>
    )
}
