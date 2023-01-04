import './App.css';
import { Fullname} from './Component/Profile/FullName';
import { Addresse} from './Component/Profile/Address' ;
import {Photo} from './Component/Profile/Photo' ;
import { Button } from 'bootstrap';

function App() {
  return (
    <div className=' divp' style={{display:"flex",justifyContent:"center"}}>

    
    <div  className='div1' >
      <Photo/>
      <Fullname/>
      <Addresse/>
      <button onClick={()=> alert("cherif")}>click</button>
      
    </div>
    </div>
  );
}

export default App;
