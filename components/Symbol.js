import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Number = styled.div`
  :hover {
    background-color: pink;
  }
`

const Symbol = ({ symbol, id }) => {
  const [dragId, setDragId] = useState(0)
  useEffect(() => {
    setDragId(Math.floor(Math.random()*10**6))
  }, [])
  

  return (
    <Draggable draggableId={`${dragId}`} index={dragId}>
      {
        provided => (
          <Number 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {symbol}
          </Number>
        )
      }
    </Draggable>
  )
}

export default Symbol
