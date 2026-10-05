import Jessica from "../../assets/jessie1.png";
import {
  StyledLabelImage,
  StyledMainImgDisplay,
} from "../../styles/ReusableStyles";
import { useLanguage } from "../../contexts/LanguageProvider";

const MainImg = () => {
  const { language } = useLanguage() || { language: "EN-US" };

  return (
    <>
      <StyledMainImgDisplay>
        <img src={Jessica} alt="Jessica" width={400} />
        <StyledLabelImage>
          {language === "EN-US"
            ? "Currently working at "
            : "Atualmente trabalhando na "}
          💚&nbsp;
          <a
            href="https://www.prothera.com.br/"
            target="_blank"
            rel="noopener noreferrer">
            Prothera
          </a>
          <br />
          {language === "EN-US" ? "And studying CIS at " : "E cursando ADS na "}
          🎓&nbsp;
          <a
            href="https://estacio.br/"
            target="_blank"
            rel="noopener noreferrer">
            Estácio
          </a>
        </StyledLabelImage>
      </StyledMainImgDisplay>
    </>
  );
};

export default MainImg;
