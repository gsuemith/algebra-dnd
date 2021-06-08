import React from 'react'
import styled from 'styled-components'

const Number = styled.div`
  :hover {
    background-color: pink;
  }
`

const Symbol = ({ symbol }) => {
  return (
    <Number>
      {symbol}
    </Number>
  )
}

export default Symbol
