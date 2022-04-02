import './App.css';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <div>
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/add" exact element={<AddStudent/>}/>
            <Route path="/del" exact element={<DeleteStudent/>}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
