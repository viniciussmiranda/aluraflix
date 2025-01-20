import { HomeMainStyled,HomeStyled, } from "./styledHome.js"
import Banner from "../componentes/Banner/banner.jsx"
import bannerImagem from "../componentes/Banner/imgbaner/bannerAlura.png"
import Categoria from "../componentes/ReusableComponent/CategoriaMovie/categoriaMovie.jsx"
import { useEffect, useState } from "react"
import ModalEdit from "../componentes/ModalEdit/edit.jsx"


const Home = () => {
    // outra forma de cocntrolar o estado do modal


    const [editVideos, setEditVideos] = useState([null]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
  console.log("App editVideos apos declarar",editVideos);
 
  useEffect(() => {
    if (editVideos) {
      console.log("UseEffect editVideos",editVideos);
    }
  },[editVideos])
 

  
  
  const handleEdit = (video) => {  
    setEditVideos(video); 
    setIsModalOpen(true); 

    console.log("HOMEVideo para editar: ", video);
};

const handleCloseModal = () => { 
    setIsModalOpen(false);
    setEditVideos(null);
};


    return (
        <HomeStyled > 
            
                  
            <Banner height="832px" backgroundImage={bannerImagem} />
            <HomeMainStyled>
               <Categoria edit={handleEdit} />
               {isModalOpen && ( 
                <ModalEdit isOpen={isModalOpen} onClose={handleCloseModal} videoEdit={editVideos} />
            )}
            </HomeMainStyled>
        </HomeStyled>
    )
}

export default Home