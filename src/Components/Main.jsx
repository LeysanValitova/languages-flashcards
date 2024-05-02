import React from 'react'
import Table from './Table/Table'
import NewWordsForm from './NewWordsForm/NewWordsForm'
import CardSlider from './CardSlider/CardSlider'
import {Routes, Route } from 'react-router-dom';
import Missing from './Missing/Missing';


function Main() {
  return (
    <div>
      <Routes>
        <Route path='/table' element={
          <div>
            <NewWordsForm/>
            <Table/>
          </div>
        }>
       
        </Route>
        <Route
        path='/game'
        element={<CardSlider/>}
        >
        </Route>
        <Route
        path='*'
        element={<Missing/>}>
        </Route>
       
      </Routes>
    </div>
  )
}

export default Main