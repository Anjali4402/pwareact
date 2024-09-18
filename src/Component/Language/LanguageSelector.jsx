import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="danger" onClick={() => changeLanguage("en")}>
          English
        </Button>
        <Button variant="primary" onClick={() => changeLanguage("hi")}>
          हिन्दी
        </Button>
        <Button variant="success" onClick={() => changeLanguage("kn")}>
          ಕನ್ನಡ
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LanguageSelector;
