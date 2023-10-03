import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './component/AddPost';
import ShowPost from './component/ShowPost';
import Update from './component/Update';
//https://64ff2966f8b9eeca9e29b94a.mockapi.io/crud
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<AddPost/>} />
          <Route path="/allpost" element={<ShowPost/>} />
          <Route path="/update/:id" element={<Update/>} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
