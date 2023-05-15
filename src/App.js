import React from 'react';
import './App.css'
import Update from './str/Update';
import Read from './str/Read';
import Create from './str/Create';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';



function App() {
  
  return (
    <div className="main">
     <h1>Curd Operation</h1><br/>
        
     
     <BrowserRouter>
     <Routes>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/' element={<Read/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/update'element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}


export default App;
