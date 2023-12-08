import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
