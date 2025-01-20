import { ButtonStyled } from "./styledButton";
import PropTypes from 'prop-types'; 



const Button = ({ children, $size, $border, $width, $height, $weight, $categoria, click  }) => {


    const handleClick = (event) => {
        console.log("Evento",event)

        event.preventDefault(); 
            click(event);  
        
    };
    return (
        <ButtonStyled
            $size={$size}
            $width={$width}
            $height={$height} 
            $weight = {$weight} 
            $border = {$border}
            $categoria = {$categoria}
            onClick={(event)=>handleClick(event)} 

            >
            {children}
        </ButtonStyled>
    );
};


Button.propTypes = {
    children: PropTypes.node.isRequired, 
    size: PropTypes.string, 
    border: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    categoria: PropTypes.string,
};



export default Button;