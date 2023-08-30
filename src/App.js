import React, { Component } from 'react'
import {BrowserRouter } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import Participants from './components/Participants';


 class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/participants' element={<Participants />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}


export default App;
