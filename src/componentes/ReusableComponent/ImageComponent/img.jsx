import styled from "styled-components";

const ImageStyled = styled.img`
    max-width:${(props) => props.$maxWidth || "100%"};
    width:${(props) => props.$width || "100%"};
    height:${(props) => props.$height || "100%"};
    background: rgba(0, 0, 0, 0.1);    
    margin:42px 51px;
    box-sizing: border-box;
`

const Image = (props) => {
    return (
        <ImageStyled
        $maxWidth={props.maxWidth} 
        $width={props.width} 
        $height={props.height} 
        src={props.src} 
        alt={props.alt} />
    )
}

export default Image