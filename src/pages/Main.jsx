import React from 'react'
import Table from '../Components/Table/Table'
import NewWordsForm from '../Components/NewWordsForm/NewWordsForm'
import Navigation from '../Components/Navigation/Navigation';


function Main() {
  return (
    <div>
      <Navigation/>
      <NewWordsForm/>
      <Table/>
    </div>
  )
}

export default Main