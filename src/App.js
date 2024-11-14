import {Route, Routes } from 'react-router-dom';
import {Home, Todos, AboutUs} from "./Pages/";
import AuthForm from './Pages/AuthForm';


function App() {
  return (
    <div className="text-center">
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Todos' element={<Todos/>}/>
          <Route path='/Aboutus' element={<AboutUs/>}/>
          <Route path='/Auth-Form' element={<AuthForm/>}/>
       </Routes> 
    </div>
  );
}

export default App;
