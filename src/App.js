import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Counter from './Counter/Counter'
import Todo from './Todo/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<Todo/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        </Routes></BrowserRouter>

    </div>
  );
}

export default App;
