import {useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/loginPage';
import Section from './components/section';

function App() {
  const [userData, setUserData] = useState(['public1', 'public2','public3', 'public4'])
  const [usersPrivateData, setusersPrivateData] = useState({
    User1: ['private1', 'private2', 'private3'],
    User2: ['private4', 'private5', 'private6']
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard/:id' element={<Section publicData={{userData,setUserData}} pvtData = {{usersPrivateData,setusersPrivateData}} />} />
      </Routes>
    </div>
  );
}

export default App;
