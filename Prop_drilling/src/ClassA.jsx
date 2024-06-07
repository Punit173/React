import React from 'react'
import ClassB from './ClassB'

const ClassA = ({name,age,gender}) => {
  return (
    <>
        <ClassB name={name} age={age} gender={gender}/>
    </>
  )
}

export default ClassA
