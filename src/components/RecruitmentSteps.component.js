import '../style/RecruitmentSteps.style.css';
import '../dictionary/i18next';

const RecruitmentSteps = (props) => {

    const {t} = props

    return (
        <div className="main-recruitment-steps-wrappers">
            <div className="single-job-offer-container">
                <div className="recruitment-steps-wrapper-image-container"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_6.png" alt="" className="recruitment-steps-wrapper-image"/></div>
                <div className="recruitment-steps-title"><h1>{t("Steps-info.Fill-in-the-form")}</h1></div>
                <div className="recruitment-steps-description"><p>{t("Steps-info.Fill-in-the-form-description")}</p></div>
            </div>
            <div className="single-job-offer-container">
                <div className="recruitment-steps-wrapper-image-container"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_3.png" alt="" className="recruitment-steps-wrapper-image"/></div>
                <div className="recruitment-steps-title"><h1>{t("Steps-info.Talk-to-a-consultant")}</h1></div>
                <div className="recruitment-steps-description"><p>{t("Steps-info.Talk-to-a-consultant-description")}</p></div>
            </div>
            <div className="single-job-offer-container">
                <div className="recruitment-steps-wrapper-image-container"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_5.png" alt="" className="recruitment-steps-wrapper-image"/></div>
                <div className="recruitment-steps-title"><h1>{t("Steps-info.Complete-the-formalities")}</h1></div>
                <div className="recruitment-steps-description"><p>{t("Steps-info.Complete-the-formalities-description")}</p></div>
            </div>
            <div className="single-job-offer-container">
                <div className="recruitment-steps-wrapper-image-container"><img src="https://bankomaty.ottolandingpages.pl/images/Zasob_4.png" alt="" className="recruitment-steps-wrapper-image"/></div>
                <div className="recruitment-steps-title"><h1>{t("Steps-info.Work-and-earn")}</h1></div>
                <div className="recruitment-steps-description"><p>{t("Steps-info.Work-and-earn-description")}</p></div>
            </div>


            <div className="competition-container">
                <h2>{t("Offers.Choose-an-offer-for-you")}</h2>

                <div className="recruitment-steps-description"><p className="competition-container-text">{t("Offers.Choose-an-offer-for-you-description")}</p>
                </div>
            </div>

            <div className="competition-container">
            <img src={t("Banner.Logistic-image")} className="competition-container-card" alt=""/>
            </div>

            <div className="competition-container">
            <img src={t("Banner.Production-image")} className="competition-container-card" alt="" />
            </div>

            <div className="competition-container">
            <img src={t("Banner.Automotive-image")} className="competition-container-card" alt="" />
            </div>

        </div>

    )
}


export default RecruitmentSteps;
