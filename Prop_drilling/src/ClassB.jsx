import React from 'react'
import ClassC from './ClassC'

const ClassB = ({name,age,gender}) => {
  return (
    <>
        <ClassC name={name} age={age} gender={gender}/>
    </>
  )
}

export default ClassB
