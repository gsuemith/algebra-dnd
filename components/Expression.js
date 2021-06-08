import React, { useState } from 'react'
import Exponent from './Exponent'
import Fraction from './Fraction'
import PlusSign from './PlusSign'


const Expression = ({ expression }) => {
  const [active, setActive] = useState(false)
  const { operator, operands, variable, number } = expression

  if (variable) {
    return <div 
      style={{backgroundColor:`${active ? "pink":"None"}`}}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      >
        {`${variable}`}</div>
  }

  if (number) {
    return <div 
      style={{backgroundColor:`${active ? "pink":"None"}`}}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      >
        {`${number}`}</div>
  }

  if (operator === "quotient") {
    return <Fraction operands={operands}/>
  }

  if (operator === "exponent") {
    return <Exponent operands={operands} />
  }

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center",}}>
      {
        operands.map((expression, idx) => (
        <>
          <div style={{cursor:"pointer"}}>
            <Expression expression={expression}/>
          </div>
          { (operator === "sum" && idx < operands.length - 1) && <PlusSign />}
        </>
        ))
      }
    </div>
  )
}

export default Expression
