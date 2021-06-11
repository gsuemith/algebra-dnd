import React from 'react'

import Exponent from './Exponent'
import Fraction from './Fraction'
import PlusSign from './PlusSign'
import Symbol from './Symbol'


const Expression = ({ expression, id }) => {
  const { operator, operands, variable, number } = expression

  if (variable || number) {
    return <Symbol symbol={`${variable || number}`} id={id}/>
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
          <div 
            // style={{cursor:"pointer"}} 
            key={id**(idx+1)}
          >
            <Expression expression={expression} id={id**(idx+1)}/>
          </div>
          { (operator === "sum" && idx < operands.length - 1) && <PlusSign key={`${idx}+`}/>}
        </>
        ))
      }
    </div>
  )
}

export default Expression
