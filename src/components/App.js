import '../style/App.css';
import Banner from "./Banner.component";
import RecruitmentSteps from "./RecruitmentSteps.component";
import ContactForm from "./ContactForm.component";
import Menu from "./Menu.component";

// The main view in the application
function App() {
  return (
      <div className="webSiteContainerStyle">
          <Menu/>
          <div className="mainView">
              <Banner/>
              <ContactForm/>
              <RecruitmentSteps/>
          </div>
      </div>
  );
}

export default App;

