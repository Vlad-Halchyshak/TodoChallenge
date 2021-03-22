import React from 'react'
import styled from 'styled-components'
import { FilteredList } from './filteredList'
import TodoItem from './TodoItem'

const TodoList = ({ items, toggleComplete, showAll, showActive, showCompleted}) => {
 
  return (
    <Wrapper>
      
      <FilteredList showAll={showAll} showActive={showActive} showCompleted={showCompleted }/>
      {items.map((item) => {
        const onComplete = (e) => {
          toggleComplete(item.id)
        }
        return <TodoItem key={item.id} {...item} onComplete={onComplete} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default TodoList
