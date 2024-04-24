import React from 'react'
import Table from './Table'
import NewWordsForm from './NewWordsForm'
import Card from './Card'
import CardSlider from './CardSlider/CardSlider'

function Main() {
  return (
    <div>
        <NewWordsForm/>
        <Table/>
        <Card/>
        <CardSlider/>
    </div>
  )
}

export default Main