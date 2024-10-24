import './styles/App.css';
import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';

const Dictionary = lazy(()=>import('./pages/Dictionary'));
const Tasks = lazy(()=>import('./pages/Tasks'));

function App() {
  return (
    <Router>
<div className="App">
  <header className="App-header">
    <NavLink to="/Dictionary" className="App-link" activeClassName="active">Словник</NavLink>
    <NavLink to="/Tasks" className="App-link" activeClassName="active">Завдання</NavLink>
  </header>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Dictionary" element={<Dictionary/>} />
    </Routes>
  </Suspense>
</div>
</Router>
  );
}

export default App;
