import './App.css';
import Register from './resgister_page/Register_page'
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import SignIn_page from './signIn/SignIn_page';
import Todo_page from './todo/Todo_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/signIn' element={<SignIn_page/>}/>
            <Route path='/home' element={<Todo_page/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
