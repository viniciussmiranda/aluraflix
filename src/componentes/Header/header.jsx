import { HeaderStyled, NavContainer } from "./styled"
import Image from "../ReusableComponent/ImageComponent/img.jsx"
import Button from "../ReusableComponent/ButtonComponent/button.jsx"
import imgLogo from "../../assets/img/logo/logoAluraFlix.png"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <HeaderStyled>
                <Image maxWidth="168px"  height="40px" src={imgLogo} alt="Logo AluraFlix" />
                   
                <NavContainer>
                <Button 
                $width="180px" 
                $height="54px" 
                $size="16px" 
                $weight="bold" 
                $color="rgba(34, 113, 209, 1)"
                $border="rgba(34, 113, 209, 1)"
                $backgroundColor="#000000"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                ><Link to="/" style={{textDecoration:"none", color:"white",fontSize:"25px"}}  >Home</Link></Button>


                <Button  
                $width="180px" 
                $height="54px" 
                $weight="bold"
                $color="rgba(255, 255, 255, 1)"
                $border="rgba(255, 255, 255, 1)"
                $backgroundColor="#000000"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                
                                
                ><Link style={{textDecoration:"none", color:"white",fontSize:"25px"}}  to="/videos">Novo Vídeo</Link></Button>
                </NavContainer>
                
            </HeaderStyled>
        </>
    )
}

export default Header