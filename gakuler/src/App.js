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
          <Route path='/' element={<Home/>}/>
          <Route path='/gakuler/src/components/pages/Company.jsx' element={<Company/>}/>
          <Route path='/gakuler/src/components/pages/Contacts.jsx' element={<Contacts/>}/>
          <Route path='/gakuler/src/components/pages/Products.jsx' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
