import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Company from './components/pages/Company';
import Contacts from './components/pages/Contacts';
import Home from './components/pages/Home';
import Products from './components/pages/Products';

function App() {
  return (
    <div>
      {/* Rotas para a navegação do navbar */}
      <Router>
        <Routes>
          <Route path='/empresa' element={<Home/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
