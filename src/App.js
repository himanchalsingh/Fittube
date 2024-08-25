import './App.css';
import Program from './componanats/Program/Program';
import Reason from './componanats/Reason/Reason';
import Testi from './componanats/Testimonials/Testi';
import Footer from './componanats/footer/Footer';

import Hero from './componanats/hersosection/Hero'
import Join from './componanats/join/Join';
import Plan from './componanats/plans/Plan';
function App() {
  return (
    <div className="App">
    <Hero/>
    <Program/>
    <Reason/>   
    <Plan/>
    <Testi/>
    <Join/>
    <Footer/>
     </div>
  );
}

export default App;
