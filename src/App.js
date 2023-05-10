
import './App.css'
import {Update} from './Components/Update';
import {Read }from './Components/Read';
import {Create} from './Components/Create';


function App() {
  return (
    <div className="main">
     <h1>Curd Operation</h1>
     <Update/>
     <Read/>
     <Create/>
    </div>
  );
}

export default App;
