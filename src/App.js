import React from 'react'

import styled from 'styled-components'

import useTodos from './useTodos'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { FilteredList } from './components/filteredList'

function App () {
  const { list, createTodo, toggleComplete, showAll, showActive, showCompleted } = useTodos()

  return (
    <Wrapper>
      <TodosWrapper>
        <AddTodo onAddTodo={createTodo} />
        <TodoList
          items={list}
          toggleComplete={toggleComplete}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
        />
      </TodosWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default App
