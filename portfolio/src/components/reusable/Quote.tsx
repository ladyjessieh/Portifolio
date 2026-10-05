import Quotes from "../../assets/Quotes.svg";
import { useLanguage } from "../../contexts/LanguageProvider";
import { StyledQuote } from "../../styles/ReusableStyles";

const Quote = () => {
  const { language } = useLanguage() || { language: "EN-US" };
  return (
    <>
      <StyledQuote>
        <div className="inner-quote">
          <div className="phrase-quote">
            <img className="begin-quote" src={Quotes} alt="quotes" />
            {language === "EN-US" ? (
              <p>Do what you ought and put yourself into what you are doing.</p>
            ) : (
              <p>Faz o que deves e está no que fazes.</p>
            )}
            <img className="end-quote" src={Quotes} alt="quotes" />
          </div>
          <div className="phrase-quote behind-quote">
            {language === "EN-US" ? (
              <p>- St. Josemaría Escrivá</p>
            ) : (
              <p>- São Josemaria Escrivá</p>
            )}
          </div>
        </div>
      </StyledQuote>
    </>
  );
};

export default Quote;
