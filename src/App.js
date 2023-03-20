import './App.css';
import Form from "./Form";
import Banner from "./Bannder";
import StepContainer from "./StepContainer";

function App() {
  return (
      <div className="site">
          <div className="content-wrapper">
              <Banner/>
              <Form/>
              <StepContainer/>
          </div>
      </div>
  );
}

export default App;

