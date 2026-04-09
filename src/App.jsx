import  { useState } from 'react'
import { Movie } from './pages/Movie'
import { MovieForm } from './components/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { MovieDitails } from './pages/MovieDitails';

const App = ()=>{
  const[search,setSearch]= useState("")

  return<>
  <BrowserRouter>
  <Navbar setSearch={setSearch} />
  <Routes>
    <Route path='/' element={<Movie search={search} />}/>
    <Route path='/add' element={<MovieForm/>}/>
    <Route path = '/movie/:id' element={<MovieDitails/>}/>
  </Routes>

  </BrowserRouter>
  </> 
}

export default App