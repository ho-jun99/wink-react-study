import react from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Story from "./pages/Story";
import Intro from "./pages/Intro";
import Interpret from "./pages/Interpret";
import Production from "./pages/Production";
import Credit from './pages/Credit'
import Header from './components/common/Header'

const AppStyle = {
  padding : "1%",
}


function App (){
  return (
  <div style={AppStyle}>
    
    <BrowserRouter>
    <Header/>
    <hr/>
      <Routes>
          <Route exact path="/intro" element={<Intro/>}/>
          <Route exact path="/story" element={<Story/>}/>
          <Route exact path="/interpret" element={<Interpret/>}/>
          <Route exact path="/production" element={<Production/>}/>
          <Route exact path="/credit" element={<Credit/>}/>
      </Routes>
    </BrowserRouter>  
  </div>
  );
}

export default App;

