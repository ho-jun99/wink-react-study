import react from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Story from "./pages/Story";
import Award from "./pages/Award";
import Intro from "./pages/Intro";
import Interpret from "./pages/Interpret";
import Production from "./pages/Production";
import Credit from './pages/Credit';
import Header from './components/common/Header';

const BodyStyle = {
    display : "flex",
    flexDirection : "column",
    color : "white",
    padding : "2%"
}

const MainStyle ={
  backgroundColor : "black",
  height : "300vh"
}


function App (){
  return (
  <div div style = {MainStyle}>
    <BrowserRouter>
    <Header/>
    <div style={BodyStyle}>
      <Routes>
          <Route exact path="/intro" element={<Intro/>}/>
          <Route exact path="/story" element={<Story/>}/>
          <Route exact path="/award" element={<Award/>}/>
          <Route exact path="/interpret" element={<Interpret/>}/>
          <Route exact path="/production" element={<Production/>}/>
          <Route exact path="/credit" element={<Credit/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>  
  </div>
  );
}

export default App;

