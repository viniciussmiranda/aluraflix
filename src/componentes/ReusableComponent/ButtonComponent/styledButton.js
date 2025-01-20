import styled from "styled-components";

const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ $weight }) => $weight || "normal"};
    font-size: ${({ $size }) => $size || "2rem"};
    width: ${({ $width }) => $width || "100px"};
    height: ${({ $height }) => $height || "40px"};
    font-weight: ${({ $weight }) => $weight || "normal"};
    border: ${({ $border }) => $border ? `solid 1px ${$border}` : "none"};
    border-radius: ${({ $borderRadius }) => $borderRadius || "15px"};
    box-shadow: ${({ $border }) => $border ? `0px 0px 10px 1px ${$border}` : "none"};
    margin-top: ${({ $marginTop }) => $marginTop || "0"};
    margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
    margin: ${({ $margin }) => $margin || "0"};
    padding: ${({ $padding }) => $padding || "0"};
    cursor: pointer;

    background-color: ${({ $categoria }) => {
        switch ($categoria) {
            case "Front End":
                return "rgba(107, 209, 255, 1)";
            case "Back End":
                return "rgba(0, 200, 111, 1)";
            case "Mobile":
                return "rgba(255, 186, 5, 1)";
            default:
                return "black";
        }
    }};

    color: ${({ $categoria }) => {
        switch ($categoria) {
            case "Frontend":
                return "white";
            case "Backend":
                return "white";
            case "Mobile":
                return "white";
            default:
                return "white";
        }
    }};

    font-family: 'Poppins', sans-serif;
    line-height: 24px;
    text-align: center;
    text-underline-position: under;
    text-decoration-skip-ink: none;

    transition: transform 0.2s ease;

    &:active {
        transform: scale(0.95); 
    }
`;

export { ButtonStyled };
