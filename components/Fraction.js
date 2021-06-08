import React from 'react'
import Expression from './Expression'

const Fraction = ({ operands }) => {
  const { numerator, denominator } = operands

  return (
    <>
    <div style={{display:"flex", flexDirection:"column"}} >
      <div>
        <Expression expression={numerator}/>
      </div>
      <div style={{ borderTop: "solid 4px black"}}>
        <Expression expression={denominator}/>
      </div>
    </div>
    </>
  )
}

export default Fraction
