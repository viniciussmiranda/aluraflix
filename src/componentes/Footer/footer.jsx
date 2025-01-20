import styled from "styled-components";
import Image from "../ReusableComponent/ImageComponent/img.jsx";
import imgLogo from "../../assets/img/logo/logoAluraFlix.png";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 125px;
  padding: 20px 0; 
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  border-top: 7px solid rgba(34, 113, 209, 0.2);
  font-family: 'Poppins', sans-serif;
`;

const FooterText = styled.p`
  margin-top: 5px; 
  font-size: 14px; 
  font-family: 'Poppins', sans-serif; 
  text-align: center; /
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Image maxWidth="168px" height="40px" src={imgLogo} alt="Logo AluraFlix" />
      <FooterText>Desenvolvido por Vinicius Miranda</FooterText>
    </FooterStyled>
  );
};

export default Footer;
