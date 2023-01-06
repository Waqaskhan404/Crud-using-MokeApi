import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './component/Create';
import Menu from './component/Menu';
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
    <>
    <Menu/>
    <Routes>
    <Route path='/' element={<Create/>}></Route>
    <Route path='/read' element={<Read/>}></Route>
    <Route path='/update' element={<Update/>}></Route>


    </Routes>
      


    </>
  );
}

export default App;
