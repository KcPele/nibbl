import React from 'react'
import StartedCard from './StartedCard'
import { data } from  "../assets/data"
const Started = () => {
  return (
    <div className='section__margin-top started__container'>
        <div className='started__container-header'>
            <h1>Getting Started With <span>Nibbl.</span></h1>
        </div>
        <div className='startedcard__container flex__wrapper-container'>
        { data.map((value) => {
               return <StartedCard key={value.id} id={value.id} title={value.title} text={value.text} />
        })}
            
        </div>
    </div>
  )
}

export default Started