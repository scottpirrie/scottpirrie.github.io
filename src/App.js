import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/recipes' element={<Recipes/>}/>
            </Routes>
        </div>
    );
}

export default App;