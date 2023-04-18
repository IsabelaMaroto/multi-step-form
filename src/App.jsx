import '../src/styles/app.css';
import { Step1 } from './components/step1/step1';
import HorizontalNonLinearStepper from './components/stepper/stepper';
function App() {
  const next = document.getElementById('#next');

  return (
    <div className="App">
      <div className='background'>
        <div className='stepper'>
          <HorizontalNonLinearStepper next={next}/>
        </div>
      </div>
      <div className='boxStep'>
        <Step1/>
      </div>
    </div>
  )
}

export default App
