import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/recipes' element={<Recipes/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;