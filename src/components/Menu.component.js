import '../style/Menu.style.css';
import '../dictionary/i18next';
import {useState} from "react";

const Menu = (props) => {
    const {i18n, t} = props;

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div className={'menu-container'}>

            <div className={'left-menu'}>
                <img className={"logo-image-menu"} src={'https://bankomaty.ottolandingpages.pl/images/OTTO_Logo.png'}/>
            </div>

            <div className={'right-menu'}>
                <div className="lang-menu">
                    <div className={'languages-container-img-and-string'}>
                        <img className={"image-language-before-name"} src={t("Languages.imageLanguages")}/>
                        <div className="selected-lang">{t("Languages.stringLanguages")}</div>
                    </div>

                    <ul>
                        <li>
                            <a href="#" className="pl" onClick={() => handleChangeLanguage('pl')}>PL</a>
                        </li>
                        <li>
                            <a href="" className="ua" onClick={() => handleChangeLanguage('ua')}>UA</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Menu;
