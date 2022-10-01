import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Header from './templates/Header';

const Routering = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default Routering
