import React from 'react'

export const FilteredList = ({ showAll, showActive, showCompleted }) => {
  return (
    <>
      <a href="#" onClick={ () => showAll}>
        all
      </a>
      <a href="#" onClick={ showActive}>
        Active
      </a>
      <a href="#" onClick={ showCompleted}>
        Completed
      </a>
    </>
  )
}
