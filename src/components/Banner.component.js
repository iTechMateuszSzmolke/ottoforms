import '../style/Banner.style.css'
import '../dictionary/i18next';

// Main banner in the application
const Banner = (props) => {
    const {t} = props

    return (
        <div className={'main-banner-container'}>
            <img className={'image-banner-container'} src={t("Banner.image-banner")}/>
        </div>
    )
}

export default Banner;
