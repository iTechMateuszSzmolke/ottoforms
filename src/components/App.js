import '../style/App.css';
import Banner from "./Banner.component";
import RecruitmentSteps from "./RecruitmentSteps.component";
import ContactForm from "./ContactForm.component";
import Menu from "./Menu.component";
import {useTranslation} from "react-i18next";
import Footer from "./Footer";

// The main view in the application
function App() {
    const {i18n, t} = useTranslation()

    return (
      <div className="webSiteContainerStyle">
          <Menu i18n={i18n} t={t}/>
          <div className="mainView">
              <Banner t={t}/>
              <ContactForm t={t}/>
              <RecruitmentSteps t={t}/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;

